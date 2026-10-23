import type { Locale } from './i18n'
import { projects } from '@/content/projects'
import { experience } from '@/content/experience'
import type { SkillItem } from '@/content/types'

export interface SkillUsage {
  label: string
  kind: 'project' | 'work'
}

/**
 * Где навык реально использован: проходит по `stack` проектов и `tags` опыта,
 * сопоставляя токены `item.match` (или `[item.name]` по умолчанию). Один
 * источник учитывается один раз, даже если совпало несколько токенов.
 */
export function skillUsages(item: SkillItem, locale: Locale): SkillUsage[] {
  const tokens = new Set(item.match ?? [item.name])
  const out: SkillUsage[] = []

  for (const project of projects) {
    if (project.stack.some((s) => tokens.has(s))) {
      out.push({ label: project.name, kind: 'project' })
    }
  }
  for (const entry of experience) {
    if (entry.tags.some((t) => tokens.has(t))) {
      out.push({ label: entry.company[locale], kind: 'work' })
    }
  }
  return out
}
