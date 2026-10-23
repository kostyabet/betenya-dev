import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <h2 className="text-fg mb-8 text-2xl font-semibold tracking-tight sm:mb-10">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}
