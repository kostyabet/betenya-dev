'use client'

import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? '/'
  const other: Locale = locale === 'ru' ? 'en' : 'ru'
  const rest = pathname.replace(/^\/(ru|en)(?=\/|$)/, '')

  /*
   * Полная навигация (обычный <a>, а не <Link>): смена локали меняет параметр
   * layout'а [locale], и при клиентском ре-рендере React перезаписал бы
   * className у <html>, стирая классы `dark`/`js`, которые ставит инлайн-скрипт
   * до первой отрисовки. Перезагрузка документа заставляет скрипт отработать
   * заново — тема сохраняется без мигания, а скрипты не «рендерятся» на клиенте.
   */
  return (
    <a
      href={`/${other}${rest}`}
      hrefLang={other}
      aria-label={label}
      className="text-muted hover:text-fg rounded-md p-2 font-mono text-sm transition-colors"
    >
      {other.toUpperCase()}
    </a>
  )
}
