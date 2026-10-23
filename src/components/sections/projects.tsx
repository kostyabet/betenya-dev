import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/i18n'
import { projects } from '@/content/projects'
import type { Project, ProjectAccent } from '@/content/types'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'
import { TechPills } from '@/components/tech-pill'

const STATUS_DOT: Record<Project['status'], string> = {
  released: 'bg-ok',
  'in-dev': 'bg-accent',
  done: 'bg-faint',
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

/** Золотая карточка главного проекта — первой строкой на всю ширину грида. */
function FlagshipCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      style={cardStyle(project.accent)}
      className="group glass tinted col-span-full block rounded-3xl border p-6 transition duration-200 hover:-translate-y-0.5 sm:p-8"
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
    </Link>
  )
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      style={cardStyle(project.accent)}
      className={`group glass block rounded-xl border p-5 transition duration-200 hover:-translate-y-0.5 ${
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
    </Link>
  )
}

export function Projects({ locale }: { locale: Locale }) {
  const flagship = projects.find((p) => p.accent === 'gold')
  const rest = projects.filter((p) => p !== flagship)

  return (
    <Section id="projects" title={ui.sections.projects[locale]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flagship && <FlagshipCard project={flagship} locale={locale} />}
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </Section>
  )
}
