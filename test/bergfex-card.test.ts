import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import '../src/bergfex-card';
import * as utils from '../src/utils';
import type { BergfexCard } from '../src/bergfex-card';
import { HomeAssistant, BergfexCardConfig } from '../src/types';

// Mock console.info
vi.spyOn(console, 'info').mockImplementation(() => undefined);

// Define a minimal interface for the ha-card element
interface HaCard extends HTMLElement {
  header?: string;
}

/**
 * Creates a mock station with entities and states.
 * @param id - A unique identifier for the station (e.g., 'aral').
 * @param name - The friendly name of the resort.
 * @param data - An object with resort data.
 * @returns An object containing entities and states for the mock station.
 */
const createMockResort = (
  id: string,
  name: string,
  data: {
    status: 'Open' | 'Closed';
    link?: string;
    snow_valley?: string;
    snow_mountain?: string;
    new_snow?: string;
    lifts_open?: string;
    lifts_total?: string;
  },
) => {
  const device_id = `device-${id}`;
  const states: HomeAssistant['states'] = {};
  const entities: HomeAssistant['entities'] = {};
  const devices: HomeAssistant['devices'] = {};

  devices[device_id] = {
    id: device_id,
    name: name,
  };

  const createEntity = (key: string, state: string, unit?: string, extraAttributes: Record<string, unknown> = {}) => {
    const entity_id = `sensor.${id}_${key}`;
    entities[entity_id] = { entity_id, device_id };
    states[entity_id] = {
      entity_id,
      state,
      attributes: { friendly_name: `${name} ${key}`, unit_of_measurement: unit, ...extraAttributes },
      last_changed: new Date().toISOString(),
      last_updated: new Date().toISOString(),
    };
  };

  createEntity('status', data.status, undefined, { link: data.link });
  if (data.snow_valley) createEntity('snow_valley', data.snow_valley, 'cm');
  if (data.snow_mountain) createEntity('snow_mountain', data.snow_mountain, 'cm');
  if (data.new_snow) createEntity('new_snow', data.new_snow, 'cm');
  if (data.lifts_open) createEntity('lifts_open', data.lifts_open);
  if (data.lifts_total) createEntity('lifts_total', data.lifts_total);
  createEntity('last_update', new Date().toISOString());

  return { entities, states, devices, device_id };
};

