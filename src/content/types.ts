import type { Locale } from '@/lib/i18n'

/** Строка (или любое значение) в двух языках: `{ ru: ..., en: ... }`. */
export type Localized<T = string> = Record<Locale, T>

export type ContactKind =
  'telegram' | 'telegram-channel' | 'email' | 'github' | 'linkedin' | 'instagram'

export interface Contact {
  kind: ContactKind
  label: Localized
  /** Видимое значение, например `@kostyabelbet`. */
  value: string
  href: string
}

export interface HeroStatusLine {
  label: Localized
  value: Localized
  href?: string
}

export interface Profile {
  /** Имя для hero и метаданных. */
  name: Localized
  role: Localized
  /** Короткая фраза под именем в hero. */
  tagline: Localized
  /** Описание сайта для метатегов и OG. */
  metaDescription: Localized
  location: Localized
  /** Моно-блок статуса в hero: «сейчас / строю / база». */
  status: HeroStatusLine[]
  /** Абзацы раздела «Обо мне». */
  about: Localized<string[]>
  contacts: Contact[]
}

export interface ExperienceEntry {
  /** `work` — работа, `education` — учёба (помечается в таймлайне). */
  kind: 'work' | 'education'
  company: Localized
  url?: string
  role: Localized
  /** Формат: `2026-02`. `end: null` — по настоящее время. */
  period: { start: string; end: string | null }
  employment?: Localized
  bullets: Localized<string[]>
  tags: string[]
}

export type ProjectStatus = 'released' | 'in-dev' | 'done'

export type ProjectLinkKind =
  'site' | 'github' | 'appstore' | 'googleplay' | 'telegram' | 'marketplace'

export interface ProjectLink {
  kind: ProjectLinkKind
  label: Localized
  href: string
}

export interface Project {
  /** URL-сегмент страницы проекта: `/ru/projects/<slug>`. */
  slug: string
  name: string
  status: ProjectStatus
  /** Крупные проекты — карточки, остальные — компактный список. */
  featured: boolean
  tagline: Localized
  /** Абзацы подробной страницы. */
  description: Localized<string[]>
  /** Ключевые фичи для подробной страницы (опционально). */
  highlights?: Localized<string[]>
  stack: string[]
  links: ProjectLink[]
}

export interface SkillItem {
  name: string
  /** Помечает навык бейджем «изучаю». */
  learning?: boolean
}

export interface SkillCategory {
  title: Localized
  items: SkillItem[]
}
