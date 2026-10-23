import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { siteUrl } from '@/content/profile'
import { projects } from '@/content/projects'
import { olympiads } from '@/content/olympiads'
import { experience } from '@/content/experience'

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

  for (const olympiad of olympiads) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}/olympiads/${olympiad.slug}`,
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: `${siteUrl}/ru/olympiads/${olympiad.slug}`,
            en: `${siteUrl}/en/olympiads/${olympiad.slug}`,
          },
        },
      })
    }
  }

  for (const entry of experience) {
    if (!entry.slug) continue
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}/experience/${entry.slug}`,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            ru: `${siteUrl}/ru/experience/${entry.slug}`,
            en: `${siteUrl}/en/experience/${entry.slug}`,
          },
        },
      })
    }
  }

  return entries
}