describe('BergfexCard', () => {
  let element: BergfexCard;
  let hass: HomeAssistant;
  let config: BergfexCardConfig;
  const fireEventSpy = vi.spyOn(utils, 'fireEvent');

  /**
   * Helper function to set up the card element with a given configuration and mock stations.
   * @param configUpdates - Partial configuration to apply.
   * @param resorts - An array of mock resort objects.
   */
  const setupCard = async (
    configUpdates: Partial<BergfexCardConfig>,
    ...resorts: ReturnType<typeof createMockResort>[]
  ) => {
    Object.assign(config, configUpdates);
    if (!configUpdates.resorts) {
      config.resorts = resorts.map((s) => s.device_id);
    }
    hass.entities = resorts.reduce((acc, s) => ({ ...acc, ...s.entities }), {});
    hass.states = resorts.reduce((acc, s) => ({ ...acc, ...s.states }), {});
    hass.devices = resorts.reduce((acc, s) => ({ ...acc, ...s.devices }), {});
    element.hass = hass;
    element.setConfig(config);
    await element.updateComplete;
  };

  beforeEach(() => {
    hass = {
      localize: (key: string) => key,
      language: 'en',
      locale: {
        language: 'en',
        number_format: 'comma_decimal',
        time_format: '24',
      },
      states: {},
      entities: {},
      devices: {},
      callWS: vi.fn(),
    } as HomeAssistant;

    config = {
      type: 'custom:bergfex-card',
      resorts: [],
    };

    element = document.createElement('bergfex-card') as BergfexCard;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('Initialization and Configuration', () => {
    it('should create the component instance', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.tagName.toLowerCase()).toBe('bergfex-card');
    });

    it('should throw an error if no resorts are provided', () => {
      element.hass = hass; // Set hass before calling setConfig
      expect(() => element.setConfig({ type: 'custom:bergfex-card', resorts: [] })).toThrow(
        'You need to define at least one resort entity.',
      );
    });
  });

  describe('Rendering', () => {
    it('should render a title if provided', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open' });
      await setupCard({ title: 'Ski Resorts' }, resort);

      const card = element.shadowRoot?.querySelector<HaCard>('ha-card');
      expect(card?.header).toBe('Ski Resorts');
    });

    it('should render resort details correctly', async () => {
      const resortData = {
        status: 'Open' as const,
        snow_mountain: '150',
        snow_valley: '30',
        new_snow: '10',
        lifts_open: '40',
        lifts_total: '45',
      };
      const resort = createMockResort('ischgl', 'Ischgl', resortData);
      await setupCard({ show_elevation: false }, resort);

      const resortEl = element.shadowRoot?.querySelector('.resort');
      expect(resortEl).not.toBeNull();

      expect(resortEl?.querySelector('.resort-name')?.textContent).toBe('Ischgl');
      expect(resortEl?.querySelector('.resort-status')?.textContent).toBe('Open');

      const detailItems = resortEl?.querySelectorAll('.detail-item');
      // Normalize whitespace for more reliable matching
      expect(detailItems?.[0].textContent?.replace(/\s+/g, ' ').trim()).toContain('150 cm'); // snow mountain
      expect(detailItems?.[1].textContent?.replace(/\s+/g, ' ').trim()).toContain('30 cm'); // snow valley
      expect(detailItems?.[2].textContent?.replace(/\s+/g, ' ').trim()).toContain('10 cm'); // new snow
      expect(detailItems?.[3].textContent?.replace(/\s+/g, ' ').trim()).toContain('40/45'); // lifts
    });
  });

  describe('Display Options', () => {
    it('should hide snow details when show_snow is false', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open', snow_mountain: '100' });
      await setupCard({ show_snow: false }, resort);

      const snowIcon = element.shadowRoot?.querySelector('ha-icon[icon="mdi:snowflake-thermometer"]');
      expect(snowIcon).toBeNull();
    });

    it('should hide lift details when show_lifts is false', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open', lifts_open: '10' });
      await setupCard({ show_lifts: false }, resort);

      const liftIcon = element.shadowRoot?.querySelector('ha-icon[icon="mdi:gondola"]');
      expect(liftIcon).toBeNull();
    });

    it('should hide last updated when show_last_updated is false', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open' });
      await setupCard({ show_last_updated: false }, resort);

      const lastUpdatedEl = element.shadowRoot?.querySelector('.last-updated');
      expect(lastUpdatedEl).toBeNull();
    });

    it('should show link icon by default if link attribute exists', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open', link: 'https://example.com' });
      await setupCard({}, resort);

      const linkIcon = element.shadowRoot?.querySelector<HTMLAnchorElement>('.link-icon');
      expect(linkIcon).not.toBeNull();
      expect(linkIcon?.href).toBe('https://example.com/');
    });

    it('should hide link icon when show_link is false', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open', link: 'https://example.com' });
      await setupCard({ show_link: false }, resort);

      const linkIcon = element.shadowRoot?.querySelector('.link-icon');
      expect(linkIcon).toBeNull();
    });
  });

  describe('Filtering', () => {
    it('should hide closed resorts when hide_closed_resorts is true', async () => {
      const resort1 = createMockResort('resort1', 'Resort 1', { status: 'Open' });
      const resort2 = createMockResort('resort2', 'Resort 2', { status: 'Closed' });

      await setupCard({ hide_closed_resorts: true }, resort1, resort2);

      const resortEls = element.shadowRoot?.querySelectorAll('.resort');
      expect(resortEls?.length).toBe(1);
      expect(resortEls?.[0].querySelector('.resort-name')?.textContent).toBe('Resort 1');
    });

    it('should show all resorts when hide_closed_resorts is false or undefined', async () => {
      const resort1 = createMockResort('resort1', 'Resort 1', { status: 'Open' });
      const resort2 = createMockResort('resort2', 'Resort 2', { status: 'Closed' });

      await setupCard({}, resort1, resort2);

      const resortEls = element.shadowRoot?.querySelectorAll('.resort');
      expect(resortEls?.length).toBe(2);
    });
  });

  describe('Interactions', () => {
    it('should fire hass-more-info event on click', async () => {
      const resort = createMockResort('ischgl', 'Ischgl', { status: 'Open' });
      await setupCard({}, resort);

      const resortEl = element.shadowRoot?.querySelector<HTMLElement>('.resort');
      resortEl?.click();

      expect(fireEventSpy).toHaveBeenCalledWith(element, 'hass-more-info', { entityId: 'sensor.ischgl_status' });
    });
  });
});
