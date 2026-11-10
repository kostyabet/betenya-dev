'use client'

import { useState, type ReactNode } from 'react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

/**
 * Прогрессивное раскрытие длинного списка. Первые `initial` элементов видны
 * сразу, остальные прячутся до клика по кнопке.
 *
 * Важно: скрытые элементы остаются в DOM (а не выкидываются из разметки) —
 * так контент виден поисковикам и доступен без JS. В свёрнутом состоянии хвост
 * зажат в контейнер нулевой высоты (`overflow:hidden`) и выключен из навигации
 * через `inert`, чтобы ссылки внутри не ловили фокус.
 *
 * Плавность — анимацией `grid-template-rows: 0fr → 1fr` на обёртке: это
 * корректно анимирует высоту до `auto` без JS-замеров. Переход включается
 * только при `motion-safe` (уважает prefers-reduced-motion).
 */
export function ShowMore({
  children,
  initial,
  gridClassName,
  labels,
}: {
  children: ReactNode[]
  initial: number
  gridClassName: string
  labels: { more: string; less: string }
}) {
  const [expanded, setExpanded] = useState(false)
  const items = Array.isArray(children) ? children : [children]
  const hidden = items.length - initial

  if (hidden <= 0) {
    return <div className={gridClassName}>{items}</div>
  }

  return (
    <>
      <div className={gridClassName}>{items.slice(0, initial)}</div>
      <div
        className="grid ease-out motion-safe:transition-[grid-template-rows] motion-safe:duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
        inert={expanded ? undefined : true}
      >
        <div className="overflow-hidden">
          <div className={`${gridClassName} pt-4`}>{items.slice(initial)}</div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="chip border-glass-line text-muted hover:text-fg hover:border-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
        >
          {expanded ? labels.less : `${labels.more} (${hidden})`}
          <CaretDown
            size={14}
            weight="bold"
            aria-hidden="true"
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </>
  )
}
