import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative flex min-h-[min(calc(100dvh-7rem),60rem)] flex-col justify-center py-16 sm:py-20">
      {/* мягкое свечение за стеклянным виджетом */}
      <div
        aria-hidden="true"
        className="bg-accent/10 absolute -top-10 right-0 -z-10 size-72 rounded-full blur-3xl sm:size-96"
      />

      <div className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="hero-enter text-accent font-mono text-sm">{profile.location[locale]}</p>
          <h1
            className="hero-enter text-fg font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl"
            style={{ animationDelay: '60ms' }}
          >
            {profile.name[locale]}
          </h1>
          <p
            className="hero-enter text-muted mt-5 max-w-xl text-lg leading-relaxed"
            style={{ animationDelay: '120ms' }}
          >
            {profile.tagline[locale]}
          </p>

          <div className="hero-enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <a
              href="#projects"
              className="bg-accent text-accent-contrast rounded-xl px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
            >
              {ui.hero.projectsButton[locale]}
            </a>
            <a
              href="#contacts"
              className="glass border-glass-line text-fg hover:border-accent hover:text-accent rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {ui.hero.contactButton[locale]}
            </a>
          </div>
        </div>

        <dl
          className="hero-enter glass border-glass-line divide-line/60 relative w-full max-w-xl divide-y overflow-hidden rounded-xl border font-mono text-sm"
          style={{ animationDelay: '180ms' }}
        >
        {/* блик по стеклу */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent dark:from-white/8"
        />
        {profile.status.map((line) => (
          <div key={line.label.en} className="flex gap-4 px-4 py-3">
            <dt className="text-accent w-20 shrink-0">{line.label[locale]}</dt>
            <dd className="text-fg">
              {line.href ? (
                <a
                  href={line.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline decoration-(--line) underline-offset-4 transition-colors"
                >
                  {line.value[locale]}
                </a>
              ) : (
                line.value[locale]
              )}
            </dd>
          </div>
        ))}
        </dl>
      </div>
    </section>
  )
}
