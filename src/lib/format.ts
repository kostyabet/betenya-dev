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

/** `2026-02` → порядковый номер месяца (для арифметики периодов). */
export function monthIndex(value: string): number {
  const [year, month] = value.split('-').map(Number)
  return year * 12 + (month - 1)
}

function pluralRu(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few
  return many
}

/** Кол-во месяцев → «2 года 3 месяца» / "2 years 3 months". */
export function formatDuration(totalMonths: number, locale: Locale): string {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []
  if (locale === 'ru') {
    if (years > 0) parts.push(`${years} ${pluralRu(years, 'год', 'года', 'лет')}`)
    if (months > 0) parts.push(`${months} ${pluralRu(months, 'месяц', 'месяца', 'месяцев')}`)
  } else {
    if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
    if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  }
  return parts.join(' ') || (locale === 'ru' ? 'меньше месяца' : 'less than a month')
}
