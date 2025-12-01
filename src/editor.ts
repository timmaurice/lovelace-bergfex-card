import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor, BergfexCardConfig } from './types';
import { localize } from './localize';
import { fireEvent } from './utils';
import editorStyles from './styles/editor.styles.scss';

const GENERAL_SCHEMA = [{ name: 'title', selector: { text: {} } }];

const RESORTS_SCHEMA = [
  {
    name: 'resorts',
    selector: {
      device: {
        multiple: true,
        integration: 'bergfex',
      },
    },
  },
];

@customElement('bergfex-card-editor')
export class BergfexCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: BergfexCardConfig;

  public setConfig(config: BergfexCardConfig): void {
    this._config = {
      show_snow: true,
      show_lifts_slopes: true,
      show_conditions: true,
      show_forecast: false,
      ...config,
    };
  }

  private _valueChanged(ev: { detail: { value: Partial<BergfexCardConfig> } }): void {
    if (!this.hass || !this._config) return;

    fireEvent(this, 'config-changed', { config: { ...this._config, ...ev.detail.value } });
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const displaySchema = [
      {
        name: 'show_snow',
        selector: { boolean: {} },
      },
      {
        name: 'show_lifts_slopes',
        selector: { boolean: {} },
      },
      {
        name: 'show_conditions',
        selector: { boolean: {} },
      },
      {
        name: 'show_forecast',
        selector: { boolean: {} },
      },
      {
        name: 'show_link',
        selector: { boolean: {} },
      },
      {
        name: 'show_last_updated',
        selector: { boolean: {} },
      },
      {
        name: 'hide_closed_resorts',
        selector: { boolean: {} },
      },
      {
        name: 'sort_by',
        selector: {
          select: {
            mode: 'dropdown',
            clearable: true,
            options: [
              {
                value: 'mountain',
                label: localize(this.hass, 'component.bergfex-card.editor.sort_by_options.mountain'),
              },
              { value: 'valley', label: localize(this.hass, 'component.bergfex-card.editor.sort_by_options.valley') },
              { value: 'new', label: localize(this.hass, 'component.bergfex-card.editor.sort_by_options.new') },
              { value: 'lift', label: localize(this.hass, 'component.bergfex-card.editor.sort_by_options.lift') },
              { value: 'update', label: localize(this.hass, 'component.bergfex-card.editor.sort_by_options.update') },
            ],
          },
        },
      },
    ];

    return html`
      <ha-card>
        <div class="card-content card-config">
          <div class="group">
            <div class="group-header">${localize(this.hass, 'component.bergfex-card.editor.groups.core')}</div>
            <ha-form
              .schema=${GENERAL_SCHEMA}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${(s: { name: string }) => localize(this.hass, `component.bergfex-card.editor.${s.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <ha-form
              .schema=${RESORTS_SCHEMA}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${(s: { name: string }) => localize(this.hass, `component.bergfex-card.editor.${s.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>

          <div class="group">
            <div class="group-header">${localize(this.hass, 'component.bergfex-card.editor.groups.display')}</div>
            <ha-form
              .schema=${displaySchema}
              .hass=${this.hass}
              .data=${this._config}
              .computeLabel=${(s: { name: string }) => localize(this.hass, `component.bergfex-card.editor.${s.name}`)}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    ${unsafeCSS(editorStyles)}
  `;
}
