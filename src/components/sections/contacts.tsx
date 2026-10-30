import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import type { ComponentType, SVGProps } from 'react'
import type { Locale } from '@/lib/i18n'
import { profile } from '@/content/profile'
import type { ContactKind } from '@/content/types'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from '@/components/brand-icons'

const CONTACT_ICONS: Record<ContactKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  telegram: TelegramIcon,
  'telegram-channel': TelegramIcon,
  email: EnvelopeSimple,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
}

export function Contacts({ locale }: { locale: Locale }) {
  return (
    <Section id="contacts" title={ui.sections.contacts[locale]}>
      <p className="text-muted mb-8 max-w-xl leading-relaxed">{ui.contacts.note[locale]}</p>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.contacts.map((contact) => {
          const Icon = CONTACT_ICONS[contact.kind]
          const external = !contact.href.startsWith('mailto:')
          return (
            <li key={contact.href}>
              <a
                href={contact.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group glass border-glass-line hover:border-accent flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-colors"
              >
                <Icon
                  width={18}
                  height={18}
                  className="text-faint group-hover:text-accent shrink-0 transition-colors"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="text-faint block text-xs">{contact.label[locale]}</span>
                  <span className="text-fg group-hover:text-accent block truncate text-sm font-medium transition-colors">
                    {contact.value}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
