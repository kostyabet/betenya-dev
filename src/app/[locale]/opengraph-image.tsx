import { ImageResponse } from 'next/og'
import { locales } from '@/lib/i18n'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Kostya Betenya — Software Engineer'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/*
 * Текст в OG-картинке — латиница для обеих локалей: встроенный шрифт
 * next/og не содержит кириллицы.
 */
export default function OpengraphImage() {
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
        <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#7aa2ff' }} />
        <div style={{ fontSize: 32, color: '#7aa2ff' }}>betenya.dev</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Kostya Betenya</div>
        <div style={{ fontSize: 40, color: '#9aa3b2' }}>Software Engineer</div>
      </div>

      <div style={{ fontSize: 26, color: '#58616e' }}>
        Web platforms by day, mobile apps that feel native by night
      </div>
    </div>,
    size,
  )
}
