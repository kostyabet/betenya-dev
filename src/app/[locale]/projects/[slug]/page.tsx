import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Apple, ArrowLeft, ExternalLink, Globe, Play } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { isLocale, ogLocales } from '@/lib/i18n'
import { projects, getProject } from '@/content/projects'
import type { ProjectLinkKind } from '@/content/types'
import { ui } from '@/content/ui'
import { ProjectStatus } from '@/components/sections/projects'
import { GithubIcon, TelegramIcon } from '@/components/brand-icons'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const project = getProject(slug)
  if (!project) notFound()

  const description = project.tagline[locale]
  return {
    title: project.name,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        ru: `/ru/projects/${slug}`,
        en: `/en/projects/${slug}`,
        'x-default': `/ru/projects/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: ogLocales[locale],
      url: `/${locale}/projects/${slug}`,
      title: project.name,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description,
    },
  }
}

const LINK_ICONS: Record<ProjectLinkKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  site: Globe,
  github: GithubIcon,
  appstore: Apple,
  googleplay: Play,
  telegram: TelegramIcon,
  marketplace: ExternalLink,
}

export default async function ProjectPage({ params }: PageProps<'/[locale]/projects/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <article className="py-12 sm:py-16">
      <Link
        href={`/${locale}#projects`}
        className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {ui.projects.backToList[locale]}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="text-fg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <ProjectStatus status={project.status} locale={locale} />
        </div>
        <p className="text-muted mt-3 max-w-2xl text-lg leading-relaxed">
          {project.tagline[locale]}
        </p>
      </header>

      <div className="text-muted mt-8 max-w-2xl space-y-4 leading-relaxed">
        {project.description[locale].map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      {project.highlights && (
        <section className="mt-10 max-w-2xl" aria-label={ui.projects.highlights[locale]}>
          <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.highlights[locale]}</h2>
          <ul className="text-muted marker:text-accent list-disc space-y-1.5 ps-4 text-sm leading-relaxed">
            {project.highlights[locale].map((highlight) => (
              <li key={highlight.slice(0, 32)}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10" aria-label={ui.projects.stack[locale]}>
        <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.stack[locale]}</h2>
        <p className="text-faint font-mono text-sm">{project.stack.join(', ')}</p>
      </section>

      {project.links.length > 0 && (
        <section className="mt-10" aria-label={ui.projects.links[locale]}>
          <h2 className="text-fg mb-3 text-sm font-medium">{ui.projects.links[locale]}</h2>
          <ul className="flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = LINK_ICONS[link.kind]
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass border-glass-line text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <Icon width={16} height={16} aria-hidden="true" />
                    {link.label[locale]}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </article>
  )
}
