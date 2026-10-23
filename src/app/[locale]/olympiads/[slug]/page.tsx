import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Globe } from 'lucide-react'
import { isLocale, ogLocales } from '@/lib/i18n'
import { olympiads, getOlympiad } from '@/content/olympiads'
import { ui } from '@/content/ui'

export const dynamicParams = false

export function generateStaticParams() {
  return olympiads.map((olympiad) => ({ slug: olympiad.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/olympiads/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const olympiad = getOlympiad(slug)
  if (!olympiad) notFound()

  const description = olympiad.tagline[locale]
  return {
    title: olympiad.name,
    description,
    alternates: {
      canonical: `/${locale}/olympiads/${slug}`,
      languages: {
        ru: `/ru/olympiads/${slug}`,
        en: `/en/olympiads/${slug}`,
        'x-default': `/ru/olympiads/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: ogLocales[locale],
      url: `/${locale}/olympiads/${slug}`,
      title: olympiad.name,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: olympiad.name,
      description,
    },
  }
}

export default async function OlympiadPage({ params }: PageProps<'/[locale]/olympiads/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const olympiad = getOlympiad(slug)
  if (!olympiad) notFound()

  return (
    <article className="py-12 sm:py-16">
      <Link
        href={`/${locale}#experience`}
        className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {ui.olympiads.backToList[locale]}
      </Link>

      <header className="mt-8 flex flex-wrap items-center gap-4">
        <img
          src={olympiad.logo}
          alt=""
          aria-hidden="true"
          className="size-16 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-fg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {olympiad.name}
          </h1>
          <p className="text-muted mt-2 text-lg leading-relaxed">{olympiad.tagline[locale]}</p>
          <p className="mt-2 text-sm font-medium" style={{ color: olympiad.accent }}>
            {olympiad.role[locale]}
          </p>
        </div>
      </header>

      <div className="text-muted mt-8 max-w-2xl space-y-4 leading-relaxed">
        {olympiad.description[locale].map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      {olympiad.links && olympiad.links.length > 0 && (
        <section className="mt-10" aria-label={ui.projects.links[locale]}>
          <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.links[locale]}</h2>
          <ul className="flex flex-wrap gap-3">
            {olympiad.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass border-glass-line text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
                >
                  <Globe width={16} height={16} aria-hidden="true" />
                  {link.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
