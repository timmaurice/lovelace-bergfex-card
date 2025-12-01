import { LitElement, TemplateResult, html, css, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, ResortConfig, BergfexCardConfig } from './types.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { localize } from './localize.js';
import { fireEvent, formatRelativeTime } from './utils.js';
import styles from './styles/card.styles.scss';

import mountainIcon from './svg/mountain-peak.svg';
import valleyIcon from './svg/mountain-valley.svg';

export interface LovelaceHelpers {
  createCardElement(config: { type: string; [key: string]: unknown }): LovelaceCard;
}

interface Resort {
  name?: string;
  status?: string;
  snow_valley?: string;
  snow_mountain?: string;
  new_snow?: string;
  lifts_open?: string;
  lifts_total?: string;
  last_update?: string;
  snow_condition?: string;
  last_snowfall?: string;
  avalanche_warning?: string;
  slopes_open_km?: string;
  slopes_total_km?: string;
  slopes_open?: string;
  slopes_total?: string;
  slope_condition?: string;
}

type LovelaceCardConstructor = new () => LovelaceCard;
const ELEMENT_NAME = 'bergfex-card';
const EDITOR_ELEMENT_NAME = `${ELEMENT_NAME}-editor`;

declare global {
  interface Window {
    customCards?: {
      type: string;
      name: string;
      description: string;
      documentationURL: string;
      preview?: boolean;
    }[];
    loadCardHelpers(): Promise<LovelaceHelpers>;
  }
}

