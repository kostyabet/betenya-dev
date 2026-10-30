import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { siteUrl } from '@/content/profile'

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: { ru: `${siteUrl}/ru`, en: `${siteUrl}/en` },
    },
  }))

  const privacy = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/privacy`,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
    alternates: {
      languages: { ru: `${siteUrl}/ru/privacy`, en: `${siteUrl}/en/privacy` },
    },
  }))

  return [...home, ...privacy]
}
