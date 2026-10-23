import type { Locale } from './i18n'

/** `2026-02` → `фев 2026` / `Feb 2026`. */
export function formatMonth(value: string, locale: Locale): string {
  const [year, month] = value.split('-').map(Number)
  const date = new Date(year, month - 1, 1)
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' })
    .format(date)
    .replace(/\s*г\.$/, '')
}

export function formatPeriod(
  period: { start: string; end: string | null },
  locale: Locale,
  presentLabel: string,
): string {
  const start = formatMonth(period.start, locale)
  const end = period.end ? formatMonth(period.end, locale) : presentLabel
  return `${start} — ${end}`
}
