import type { Locale } from '@/lib/i18n'
import { certificates } from '@/content/certificates'
import type { Certificate } from '@/content/types'
import { formatMonth } from '@/lib/format'
import { Section } from '@/components/section'
import { ui } from '@/content/ui'

function CertificateCard({ certificate, locale }: { certificate: Certificate; locale: Locale }) {
  const body = (
    <div className="glass border-glass-line hover:border-accent group h-full rounded-xl border p-5 transition duration-200 hover:-translate-y-0.5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-faint font-mono text-xs">{certificate.issuer}</p>
        <p className="text-faint font-mono text-xs whitespace-nowrap">
          {formatMonth(certificate.issued, locale)}
        </p>
      </div>
      <h3 className="text-fg group-hover:text-accent mt-2 text-sm font-semibold leading-snug transition-colors">
        {certificate.title}
      </h3>
      {certificate.credentialId && (
        <p className="text-faint mt-3 truncate font-mono text-[11px]">{certificate.credentialId}</p>
      )}
    </div>
  )

  return certificate.issuerUrl ? (
    <a href={certificate.issuerUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      {body}
    </a>
  ) : (
    body
  )
}

export function Certificates({ locale }: { locale: Locale }) {
  return (
    <Section id="certificates" title={ui.sections.certificates[locale]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.credentialId ?? certificate.title}
            certificate={certificate}
            locale={locale}
          />
        ))}
      </div>
    </Section>
  )
}
