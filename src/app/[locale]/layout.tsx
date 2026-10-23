import type { Metadata } from 'next'
import { Golos_Text, JetBrains_Mono, Unbounded } from 'next/font/google'
import { notFound } from 'next/navigation'
import { locales, isLocale, ogLocales } from '@/lib/i18n'
import { profile, siteUrl } from '@/content/profile'
import { ui } from '@/content/ui'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import '../globals.css'

const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-golos',
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

/*
 * Ставит класс `js` (включает scroll-reveal) и тему до первой отрисовки,
 * чтобы не было мигания при загрузке.
 */
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');var dark=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);d.classList.toggle('dark',dark)}catch(e){}})()`

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const title = `${profile.name[locale]} — ${profile.role[locale]}`
  const description = profile.metaDescription[locale]

  const keywords =
    locale === 'ru'
      ? [
          'Константин Бетеня',
          'Бетеня Константин',
          'Konstantin Betenya',
          'Kostya Betenya',
          'software engineer Минск',
          'fullstack разработчик',
          'React Native разработчик',
          'БГУИР',
          'UniTime',
          'Vazon Hub',
        ]
      : [
          'Kostya Betenya',
          'Konstantin Betenya',
          'Константин Бетеня',
          'software engineer Minsk',
          'fullstack developer',
          'React Native developer',
          'BSUIR',
          'UniTime',
          'Vazon Hub',
        ]

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${profile.name[locale]}`,
    },
    description,
    keywords,
    authors: [{ name: profile.name[locale], url: siteUrl }],
    creator: profile.name[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: '/ru', en: '/en', 'x-default': '/ru' },
    },
    openGraph: {
      type: 'website',
      siteName: 'betenya.dev',
      locale: ogLocales[locale],
      url: `/${locale}`,
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

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html
      lang={locale}
      className={`${golos.variable} ${unbounded.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#main"
          className="bg-accent text-accent-contrast sr-only rounded-md px-4 py-2 focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
        >
          {ui.a11y.skipToContent[locale]}
        </a>
        <Header locale={locale} />
        <main id="main" className="mx-auto w-full max-w-7xl flex-1 px-5 sm:px-8">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
