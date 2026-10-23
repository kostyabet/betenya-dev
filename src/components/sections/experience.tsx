import { GraduationCap } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { formatPeriod } from '@/lib/format'
import { experience } from '@/content/experience'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'

export function Experience({ locale }: { locale: Locale }) {
  return (
    <Section id="experience" title={ui.sections.experience[locale]}>
      <ol className="space-y-10">
        {experience.map((entry) => (
          <li
            key={`${entry.company.en}-${entry.period.start}`}
            className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8"
          >
            <div className="text-faint pt-0.5 font-mono text-sm">
              {formatPeriod(entry.period, locale, ui.experience.present[locale])}
            </div>

            <div className="border-line md:border-l md:pl-8">
              <h3 className="text-fg flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {entry.company[locale]}
                  </a>
                ) : (
                  entry.company[locale]
                )}
                {entry.kind === 'education' && (
                  <span className="text-muted inline-flex items-center gap-1.5 font-mono text-xs font-normal">
                    <GraduationCap size={14} aria-hidden="true" />
                    {ui.experience.education[locale]}
                  </span>
                )}
                {entry.employment && (
                  <span className="text-faint font-mono text-xs font-normal">
                    {entry.employment[locale]}
                  </span>
                )}
              </h3>
              <p className="text-muted mt-0.5 text-sm">{entry.role[locale]}</p>

              <ul className="text-muted marker:text-faint mt-3 list-disc space-y-1.5 ps-4 text-sm leading-relaxed">
                {entry.bullets[locale].map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>

              {entry.tags.length > 0 && (
                <p className="text-faint mt-3 font-mono text-xs">{entry.tags.join(', ')}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
