import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function Section({
  id,
  title,
  annotation,
  children,
}: {
  id: string
  title: string
  /** Приписка в скобках рядом с заголовком, обычным начертанием. */
  annotation?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-24 py-16 sm:py-24 2xl:py-32">
      <Reveal>
        <h2 className="text-fg font-display mb-8 text-xl font-medium tracking-tight sm:mb-10 sm:text-2xl">
          {title}
          {annotation && (
            <span className="text-muted font-sans ms-3 text-base font-normal tracking-normal">
              ({annotation})
            </span>
          )}
        </h2>
        {children}
      </Reveal>
    </section>
  )
}
