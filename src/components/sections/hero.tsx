import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="pt-16 pb-10 sm:pt-24 sm:pb-16">
      <p className="hero-enter text-accent font-mono text-sm">{profile.role[locale]}</p>
      <h1
        className="hero-enter text-fg mt-3 text-4xl font-bold tracking-tight text-balance sm:text-6xl"
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

      <dl
        className="hero-enter border-line bg-surface divide-line mt-8 max-w-xl divide-y rounded-lg border font-mono text-sm"
        style={{ animationDelay: '180ms' }}
      >
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

      <div className="hero-enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
        <a
          href="#projects"
          className="bg-accent text-accent-contrast rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        >
          {ui.hero.projectsButton[locale]}
        </a>
        <a
          href="#contacts"
          className="border-line text-fg hover:border-accent hover:text-accent rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          {ui.hero.contactButton[locale]}
        </a>
      </div>
    </section>
  )
}
