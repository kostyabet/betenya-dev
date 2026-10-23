import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n'
import { getOlympiad, olympiads } from '@/content/olympiads'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Olympiad — betenya.dev'

export function generateStaticParams() {
  return locales.flatMap((locale) => olympiads.map((olympiad) => ({ locale, slug: olympiad.slug })))
}

/*
 * Текст — латиница (английский теглайн) для обеих локалей: встроенный
 * шрифт next/og не содержит кириллицы.
 */
export default async function OlympiadOpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const olympiad = getOlympiad(slug)
  if (!olympiad) notFound()

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        backgroundColor: '#101318',
        color: '#e8eaef',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: olympiad.accent }}
        />
        <div style={{ fontSize: 32, color: olympiad.accent }}>betenya.dev</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>{olympiad.name}</div>
        <div style={{ fontSize: 36, color: '#9aa3b2', maxWidth: 1000 }}>
          {olympiad.tagline.en}
        </div>
      </div>

      <div style={{ fontSize: 26, color: '#58616e' }}>{olympiad.role.en}</div>
    </div>,
    size,
  )
}
