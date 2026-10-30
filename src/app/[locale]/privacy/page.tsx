import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { privacy } from '@/content/privacy'
import { ui } from '@/content/ui'

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/privacy'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const title = privacy.title[locale]
  return {
    title,
    description: privacy.intro[0][locale],
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { ru: '/ru/privacy', en: '/en/privacy', 'x-default': '/ru/privacy' },
    },
  }
}

export default async function PrivacyPage({ params }: PageProps<'/[locale]/privacy'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <article className="mx-auto max-w-2xl py-16 sm:py-24">
      <Link
        href={`/${locale}`}
        className="text-muted hover:text-accent font-mono text-sm transition-colors"
      >
        ← {ui.notFound.backHome[locale]}
      </Link>

      <h1 className="text-fg font-display mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        {privacy.title[locale]}
      </h1>
      <p className="text-faint mt-3 font-mono text-sm">{privacy.updated[locale]}</p>

      <div className="text-muted mt-8 space-y-4 leading-relaxed">
        {privacy.intro.map((paragraph) => (
          <p key={paragraph.en}>{paragraph[locale]}</p>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {privacy.sections.map((section) => (
          <section key={section.heading.en}>
            <h2 className="text-fg font-display text-lg font-medium tracking-tight">
              {section.heading[locale]}
            </h2>
            <div className="text-muted mt-3 space-y-3 leading-relaxed">
              {section.body.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="text-faint mt-14 text-sm">
        © {new Date().getFullYear()} {profile.name[locale]}
      </p>
    </article>
  )
}
