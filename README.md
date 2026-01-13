# Bergfex Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/timmaurice/lovelace-bergfex-card?style=flat-square)
[![GH-downloads](https://img.shields.io/github/downloads/timmaurice/lovelace-bergfex-card/total?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/timmaurice/lovelace-bergfex-card.svg?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/timmaurice/lovelace-bergfex-card.svg?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card)
![GitHub](https://img.shields.io/github/license/timmaurice/lovelace-bergfex-card?style=flat-square)

A custom Lovelace card for Home Assistant to display ski resort and cross-country skiing conditions from the [Bergfex integration](https://github.com/timmaurice/bergfex).

<img src="https://raw.githubusercontent.com/timmaurice/lovelace-bergfex-card/main/image.png" alt="Card Screenshot" />

## Features

- Displays data for multiple ski resorts and cross-country skiing areas from the Bergfex integration.
- Table-like layout for easy comparison between resorts.
- Automatically detects resort type and shows appropriate information (snow/lifts/slopes for ski resorts, tracks/conditions for cross-country areas).
- Show/hide resort details like snow depth, lifts, slopes, track lengths, and last update time.
- Option to hide resorts that are currently closed.
- Status badge color changes based on whether the resort is open or closed.
- Optional 24h trend indicators (↗️/↘️) for snow depths, lift/slope counts, and track lengths.
- Sort resorts by various criteria (snow depth, open lifts, track lengths, etc.).
- Fully customizable through the visual editor.

## Localization

The editor is available in the following languages:

- English
- German
- Polish

<details>
<summary>Contributing Translations</summary>

If you would like to contribute a new translation:

1.  Fork the repository on GitHub.
1.  In the `src/translation` directory, copy `en.json` and rename it to your language code (e.g., `fr.json` for French).
1.  Translate all the values in the new file.
1.  Import new file in `localize.ts` and add it to `translations` array.
1.  Submit a pull request with your changes.

</details>

## Installation

### HACS (Recommended)

This card is available in the Home Assistant Community Store (HACS).

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=timmaurice&repository=lovelace-bergfex-card&category=plugin" target="_blank" rel="noreferrer noopener"><img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." /></a>

<details>
<summary>Manual Installation</summary>

1.  Download the `bergfex-card.js` file from the latest release.
2.  Place it in your `config/www` directory.
3.  Add the resource reference to your Lovelace configuration under `Settings` -> `Dashboards` -> `...` -> `Resources`.
    - URL: `/local/bergfex-card.js`
    - Resource Type: `JavaScript Module`

You can now add the card to your dashboard.

</details>

## Configuration

| Name                  | Type                    | Default      | Description                                                                                                       |
| --------------------- | ----------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `type`                | string                  | **Required** | `custom:bergfex-card`                                                                                             |
| `title`               | string                  | `(none)`     | The title of the card.                                                                                            |
| `resorts`             | list (string or object) | **Required** | A list of device IDs. To set a custom name, use an object: `{ device: '...', name: '...' }`.                      |
| `show_snow`           | boolean                 | `true`       | Show snow depth information (mountain, valley, new) for ski resorts.                                              |
| `show_lifts_slopes`   | boolean                 | `true`       | Show lift and slope statistics for ski resorts, or track lengths for cross-country areas.                         |
| `show_conditions`     | boolean                 | `true`       | Show conditions section (snow/slope/track conditions, avalanche warning, operation status).                       |
| `show_forecast`       | boolean                 | `false`      | Show snow forecast carousel with daily and summary views.                                                         |
| `show_last_updated`   | boolean                 | `true`       | Show the last updated timestamp.                                                                                  |
| `show_trend`          | boolean                 | `false`      | Show 24h trend indicators for numeric values (Snow, Lifts, Slopes, Tracks).                                       |
| `show_link`           | boolean                 | `true`       | Show a link to the Bergfex detail page for the resort.                                                            |
| `hide_closed_resorts` | boolean                 | `false`      | Hide resorts that are currently closed.                                                                           |
| `sort_by`             | string                  | `(none)`     | Sort resorts by a specific value. Options: `mountain`, `valley`, `new`, `lift`, `classical`, `skating`, `update`. |

### Resort Object Parameters

| Name     | Type   | Required     | Description                                         |
| -------- | ------ | ------------ | --------------------------------------------------- |
| `device` | string | **Required** | The device ID of the Bergfex resort.                |
| `name`   | string | `(none)`     | A custom name to overwrite the default resort name. |

### Examples

```yaml
type: custom:bergfex-card
title: Ski Resorts & Cross-Country Areas
hide_closed_resorts: true
show_snow: true
show_lifts_slopes: true
show_conditions: true
sort_by: mountain
resorts:
  # Ski resort entry
  - device: 2bf48bbf7b0c6a5d40ac7c0dfa2c4178 # Replace with your ski resort device ID
    name: My Favorite Ski Resort
  # Cross-country area entry
  - device: abc123def456ghi789 # Replace with your cross-country area device ID
    name: Local Cross-Country Trails
```

## Cross-country sensors

The card recognises cross-country trail sensors and reads totals from either the sensor attributes or separate total entities.

- Preferred sensor names:
  - `_classical_trails_open` — open classical trail length (km)
  - `_skating_trails_open` — open skating trail length (km)
- Totals handling:
  - The card prefers a `total` attribute on the open sensor (e.g., `attributes.total`).
  - If no attribute is present, it will fall back to separate total entities named `_classical_total_km` / `_skating_total_km`.
- Units: `km` is assumed; the card will display the `unit_of_measurement` attribute when available.

## Development

<details>
<summary>To contribute to the development, you'll need to set up a build environment.</summary>

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/timmaurice/lovelace-bergfex-card.git
    cd lovelace-bergfex-card
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    This command will build for changes in the `src` directory and rebuild the card.

    ```bash
    npm run build
    ```

4.  In your Home Assistant instance, you will need to configure Lovelace to use the local development version of the card from `dist/bergfex-card.js`.
</details>

---

For further assistance or to [report issues](https://github.com/timmaurice/lovelace-bergfex-card/issues), please visit the [GitHub repository](https://github.com/timmaurice/lovelace-bergfex-card).

![Star History Chart](https://api.star-history.com/svg?repos=timmaurice/lovelace-bergfex-card&type=Date)

## ☕ Support My Work

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" />](https://www.buymeacoffee.com/timmaurice)
