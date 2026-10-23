import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name[locale]}
        </p>
        <p className="flex items-center gap-3">
          <span>{ui.footer.madeWith[locale]}</span>
          <a
            href="https://github.com/kostyabet/betenya-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg underline underline-offset-4 transition-colors"
          >
            {ui.footer.source[locale]}
          </a>
        </p>
      </div>
    </footer>
  )
}