@customElement(ELEMENT_NAME)
export class BergfexCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @query('ha-card') private _card!: LovelaceCard;
  @state() private _config!: BergfexCardConfig;

  public setConfig(config: BergfexCardConfig): void {
    if (!config || !config.resorts || !Array.isArray(config.resorts) || config.resorts.length === 0) {
      throw new Error(localize(this.hass, 'common.errors.no_resorts'));
    }
    this._config = {
      show_snow: true,
      show_lifts: true,
      show_last_updated: true,
      hide_closed_resorts: false,
      show_link: true,
      show_conditions: true,
      show_avalanche: true,
      show_slopes: true,
      show_last_snowfall: true,
      show_elevation: true,
      ...config,
    };
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    // Ensure that the required Home Assistant components are loaded before creating the editor
    // by loading a core editor that uses them.
    const helpers = await window.loadCardHelpers();
    const entitiesCard = await helpers.createCardElement({ type: 'entities', entities: [] });
    const constructor = entitiesCard?.constructor as LovelaceCardConstructor & {
      getConfigElement?: () => Promise<LovelaceCardEditor>;
    };
    if (constructor?.getConfigElement) {
      await constructor.getConfigElement();
    }

    await import('./editor.js');
    return document.createElement(EDITOR_ELEMENT_NAME) as LovelaceCardEditor;
  }

  public static getStubConfig(): Record<string, unknown> {
    return {
      title: 'Bergfex',
      resorts: [],
    };
  }

  public getCardSize(): number {
    return 3;
  }

  private _getResorts(hass: HomeAssistant, config: BergfexCardConfig): Record<string, Resort> {
    const resorts: Record<string, Resort> = {};

    const allEntities = Object.values(hass.states);

    config.resorts.forEach((resort: ResortConfig) => {
      // The editor now stores device IDs as strings.
      // We still support the object format for manual YAML configuration.
      const deviceId = typeof resort === 'string' ? resort : resort.device;
      const customName = typeof resort === 'object' ? resort.name : undefined;

      const deviceEntities = allEntities.filter(
        (entity) => hass.entities[entity.entity_id]?.device_id === deviceId && entity.entity_id.startsWith('sensor.'),
      );

      if (deviceEntities.length === 0) {
        return;
      }

      // Use the device_id as the unique key for the resort.
      if (!resorts[deviceId]) {
        resorts[deviceId] = {};
      }

      if (customName) {
        resorts[deviceId].name = customName;
      }

      deviceEntities.forEach((entity) => {
        const entityId = entity.entity_id;
        if (entityId.endsWith('_status')) resorts[deviceId].status = entityId;
        if (entityId.endsWith('_snow_valley')) resorts[deviceId].snow_valley = entityId;
        if (entityId.endsWith('_snow_mountain')) resorts[deviceId].snow_mountain = entityId;
        if (entityId.endsWith('_new_snow')) resorts[deviceId].new_snow = entityId;
        if (entityId.endsWith('_lifts_open')) resorts[deviceId].lifts_open = entityId;
        if (entityId.endsWith('_lifts_total')) resorts[deviceId].lifts_total = entityId;
        if (entityId.endsWith('_last_update')) resorts[deviceId].last_update = entityId;
        if (entityId.endsWith('_snow_condition')) resorts[deviceId].snow_condition = entityId;
        if (entityId.endsWith('_last_snowfall')) resorts[deviceId].last_snowfall = entityId;
        if (entityId.endsWith('_avalanche_warning')) resorts[deviceId].avalanche_warning = entityId;
        if (entityId.endsWith('_slopes_open_km')) resorts[deviceId].slopes_open_km = entityId;
        if (entityId.endsWith('_slopes_total_km')) resorts[deviceId].slopes_total_km = entityId;
        if (entityId.endsWith('_slopes_open')) resorts[deviceId].slopes_open = entityId;
        if (entityId.endsWith('_slopes_total')) resorts[deviceId].slopes_total = entityId;
        if (entityId.endsWith('_slope_condition')) resorts[deviceId].slope_condition = entityId;
      });
    });

    return resorts;
  }

  protected shouldUpdate(changedProperties: Map<string | number | symbol, unknown>): boolean {
    if (changedProperties.has('_config')) {
      return true;
    }

    const oldHass = changedProperties.get('hass') as HomeAssistant | undefined;
    if (oldHass) {
      const resorts = this._getResorts(this.hass, this._config);
      const entities = Object.values(resorts).flatMap((s) => Object.values(s));
      const hasChanged = entities.some((entity) => entity && oldHass.states[entity] !== this.hass.states[entity]);
      return hasChanged || oldHass.language !== this.hass.language;
    }

    return true; // First render
  }

  private _handleMoreInfo(entityId: string): void {
    fireEvent(this, 'hass-more-info', { entityId });
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    let resortEntries = Object.entries(this._getResorts(this.hass, this._config));

    if (this._config.hide_closed_resorts) {
      resortEntries = resortEntries.filter(
        ([, r]) => r.status && this.hass.states[r.status].state.toLowerCase() === 'open',
      );
    }

    const sortBy = this._config.sort_by;
    if (sortBy && sortBy !== 'none') {
      resortEntries.sort(([, a], [, b]) => {
        let valA: number | string | undefined;
        let valB: number | string | undefined;

        switch (sortBy) {
          case 'mountain':
            valA = a.snow_mountain ? parseFloat(this.hass.states[a.snow_mountain].state) : NaN;
            valB = b.snow_mountain ? parseFloat(this.hass.states[b.snow_mountain].state) : NaN;
            break;
          case 'valley':
            valA = a.snow_valley ? parseFloat(this.hass.states[a.snow_valley].state) : NaN;
            valB = b.snow_valley ? parseFloat(this.hass.states[b.snow_valley].state) : NaN;
            break;
          case 'new':
            valA = a.new_snow ? parseFloat(this.hass.states[a.new_snow].state) : NaN;
            valB = b.new_snow ? parseFloat(this.hass.states[b.new_snow].state) : NaN;
            break;
          case 'lift':
            valA = a.lifts_open ? parseFloat(this.hass.states[a.lifts_open].state) : NaN;
            valB = b.lifts_open ? parseFloat(this.hass.states[b.lifts_open].state) : NaN;
            break;
          case 'update':
            valA = a.last_update ? this.hass.states[a.last_update].state : '0';
            valB = b.last_update ? this.hass.states[b.last_update].state : '0';
            return new Date(valB).getTime() - new Date(valA).getTime(); // Newest first
        }

        if (typeof valA === 'number' && typeof valB === 'number') {
          const aIsNaN = isNaN(valA);
          const bIsNaN = isNaN(valB);

          if (aIsNaN && bIsNaN) return 0;
          if (aIsNaN) return 1; // Push invalid 'a' to the end
          if (bIsNaN) return -1; // Push invalid 'b' to the end

          return valB - valA; // Sort descending
        }
        return 0;
      });
    }

    return html`
      <ha-card .header=${this._config.title} tabindex="0">
        <div class="card-content">
          ${resortEntries.map(([resortId, resort]) => {
            const primaryEntity = resort.status;
            if (!primaryEntity) {
              return html`
                <div class="warning">
                  ${localize(this.hass, 'component.bergfex-card.card.resort_not_found', {
                    resort: resortId,
                  })}
                </div>
              `;
            }

            const device = this.hass.devices[resortId];

            const resortName = resort.name || device?.name_by_user || device?.name || 'Unknown Resort';

            const statusState = resort.status ? this.hass.states[resort.status] : undefined;
            const status = statusState?.state ?? 'N/A';
            const link = statusState?.attributes.link as string | undefined;
            const snow_valley = resort.snow_valley ? this.hass.states[resort.snow_valley] : undefined;
            const snow_mountain = resort.snow_mountain ? this.hass.states[resort.snow_mountain] : undefined;
            const new_snow = resort.new_snow ? this.hass.states[resort.new_snow] : undefined;
            const lifts_open = resort.lifts_open ? this.hass.states[resort.lifts_open] : undefined;
            const lifts_total = resort.lifts_total ? this.hass.states[resort.lifts_total] : undefined;
            const last_update = resort.last_update ? this.hass.states[resort.last_update] : undefined;
            const snow_condition = resort.snow_condition ? this.hass.states[resort.snow_condition] : undefined;
            const slope_condition = resort.slope_condition ? this.hass.states[resort.slope_condition] : undefined;
            const last_snowfall = resort.last_snowfall ? this.hass.states[resort.last_snowfall] : undefined;
            const avalanche_warning = resort.avalanche_warning ? this.hass.states[resort.avalanche_warning] : undefined;
            const slopes_open_km = resort.slopes_open_km ? this.hass.states[resort.slopes_open_km] : undefined;
            const slopes_total_km = resort.slopes_total_km ? this.hass.states[resort.slopes_total_km] : undefined;
            const slopes_open = resort.slopes_open ? this.hass.states[resort.slopes_open] : undefined;
            const slopes_total = resort.slopes_total ? this.hass.states[resort.slopes_total] : undefined;

            return html`
              <div class="resort" tabindex="0" @click=${() => this._handleMoreInfo(primaryEntity)}>
                <div class="resort-header">
                  <span class="resort-name">${resortName}</span>
                  <span
                    class=${classMap({
                      'resort-status': true,
                      open: status.toLowerCase() === 'open',
                      closed: status.toLowerCase() === 'closed',
                    })}
                    >${status}</span
                  >
                </div>

                <div class="details">
                  ${this._config.show_snow
                    ? html`
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (snow_mountain) {
                              this._handleMoreInfo(snow_mountain.entity_id);
                            }
                          }}
                        >
                          ${unsafeSVG(mountainIcon)}
                          <div class="detail-item-value">
                            ${snow_mountain && !isNaN(parseFloat(snow_mountain.state))
                              ? html`<span
                                  >${snow_mountain.state}
                                  ${snow_mountain.attributes.unit_of_measurement ?? ''}${this._config.show_elevation &&
                                  snow_mountain.attributes.elevation
                                    ? html` <span class="elevation">(${snow_mountain.attributes.elevation}m)</span>`
                                    : ''}</span
                                >`
                              : html`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.header.snow_mountain')}</span
                            >
                          </div>
                        </div>
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (snow_valley) {
                              this._handleMoreInfo(snow_valley.entity_id);
                            }
                          }}
                        >
                          ${unsafeSVG(valleyIcon)}
                          <div class="detail-item-value">
                            ${snow_valley && !isNaN(parseFloat(snow_valley.state))
                              ? html`<span
                                  >${snow_valley.state}
                                  ${snow_valley.attributes.unit_of_measurement ?? ''}${this._config.show_elevation &&
                                  snow_valley.attributes.elevation
                                    ? html` <span class="elevation">(${snow_valley.attributes.elevation}m)</span>`
                                    : ''}</span
                                >`
                              : html`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.header.snow_valley')}</span
                            >
                          </div>
                        </div>
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (new_snow) {
                              this._handleMoreInfo(new_snow.entity_id);
                            }
                          }}
                        >
                          <ha-icon icon="mdi:weather-snowy-heavy"></ha-icon>
                          <div class="detail-item-value">
                            ${new_snow && !isNaN(parseFloat(new_snow.state))
                              ? html`<span>${new_snow.state} ${new_snow.attributes.unit_of_measurement ?? ''}</span>`
                              : html`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.header.new_snow')}</span
                            >
                          </div>
                        </div>
                      `
                    : ''}
                  ${this._config.show_lifts
                    ? html`
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (lifts_open) {
                              this._handleMoreInfo(lifts_open.entity_id);
                            }
                          }}
                        >
                          <ha-icon icon="mdi:gondola"></ha-icon>
                          <div class="detail-item-value">
                            ${lifts_open &&
                            lifts_total &&
                            !isNaN(parseFloat(lifts_open.state)) &&
                            !isNaN(parseFloat(lifts_total.state))
                              ? html`<span>${lifts_open.state}/${lifts_total.state}</span>`
                              : html`<span>N/A</span>`}
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.lifts_open')}</span
                            >
                          </div>
                        </div>
                      `
                    : ''}
                  ${this._config.show_conditions && (snow_condition || slope_condition)
                    ? html`
                        ${snow_condition
                          ? html`
                              <div
                                class="detail-item"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  if (snow_condition) {
                                    this._handleMoreInfo(snow_condition.entity_id);
                                  }
                                }}
                              >
                                <ha-icon icon="mdi:weather-snowy"></ha-icon>
                                <div class="detail-item-value">
                                  <span>${snow_condition.state ?? 'N/A'}</span>
                                  <span class="detail-item-label"
                                    >${localize(this.hass, 'component.bergfex-card.card.header.snow_condition')}</span
                                  >
                                </div>
                              </div>
                            `
                          : ''}
                        ${slope_condition
                          ? html`
                              <div
                                class="detail-item"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  if (slope_condition) {
                                    this._handleMoreInfo(slope_condition.entity_id);
                                  }
                                }}
                              >
                                <ha-icon icon="mdi:ski"></ha-icon>
                                <div class="detail-item-value">
                                  <span>${slope_condition.state ?? 'N/A'}</span>
                                  <span class="detail-item-label"
                                    >${localize(this.hass, 'component.bergfex-card.card.header.slope_condition')}</span
                                  >
                                </div>
                              </div>
                            `
                          : ''}
                      `
                    : ''}
                  ${this._config.show_avalanche && avalanche_warning
                    ? html`
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (avalanche_warning) {
                              this._handleMoreInfo(avalanche_warning.entity_id);
                            }
                          }}
                        >
                          <ha-icon icon="mdi:alert"></ha-icon>
                          <div class="detail-item-value">
                            <span>${avalanche_warning.state ?? 'N/A'}</span>
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.header.avalanche_warning')}</span
                            >
                          </div>
                        </div>
                      `
                    : ''}
                  ${this._config.show_last_snowfall && last_snowfall
                    ? html`
                        <div
                          class="detail-item"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (last_snowfall) {
                              this._handleMoreInfo(last_snowfall.entity_id);
                            }
                          }}
                        >
                          <ha-icon icon="mdi:calendar-snowflake"></ha-icon>
                          <div class="detail-item-value">
                            <span>${last_snowfall.state ?? 'N/A'}</span>
                            <span class="detail-item-label"
                              >${localize(this.hass, 'component.bergfex-card.card.header.last_snowfall')}</span
                            >
                          </div>
                        </div>
                      `
                    : ''}
                  ${this._config.show_slopes && (slopes_open_km || slopes_total_km || slopes_open || slopes_total)
                    ? html`
                        ${slopes_open_km && slopes_total_km
                          ? html`
                              <div
                                class="detail-item"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  if (slopes_open_km) {
                                    this._handleMoreInfo(slopes_open_km.entity_id);
                                  }
                                }}
                              >
                                <ha-icon icon="mdi:slope-downhill"></ha-icon>
                                <div class="detail-item-value">
                                  ${slopes_open_km &&
                                  slopes_total_km &&
                                  !isNaN(parseFloat(slopes_open_km.state)) &&
                                  !isNaN(parseFloat(slopes_total_km.state))
                                    ? html`<span
                                        >${slopes_open_km.state}/${slopes_total_km.state}
                                        ${slopes_open_km.attributes.unit_of_measurement ?? 'km'}</span
                                      >`
                                    : html`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${localize(this.hass, 'component.bergfex-card.card.header.slopes_info')}</span
                                  >
                                </div>
                              </div>
                            `
                          : ''}
                        ${slopes_open && slopes_total
                          ? html`
                              <div
                                class="detail-item"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  if (slopes_open) {
                                    this._handleMoreInfo(slopes_open.entity_id);
                                  }
                                }}
                              >
                                <ha-icon icon="mdi:counter"></ha-icon>
                                <div class="detail-item-value">
                                  ${slopes_open &&
                                  slopes_total &&
                                  !isNaN(parseFloat(slopes_open.state)) &&
                                  !isNaN(parseFloat(slopes_total.state))
                                    ? html`<span>${slopes_open.state}/${slopes_total.state}</span>`
                                    : html`<span>N/A</span>`}
                                  <span class="detail-item-label"
                                    >${localize(this.hass, 'component.bergfex-card.card.header.slopes_info')}
                                    (${localize(this.hass, 'component.bergfex-card.card.header.slopes_total_km')})</span
                                  >
                                </div>
                              </div>
                            `
                          : ''}
                      `
                    : ''}
                </div>
                <div class="resort-footer">
                  ${this._config.show_link && link
                    ? html`
                        <a
                          href=${link}
                          target="_blank"
                          class="link-icon"
                          title=${localize(this.hass, 'component.bergfex-card.card.link_title', { resortName })}
                          @click=${(e: Event) => e.stopPropagation()}
                        >
                          <ha-icon icon="mdi:link-variant"></ha-icon>
                        </a>
                      `
                    : html`<div></div>`}
                  ${this._config.show_last_updated && last_update
                    ? html`
                        <div
                          class="last-updated"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            if (last_update) {
                              this._handleMoreInfo(last_update.entity_id);
                            }
                          }}
                        >
                          <ha-icon icon="mdi:clock-outline"></ha-icon>
                          <span>${formatRelativeTime(last_update.state, this.hass)}</span>
                        </div>
                      `
                    : ''}
                </div>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}

if (typeof window !== 'undefined') {
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: ELEMENT_NAME,
    name: 'Bergfex Card',
    description: 'A Lovelace card to display ski resort conditions from Bergfex.',
    documentationURL: 'https://github.com/timmaurice/lovelace-bergfex-card',
  });
}
