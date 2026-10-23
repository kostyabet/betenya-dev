import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'

export function About({ locale }: { locale: Locale }) {
  return (
    <Section id="about" title={ui.sections.about[locale]}>
      <div className="text-muted max-w-3xl space-y-4 leading-relaxed">
        {profile.about[locale].map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
