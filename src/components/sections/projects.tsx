import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { projects, hasProductPage } from '@/content/projects'
import type { Project, ProjectAccent, ProjectLinkKind } from '@/content/types'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'
import { TechPills } from '@/components/tech-pill'
import { ShowMore } from '@/components/show-more'

const STATUS_DOT: Record<Project['status'], string> = {
  released: 'bg-ok',
  'in-dev': 'bg-accent',
  done: 'bg-faint',
}

/** Порядок предпочтения главной внешней ссылки карточки: живой продукт → магазин → репозиторий. */
const LINK_PRIORITY: ProjectLinkKind[] = [
  'site',
  'appstore',
  'googleplay',
  'marketplace',
  'github',
  'telegram',
]

/** Куда ведёт карточка проекта (подстраниц больше нет — только внешний ресурс). */
function primaryHref(project: Project): string | undefined {
  for (const kind of LINK_PRIORITY) {
    const link = project.links.find((l) => l.kind === kind)
    if (link) return link.href
  }
  return project.links[0]?.href
}

const TINT_VAR: Record<ProjectAccent, string> = {
  gold: 'var(--tint-gold)',
  blue: 'var(--tint-blue)',
  emerald: 'var(--tint-emerald)',
  red: 'var(--tint-red)',
}

export function ProjectStatus({ status, locale }: { status: Project['status']; locale: Locale }) {
  return (
    <span className="text-muted inline-flex items-center gap-1.5 font-mono text-xs whitespace-nowrap">
      <span className={`size-1.5 rounded-full ${STATUS_DOT[status]}`} aria-hidden="true" />
      {ui.projects.status[status][locale]}
    </span>
  )
}

function cardStyle(accent?: ProjectAccent): CSSProperties | undefined {
  return accent ? ({ '--tint': TINT_VAR[accent] } as CSSProperties) : undefined
}

/**
 * Обёртка-ссылка карточки: у основных продуктов — внутренняя подстраница,
 * у остальных — внешний ресурс (primaryHref).
 */
function CardShell({
  project,
  locale,
  className,
  style,
  children,
}: {
  project: Project
  locale: Locale
  className: string
  style?: CSSProperties
  children: ReactNode
}) {
  if (hasProductPage(project.slug)) {
    return (
      <Link href={`/${locale}/projects/${project.slug}`} className={className} style={style}>
        {children}
      </Link>
    )
  }
  return (
    <a
      href={primaryHref(project)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  )
}

/** Золотая карточка главного проекта — первой строкой на всю ширину грида. */
function FlagshipCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <CardShell
      project={project}
      locale={locale}
      style={cardStyle(project.accent)}
      className="group glass tinted col-span-full block rounded-xl border p-6 transition-colors sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {project.logo && (
          <img
            src={project.logo}
            alt=""
            aria-hidden="true"
            className="border-glass-line size-9 shrink-0 rounded-lg border object-cover"
          />
        )}
        <h3 className="text-fg text-2xl font-bold tracking-tight">{project.name}</h3>
        <span className="font-mono text-xs" style={{ color: 'var(--tint)' }}>
          {ui.projects.flagship[locale]}
        </span>
        <span className="ms-auto">
          <ProjectStatus status={project.status} locale={locale} />
        </span>
      </div>
      <p className="text-muted mt-3 max-w-2xl leading-relaxed">{project.tagline[locale]}</p>
      <TechPills items={project.stack} className="mt-5" />
    </CardShell>
  )
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <CardShell
      project={project}
      locale={locale}
      style={cardStyle(project.accent)}
      className={`group glass block rounded-xl border p-5 transition-colors ${
        project.accent ? 'tinted' : 'border-glass-line hover:border-accent'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {project.logo && (
            <img
              src={project.logo}
              alt=""
              aria-hidden="true"
              className="border-glass-line size-7 shrink-0 rounded-md border object-cover"
            />
          )}
          <h3 className="text-fg text-lg font-semibold">{project.name}</h3>
        </div>
        <ProjectStatus status={project.status} locale={locale} />
      </div>
      <p className="text-muted mt-2 text-sm leading-relaxed">{project.tagline[locale]}</p>
      <TechPills items={project.stack} className="mt-4" />
    </CardShell>
  )
}

export function Projects({ locale }: { locale: Locale }) {
  const flagship = projects.find((p) => p.accent === 'gold')
  const rest = projects.filter((p) => p !== flagship)

  /* Первые 2 «строки» грида: флагман (во всю ширину) + 3 карточки на lg. */
  const cards = [
    ...(flagship ? [<FlagshipCard key={flagship.slug} project={flagship} locale={locale} />] : []),
    ...rest.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />),
  ]

  return (
    <Section id="projects" title={ui.sections.projects[locale]}>
      <ShowMore
        initial={4}
        gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        labels={{ more: ui.projects.showMore[locale], less: ui.projects.showLess[locale] }}
      >
        {cards}
      </ShowMore>
    </Section>
  )
}
