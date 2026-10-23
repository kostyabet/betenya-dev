import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { projects } from '@/content/projects'
import type { Project } from '@/content/types'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'

const STATUS_DOT: Record<Project['status'], string> = {
  released: 'bg-ok',
  'in-dev': 'bg-accent',
  done: 'bg-faint',
}

export function ProjectStatus({ status, locale }: { status: Project['status']; locale: Locale }) {
  return (
    <span className="text-muted inline-flex items-center gap-1.5 font-mono text-xs">
      <span className={`size-1.5 rounded-full ${STATUS_DOT[status]}`} aria-hidden="true" />
      {ui.projects.status[status][locale]}
    </span>
  )
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group border-line bg-surface hover:border-accent block rounded-lg border p-5 transition-colors"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-fg group-hover:text-accent text-lg font-semibold transition-colors">
          {project.name}
        </h3>
        <ProjectStatus status={project.status} locale={locale} />
      </div>
      <p className="text-muted mt-2 text-sm leading-relaxed">{project.tagline[locale]}</p>
      <p className="text-faint mt-4 font-mono text-xs">{project.stack.join(', ')}</p>
    </Link>
  )
}

function ProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <li>
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group border-line flex flex-col gap-1 border-t py-4 sm:flex-row sm:items-baseline sm:gap-4"
      >
        <span className="text-fg group-hover:text-accent w-48 shrink-0 font-medium transition-colors">
          {project.name}
        </span>
        <span className="text-muted grow text-sm">{project.tagline[locale]}</span>
        <ProjectStatus status={project.status} locale={locale} />
      </Link>
    </li>
  )
}

export function Projects({ locale }: { locale: Locale }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" title={ui.sections.projects[locale]}>
      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <h3 className="text-muted mt-12 mb-2 text-sm font-medium">
            {ui.sections.moreProjects[locale]}
          </h3>
          <ul>
            {rest.map((project) => (
              <ProjectRow key={project.slug} project={project} locale={locale} />
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
