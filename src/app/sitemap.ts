import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { siteUrl } from '@/content/profile'

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: { ru: `${siteUrl}/ru`, en: `${siteUrl}/en` },
    },
  }))
}
