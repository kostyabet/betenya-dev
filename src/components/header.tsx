import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { ui } from '@/content/ui'
import { ThemeToggle } from './theme-toggle'
import { LocaleSwitch } from './locale-switch'

const NAV_ANCHORS = ['about', 'experience', 'projects', 'skills', 'contacts'] as const

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="border-line bg-bg/85 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          className="text-fg hover:text-accent font-mono text-sm font-medium transition-colors"
        >
          betenya.dev
        </Link>

        <nav aria-label={ui.a11y.mainNav[locale]} className="hidden items-center gap-6 sm:flex">
          {NAV_ANCHORS.map((anchor) => (
            <a
              key={anchor}
              href={`/${locale}#${anchor}`}
              className="text-muted hover:text-fg text-sm transition-colors"
            >
              {ui.nav[anchor][locale]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitch locale={locale} label={ui.a11y.switchLocale[locale]} />
          <ThemeToggle
            labels={{
              toggle: ui.a11y.themeToggle[locale],
              system: ui.a11y.themeSystem[locale],
              light: ui.a11y.themeLight[locale],
              dark: ui.a11y.themeDark[locale],
            }}
          />
        </div>
      </div>
    </header>
  )
}
