'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? '/'
  const other: Locale = locale === 'ru' ? 'en' : 'ru'
  const rest = pathname.replace(/^\/(ru|en)(?=\/|$)/, '')

  return (
    <Link
      href={`/${other}${rest}`}
      hrefLang={other}
      aria-label={label}
      className="text-muted hover:text-fg rounded-md p-2 font-mono text-sm transition-colors"
    >
      {other.toUpperCase()}
    </Link>
  )
}
