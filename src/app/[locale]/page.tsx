import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/lib/i18n'
import { profile, siteUrl } from '@/content/profile'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Contacts } from '@/components/sections/contacts'

/**
 * Схема Person + WebSite для поисковиков: имя во всех вариантах написания,
 * профили в sameAs — чтобы Google связал сайт с человеком и показывал его
 * первым по запросу имени.
 */
function jsonLd(locale: Locale) {
  const email = profile.contacts.find((c) => c.kind === 'email')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: profile.name[locale],
        alternateName:
          locale === 'ru'
            ? ['Бетеня Константин', 'Konstantin Betenya', 'Kostya Betenya']
            : ['Konstantin Betenya', 'Константин Бетеня', 'Бетеня Константин'],
        givenName: locale === 'ru' ? 'Константин' : 'Konstantin',
        familyName: locale === 'ru' ? 'Бетеня' : 'Betenya',
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/${locale}/opengraph-image`,
        jobTitle: profile.role[locale],
        description: profile.metaDescription[locale],
        ...(email && { email: email.value }),
        address: {
          '@type': 'PostalAddress',
          addressLocality: locale === 'ru' ? 'Минск' : 'Minsk',
          addressCountry: 'BY',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: locale === 'ru' ? 'БГУИР' : 'BSUIR',
          url: 'https://www.bsuir.by',
        },
        worksFor: { '@type': 'Organization', name: 'Yumasoft' },
        knowsAbout: [
          'TypeScript',
          'React',
          'React Native',
          'Next.js',
          'Node.js',
          'Nest.js',
          'AWS',
          'PostgreSQL',
        ],
        sameAs: profile.contacts.filter((c) => c.href.startsWith('http')).map((c) => c.href),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'betenya.dev',
        inLanguage: locale,
        publisher: { '@id': `${siteUrl}/#person` },
      },
    ],
  }
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Skills locale={locale} />
      <Contacts locale={locale} />
    </>
  )
}
