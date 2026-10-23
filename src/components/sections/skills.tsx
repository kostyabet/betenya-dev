import type { Locale } from '@/lib/i18n'
import { skills } from '@/content/skills'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'

export function Skills({ locale }: { locale: Locale }) {
  return (
    <Section id="skills" title={ui.sections.skills[locale]}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <div key={category.title.en}>
            <h3 className="text-fg mb-3 font-medium">{category.title[locale]}</h3>
            <ul className="text-muted space-y-1.5 text-sm leading-relaxed">
              {category.items.map((item) => (
                <li key={item.name}>
                  {item.name}
                  {item.learning && (
                    <span className="text-accent ms-2 font-mono text-xs">
                      {ui.skills.learning[locale]}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
