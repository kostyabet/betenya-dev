import { Fragment, type CSSProperties } from 'react'
import Link from 'next/link'
import { GraduationCap, FileText } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { formatDuration, formatPeriod, monthIndex } from '@/lib/format'
import { experience } from '@/content/experience'
import { olympiads } from '@/content/olympiads'
import type { ExperienceEntry } from '@/content/types'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'
import { TechPills } from '@/components/tech-pill'

/* Масштаб ленты времени: пикселей на один месяц. */
const PX_PER_MONTH = 34

/** Суммарный коммерческий стаж: объединение месяцев всех work-периодов (пересечения не считаются дважды). */
function totalWorkMonths(nowIdx: number): number {
  const months = new Set<number>()
  for (const entry of experience) {
    if (entry.kind !== 'work') continue
    const start = monthIndex(entry.period.start)
    const end = Math.min(entry.period.end ? monthIndex(entry.period.end) : nowIdx, nowIdx)
    for (let i = start; i <= end; i++) months.add(i)
  }
  return months.size
}

function CompanyName({ entry, locale }: { entry: ExperienceEntry; locale: Locale }) {
  return entry.url ? (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-accent transition-colors"
    >
      {entry.company[locale]}
    </a>
  ) : (
    <>{entry.company[locale]}</>
  )
}

/** Длительность работы: для текущих позиций — по сегодняшний месяц. */
function entryDuration(entry: ExperienceEntry, locale: Locale): string {
  const now = new Date()
  const nowIdx = now.getFullYear() * 12 + now.getMonth()
  const start = monthIndex(entry.period.start)
  const end = Math.min(entry.period.end ? monthIndex(entry.period.end) : nowIdx, nowIdx)
  return formatDuration(end - start + 1, locale)
}

function EntryBody({
  entry,
  locale,
  plainCompany = false,
}: {
  entry: ExperienceEntry
  locale: Locale
  /** Не оборачивать название компании в ссылку (когда вся карточка — ссылка). */
  plainCompany?: boolean
}) {
  return (
    <>
      <h3 className="text-fg group-hover:text-accent flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold transition-colors">
        {entry.logo && (
          <img
            src={entry.logo}
            alt=""
            aria-hidden="true"
            className="border-glass-line size-6 shrink-0 rounded-md border object-cover"
          />
        )}
        {plainCompany ? entry.company[locale] : <CompanyName entry={entry} locale={locale} />}
        {entry.employment && (
          <span className="text-faint font-mono text-xs font-normal">
            {entry.employment[locale]}
          </span>
        )}
      </h3>
      <p className="text-muted mt-0.5 text-sm">{entry.role[locale]}</p>
      <p className="text-faint mt-1 font-mono text-xs">
        {formatPeriod(entry.period, locale, ui.experience.present[locale])}
        {entry.kind === 'work' && ` (${entryDuration(entry, locale)})`}
      </p>
      <ul className="text-muted marker:text-faint mt-3 list-disc space-y-1.5 ps-4 text-sm leading-relaxed">
        {entry.bullets[locale].map((bullet) => (
          <li key={bullet.slice(0, 32)}>{bullet}</li>
        ))}
      </ul>
      <TechPills items={entry.tags} className="mt-3" />
    </>
  )
}

/**
 * Олимпиады и публикации — не точки на оси времени, а то, чем занимался
 * «при университете»: два чётко разделённых блока под карточкой БГУИР,
 * во всю ширину секции (а не в узких колонках ленты), чтобы не слипались.
 */
