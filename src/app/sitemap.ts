import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { siteUrl } from '@/content/profile'
import { projects } from '@/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    entries.push({
      url: `${siteUrl}/${locale}`,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: { ru: `${siteUrl}/ru`, en: `${siteUrl}/en` },
      },
    })
  }

  for (const project of projects) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}/projects/${project.slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            ru: `${siteUrl}/ru/projects/${project.slug}`,
            en: `${siteUrl}/en/projects/${project.slug}`,
          },
        },
      })
    }
  }

  return entries
}
