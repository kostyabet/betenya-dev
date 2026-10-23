import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { ui } from '@/content/ui'
import { ThemeToggle } from './theme-toggle'
import { LocaleSwitch } from './locale-switch'

const NAV_ANCHORS = ['about', 'experience', 'projects', 'skills', 'contacts'] as const

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4 sm:px-6">
      <div className="glass border-glass-line mx-auto flex h-12 max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 sm:px-6">
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
