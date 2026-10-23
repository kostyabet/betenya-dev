import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Contacts } from '@/components/sections/contacts'

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Skills locale={locale} />
      <Contacts locale={locale} />
    </>
  )
}
