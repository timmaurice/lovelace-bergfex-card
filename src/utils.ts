import { HomeAssistant } from './types';

/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param node The element to dispatch the event from.
 * @param type The name of the event.
 * @param detail The detail value to pass with the event.
 * @param options The options for the event.
 */
export const fireEvent = <T>(
  node: HTMLElement | Window,
  type: string,
  detail?: T,
  options?: CustomEventInit<T>,
): void => {
  const event = new CustomEvent(type, { bubbles: true, cancelable: false, composed: true, ...options, detail });
  // Dispatch from window to ensure it reaches the dialog manager
  node.dispatchEvent(event);
};

/**
 * Formats a date string or object into a locale-aware string.
 * If the date is today, only the time is shown.
 * @param date The date to format.
 * @param hass The Home Assistant object, used for locale and language settings.
 * @returns A formatted date string.
 */
export function formatDate(date: string | Date, hass: HomeAssistant): string {
  const dateObj = new Date(date);
  const today = new Date();
  const isToday =
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
  };

  if (!isToday) {
    Object.assign(options, { year: 'numeric', month: 'short', day: '2-digit' });
  }

  if (hass.locale?.time_format === '12') {
    options.hour12 = true;
  }

  return dateObj.toLocaleString(hass.language, options);
}

/**
 * Formats a date string or object into a relative time string (e.g., "5 minutes ago").
 * @param date The date to format.
 * @param hass The Home Assistant object, used for locale and language settings.
 * @returns A formatted relative time string.
 */
export function formatRelativeTime(date: string | Date, hass: HomeAssistant): string {
  const dateObj = new Date(date);
  const now = new Date();
  const diffSeconds = Math.round((now.getTime() - dateObj.getTime()) / 1000);

  try {
    // Intl.RelativeTimeFormat is well-supported in modern browsers and handles localization.
    const rtf = new Intl.RelativeTimeFormat(hass.language, { numeric: 'auto' });

    if (diffSeconds < 60) {
      return rtf.format(-diffSeconds, 'second');
    }
    const diffMinutes = Math.round(diffSeconds / 60);
    if (diffMinutes < 60) {
      return rtf.format(-diffMinutes, 'minute');
    }
    const diffHours = Math.round(diffMinutes / 60);
    if (diffHours < 24) {
      return rtf.format(-diffHours, 'hour');
    }
    const diffDays = Math.round(diffHours / 24);
    return rtf.format(-diffDays, 'day');
  } catch {
    // Fallback for environments where Intl.RelativeTimeFormat might not be available
    // or if an error occurs.
    return formatDate(date, hass);
  }
}
