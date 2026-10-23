import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name[locale]}
        </p>
        <p className="flex items-center gap-2 font-mono text-sm">
          <span className="text-faint">{ui.footer.building[locale]}</span>
          <a
            href="https://unitimes.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            unitimes.app
          </a>
        </p>
      </div>
    </footer>
  )
}
