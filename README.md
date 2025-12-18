# Bergfex Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/timmaurice/lovelace-bergfex-card?style=flat-square)
[![GH-downloads](https://img.shields.io/github/downloads/timmaurice/lovelace-bergfex-card/total?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/timmaurice/lovelace-bergfex-card.svg?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/timmaurice/lovelace-bergfex-card.svg?style=flat-square)](https://github.com/timmaurice/lovelace-bergfex-card)
![GitHub](https://img.shields.io/github/license/timmaurice/lovelace-bergfex-card?style=flat-square)

A custom Lovelace card for Home Assistant to display ski resort conditions from the [Bergfex integration](https://github.com/timmaurice/bergfex).

<img src="https://raw.githubusercontent.com/timmaurice/lovelace-bergfex-card/main/image.png" alt="Card Screenshot" />

## Features

- Displays data for multiple ski resorts from the Bergfex integration.
- Table-like layout for easy comparison between resorts.
- Show/hide resort details like snow depth, lifts, and last update time.
- Option to hide resorts that are currently closed.
- Status badge color changes based on whether the resort is open or closed.
- Optional 24h trend indicators (↗️/↘️) for snow depths and lift/slope counts.
- Sort resorts by various criteria (snow depth, open lifts, etc.).
- Fully customizable through the visual editor.

## Localization

The editor is available in the following languages:

- English
- German

<details>
<summary>Contributing Translations</summary>

If you would like to contribute a new translation:

1.  Fork the repository on GitHub.
2.  In the `src/translation` directory, copy `en.json` and rename it to your language code (e.g., `fr.json` for French).
3.  Translate all the values in the new file.
4.  Submit a pull request with your changes.

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

| Name                  | Type                    | Default      | Description                                                                                  |
| --------------------- | ----------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `type`                | string                  | **Required** | `custom:bergfex-card`                                                                        |
| `title`               | string                  | `(none)`     | The title of the card.                                                                       |
| `resorts`             | list (string or object) | **Required** | A list of device IDs. To set a custom name, use an object: `{ device: '...', name: '...' }`. |
| `show_snow`           | boolean                 | `true`       | Show snow depth information (mountain, valley, new).                                         |
| `show_lifts_slopes`   | boolean                 | `true`       | Show lift and slope statistics (open/total lifts and slopes).                                |
| `show_conditions`     | boolean                 | `true`       | Show conditions section (snow/slope condition, avalanche warning, last snowfall).            |
| `show_forecast`       | boolean                 | `false`      | Show snow forecast carousel with daily and summary views.                                    |
| `show_last_updated`   | boolean                 | `true`       | Show the last updated timestamp.                                                             |
| `show_trend`          | boolean                 | `false`      | Show 24h trend indicators for numeric values (Snow, Lifts, Slopes).                          |
| `show_link`           | boolean                 | `true`       | Show a link to the Bergfex detail page for the resort.                                       |
| `hide_closed_resorts` | boolean                 | `false`      | Hide resorts that are currently closed.                                                      |
| `sort_by`             | string                  | `(none)`     | Sort resorts by a specific value. Options: `mountain`, `valley`, `new`, `lift`, `update`.    |

### Resort Object Parameters

| Name     | Type   | Required     | Description                                         |
| -------- | ------ | ------------ | --------------------------------------------------- |
| `device` | string | **Required** | The device ID of the Bergfex resort.                |
| `name`   | string | `(none)`     | A custom name to overwrite the default resort name. |

### Examples

```yaml
type: custom:bergfex-card
title: Ski Resorts
hide_closed_resorts: true
resorts:
  # Simple resort entry using device ID
  - 2bf48bbf7b0c6a5d40ac7c0dfa2c4178 # Replace with your device ID
  # Resort with a custom name
  - device: 99a4943a53c159a2995573795447463d # Replace with your device ID
    name: My Favorite Resort
```

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
