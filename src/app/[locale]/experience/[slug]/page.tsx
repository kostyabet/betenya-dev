import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Globe } from 'lucide-react'
import { isLocale, ogLocales } from '@/lib/i18n'
import { formatDuration, formatPeriod, monthIndex } from '@/lib/format'
import { experience, getExperience } from '@/content/experience'
import type { ExperienceEntry } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { ui } from '@/content/ui'
import { GithubIcon } from '@/components/brand-icons'

export const dynamicParams = false

export function generateStaticParams() {
  return experience
    .filter((entry) => entry.slug)
    .map((entry) => ({ slug: entry.slug as string }))
}

/** Длительность работы: для текущих позиций — по сегодняшний месяц. */
function duration(entry: ExperienceEntry, locale: Locale): string {
  const now = new Date()
  const nowIdx = now.getFullYear() * 12 + now.getMonth()
  const start = monthIndex(entry.period.start)
  const end = Math.min(entry.period.end ? monthIndex(entry.period.end) : nowIdx, nowIdx)
  return formatDuration(end - start + 1, locale)
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/experience/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const entry = getExperience(slug)
  if (!entry) notFound()

  const title = `${entry.company[locale]} — ${entry.role[locale]}`
  const description = entry.details?.[locale][0] ?? entry.bullets[locale][0]
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/experience/${slug}`,
      languages: {
        ru: `/ru/experience/${slug}`,
        en: `/en/experience/${slug}`,
        'x-default': `/ru/experience/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: ogLocales[locale],
      url: `/${locale}/experience/${slug}`,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ExperiencePage({
  params,
}: PageProps<'/[locale]/experience/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const entry = getExperience(slug)
  if (!entry) notFound()

  return (
    <article className="py-12 sm:py-16">
      <Link
        href={`/${locale}#experience`}
        className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {ui.experience.backToTimeline[locale]}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="text-fg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {entry.company[locale]}
          </h1>
          {entry.employment && (
            <span className="text-faint font-mono text-sm">{entry.employment[locale]}</span>
          )}
        </div>
        <p className="text-muted mt-3 text-lg">{entry.role[locale]}</p>
        <p className="text-faint mt-2 font-mono text-sm">
          {formatPeriod(entry.period, locale, ui.experience.present[locale])} (
          {duration(entry, locale)})
        </p>
      </header>

      {entry.details && (
        <div className="text-muted mt-8 max-w-2xl space-y-4 leading-relaxed">
          {entry.details[locale].map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      )}

      <section className="mt-10 max-w-2xl" aria-label={ui.experience.did[locale]}>
        <h2 className="text-fg mb-3 text-sm font-medium">{ui.experience.did[locale]}</h2>
        <ul className="text-muted marker:text-accent list-disc space-y-1.5 ps-4 text-sm leading-relaxed">
          {entry.bullets[locale].map((bullet) => (
            <li key={bullet.slice(0, 32)}>{bullet}</li>
          ))}
        </ul>
      </section>

      {entry.tags.length > 0 && (
        <section className="mt-10" aria-label={ui.projects.stack[locale]}>
          <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.stack[locale]}</h2>
          <p className="text-faint font-mono text-sm">{entry.tags.join(', ')}</p>
        </section>
      )}

      {entry.links && entry.links.length > 0 && (
        <section className="mt-10" aria-label={ui.projects.links[locale]}>
          <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.links[locale]}</h2>
          <ul className="flex flex-wrap gap-3">
            {entry.links.map((link) => {
              const Icon = link.href.includes('github.com') ? GithubIcon : Globe
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass border-glass-line text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <Icon width={16} height={16} aria-hidden="true" />
                    {link.label[locale]}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </article>
  )
}