function UniversityExtras({ locale, education }: { locale: Locale; education: ExperienceEntry }) {
  return (
    <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
      <div className="flex flex-col items-center gap-3 sm:items-end sm:border-r sm:border-glass-line sm:pr-6">
        <p className="text-faint font-mono text-xs">{ui.experience.olympiads[locale]}</p>
        <div className="grid grid-cols-2 gap-2">
          {olympiads.map((olympiad) => (
            <Link
              key={olympiad.slug}
              href={`/${locale}/olympiads/${olympiad.slug}`}
              style={{ '--tint': olympiad.accent } as CSSProperties}
              className="tinted glass border-glass-line flex flex-col items-center gap-1.5 rounded-lg border p-3 text-center transition duration-200 hover:-translate-y-0.5"
            >
              <img
                src={olympiad.logo}
                alt=""
                aria-hidden="true"
                className="size-8 shrink-0 rounded object-cover"
              />
              <span className="text-fg text-[11px] leading-tight font-medium">{olympiad.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 sm:items-start">
        <p className="text-faint font-mono text-xs">{ui.experience.publications[locale]}</p>
        <div className="flex flex-col gap-2">
          {(education.links ?? []).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass border-glass-line hover:border-accent flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-medium transition duration-200 hover:-translate-y-0.5"
            >
              <FileText size={14} aria-hidden="true" className="text-accent shrink-0" />
              <span className="text-fg">{link.label[locale]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Лента времени (md+): вертикальная ось в реальном масштабе, время течёт
 * снизу вверх. Ось — учёба в БГУИР (идёт по сей день), работы — полосы
 * слева и справа от оси, наслоения периодов видны геометрически.
 *
 * Разметка — грид, где строка = месяц (минимум PX_PER_MONTH). Карточка выше
 * своего периода растягивает собственные строки, а не наезжает на соседнюю:
 * масштаб локально тянется, наложения невозможны по построению.
 */
function Timeline({ locale, nowIdx }: { locale: Locale; nowIdx: number }) {
  const work = experience.filter((e) => e.kind === 'work')
  const education = experience.find((e) => e.kind === 'education')

  const clampedEnd = (e: ExperienceEntry) =>
    Math.min(e.period.end ? monthIndex(e.period.end) : nowIdx, nowIdx)

  const minIdx = Math.min(...experience.map((e) => monthIndex(e.period.start)))
  const maxIdx = Math.max(...experience.map(clampedEnd), nowIdx)
  const rows = maxIdx - minIdx + 1
  /* Строка грида для месяца: 1 — текущий месяц (верх), rows — самый ранний (низ). */
  const rowOf = (idx: number) => maxIdx - idx + 1

  const yearTicks: number[] = []
  for (let year = Math.ceil((minIdx + 1) / 12); year * 12 <= maxIdx; year++) {
    yearTicks.push(year)
  }

  return (
    <div className="relative" aria-hidden="false">
      {/* отметка «сейчас» на вершине оси */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <span className="bg-accent block size-2.5 rounded-full" />
      </div>
      <span className="text-accent absolute left-1/2 -top-6 -translate-x-1/2 font-mono text-xs">
        {ui.experience.present[locale]}
      </span>

      <div
        className="grid"
        style={{
          gridTemplateColumns: 'minmax(0, 1fr) 6rem minmax(0, 1fr)',
          gridTemplateRows: `repeat(${rows}, minmax(${PX_PER_MONTH}px, auto))`,
        }}
      >
        {/* ось = учёба: от поступления (низ) по сей день (верх) */}
        <div
          className="bg-accent/25 w-1.5 justify-self-center rounded-full"
          style={{ gridColumn: 2, gridRow: '1 / -1' }}
        />

        {/* годовые метки на оси */}
        {yearTicks.map((year) => (
          <span
            key={year}
            className="border-line bg-bg text-faint z-10 -translate-y-1/2 self-start justify-self-center rounded-full border px-2 py-0.5 font-mono text-xs"
            style={{ gridColumn: 2, gridRow: rowOf(year * 12) }}
          >
            {year}
          </span>
        ))}

        {/* работы: полоса в масштабе + карточка, стороны чередуются */}
        {work.map((entry, i) => {
          const left = i % 2 === 0
          const start = monthIndex(entry.period.start)
          const end = clampedEnd(entry)
          const ongoing = entry.period.end === null
          /*
           * Текущие позиции прижаты к «сейчас» и могут занимать строки до верха
           * следующей карточки на той же стороне; завершённые центрируются
           * по собственной полосе — без шаблонного отступа сверху.
           */
          const nextSameSide = work[i + 2]
          const cardRowEnd = ongoing
            ? Math.max(rowOf(start) + 1, nextSameSide ? rowOf(clampedEnd(nextSameSide)) : rows + 1)
            : rowOf(start) + 1

          return (
            <Fragment key={`${entry.company.en}-${entry.period.start}`}>
              <div
                className={`w-1 justify-self-center rounded-full ${ongoing ? 'bg-accent' : 'bg-faint/60'}`}
                style={{
                  gridColumn: 2,
                  gridRow: `${rowOf(end)} / ${rowOf(start) + 1}`,
                  transform: `translateX(${left ? -12 : 12}px)`,
                }}
              />
              {entry.slug ? (
                <Link
                  href={`/${locale}/experience/${entry.slug}`}
                  className={`glass border-glass-line hover:border-accent group relative block rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5 ${ongoing ? 'self-start' : 'self-center'}`}
                  style={{ gridColumn: left ? 1 : 3, gridRow: `${rowOf(end)} / ${cardRowEnd}` }}
                >
                  <div
                    className="bg-line absolute top-4 h-px"
                    style={{ width: 'calc(3rem - 14px)', [left ? 'left' : 'right']: '100%' }}
                  />
                  <EntryBody entry={entry} locale={locale} plainCompany />
                </Link>
              ) : (
                <article
                  className={`glass border-glass-line relative rounded-xl border p-4 ${ongoing ? 'self-start' : 'self-center'}`}
                  style={{ gridColumn: left ? 1 : 3, gridRow: `${rowOf(end)} / ${cardRowEnd}` }}
                >
                  <div
                    className="bg-line absolute top-4 h-px"
                    style={{ width: 'calc(3rem - 14px)', [left ? 'left' : 'right']: '100%' }}
                  />
                  <EntryBody entry={entry} locale={locale} />
                </article>
              )}
            </Fragment>
          )
        })}

      </div>

      {/* учёба: подпись у основания оси */}
      {education && (
        <div className="mt-4 flex flex-col items-center">
          {education.slug ? (
            <Link
              href={`/${locale}/experience/${education.slug}`}
              className="glass border-glass-line hover:border-accent group rounded-xl border px-4 py-2.5 text-center transition duration-200"
            >
              <p className="text-fg group-hover:text-accent flex items-center justify-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors">
                <GraduationCap size={15} aria-hidden="true" className="text-accent" />
                {education.company[locale]}
                <span className="text-muted font-mono text-xs font-normal">
                  {ui.experience.education[locale]}
                </span>
              </p>
              <p className="text-muted mt-0.5 text-xs whitespace-nowrap">{education.role[locale]}</p>
              <p className="text-faint mt-0.5 font-mono text-xs whitespace-nowrap">
                {formatPeriod(education.period, locale, ui.experience.present[locale])}
              </p>
            </Link>
          ) : (
            <div className="glass border-glass-line rounded-xl border px-4 py-2.5 text-center">
              <p className="text-fg flex items-center justify-center gap-2 text-sm font-semibold whitespace-nowrap">
                <GraduationCap size={15} aria-hidden="true" className="text-accent" />
                <CompanyName entry={education} locale={locale} />
                <span className="text-muted font-mono text-xs font-normal">
                  {ui.experience.education[locale]}
                </span>
              </p>
              <p className="text-muted mt-0.5 text-xs whitespace-nowrap">{education.role[locale]}</p>
              <p className="text-faint mt-0.5 font-mono text-xs whitespace-nowrap">
                {formatPeriod(education.period, locale, ui.experience.present[locale])}
              </p>
            </div>
          )}

          <UniversityExtras locale={locale} education={education} />
        </div>
      )}
    </div>
  )
}

/** Компактный список для мобильных: лента в два столбца на узком экране не читается. */
function StackedList({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-10">
      {experience.map((entry) => (
        <li key={`${entry.company.en}-${entry.period.start}`}>
          {entry.kind === 'education' && (
            <p className="text-muted mb-1 flex items-center gap-1.5 font-mono text-xs">
              <GraduationCap size={14} aria-hidden="true" />
              {ui.experience.education[locale]}
            </p>
          )}
          {entry.slug ? (
            <Link href={`/${locale}/experience/${entry.slug}`} className="group block">
              <EntryBody entry={entry} locale={locale} plainCompany />
            </Link>
          ) : (
            <EntryBody entry={entry} locale={locale} />
          )}
          {entry.kind === 'education' && <UniversityExtras locale={locale} education={entry} />}
        </li>
      ))}
    </ol>
  )
}

export function Experience({ locale }: { locale: Locale }) {
  const now = new Date()
  const nowIdx = now.getFullYear() * 12 + now.getMonth()
  const total = formatDuration(totalWorkMonths(nowIdx), locale)

  return (
    <Section id="experience" title={ui.sections.experience[locale]} annotation={total}>
      <div className="hidden pt-8 md:block">
        <Timeline locale={locale} nowIdx={nowIdx} />
      </div>
      <div className="md:hidden">
        <StackedList locale={locale} />
      </div>
    </Section>
  )
}
