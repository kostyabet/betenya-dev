import type { Olympiad } from './types'

export const olympiads: Olympiad[] = [
  {
    slug: 'bsuir-open-2026',
    name: 'Bsuir Open XIV',
    year: 2026,
    accent: '#A2BC4D',
    logo: '/bsuir-open-14.svg',
    role: { ru: 'Промо-сайт чемпионата', en: 'Championship landing page' },
    tagline: {
      ru: '14-й командный чемпионат БГУИР по спортивному программированию',
      en: 'The 14th BSUIR team championship in competitive programming',
    },
    description: {
      ru: [
        'Bsuir Open — ежегодный командный чемпионат БГУИР по спортивному программированию: отборочный раунд, полуфинал и финал для студенческих и школьных команд.',
        'Для XIV выпуска я сделал промо-лендинг чемпионата — с новым фирменным цветом сезона, расписанием этапов и информацией для участников.',
      ],
      en: [
        'Bsuir Open is BSUIR’s annual team championship in competitive programming: a qualifying round, semifinal and final for student and school teams.',
        'For the XIV edition I built the championship’s promo landing page: a new seasonal brand color, the stage schedule and information for participants.',
      ],
    },
    links: [
      { href: 'https://acm.bsuir.by', label: { ru: 'Сайт чемпионата', en: 'Championship site' } },
    ],
  },
  {
    slug: 'bsuir-open-2025',
    name: 'Bsuir Open XIII',
    year: 2025,
    accent: '#607E99',
    logo: '/bsuir_open_13.svg',
    role: { ru: 'Промо-сайт чемпионата', en: 'Championship landing page' },
    tagline: {
      ru: '13-й командный чемпионат БГУИР по спортивному программированию',
      en: 'The 13th BSUIR team championship in competitive programming',
    },
    description: {
      ru: [
        'XIII выпуск прошёл с марта по май 2025 года: отборочный онлайн-раунд, очный полуфинал и студенческий/школьный финалы в БГУИР.',
        'Я сделал лендинг этого сезона — свой цвет и дизайн под год, расписание этапов и регистрация команд.',
      ],
      en: [
        'The XIII edition ran from March to May 2025: an online qualifying round, an in-person semifinal, and student/school finals at BSUIR.',
        'I built that season’s landing page: its own color and design for the year, the stage schedule and team registration.',
      ],
    },
    links: [
      { href: 'https://acm.bsuir.by', label: { ru: 'Сайт чемпионата', en: 'Championship site' } },
    ],
  },
  {
    slug: 'bsuir-open-2024',
    name: 'Bsuir Open XII',
    year: 2024,
    accent: '#7170C4',
    logo: '/bsuir-open-12.svg',
    role: { ru: 'Промо-сайт чемпионата', en: 'Championship landing page' },
    tagline: {
      ru: '12-й командный чемпионат БГУИР по спортивному программированию',
      en: 'The 12th BSUIR team championship in competitive programming',
    },
    description: {
      ru: [
        'XII выпуск чемпионата: квалификация, полуфинал, студенческий и школьный финалы — с командами от вузов и школ.',
        'Я сделал лендинг сезона с индивидуальным фиолетовым акцентом этого года.',
      ],
      en: [
        'The XII edition: a qualifying round, a semifinal, and student and school finals, with teams from universities and schools.',
        'I built that season’s landing page with its own purple accent for the year.',
      ],
    },
    links: [
      { href: 'https://acm.bsuir.by', label: { ru: 'Сайт чемпионата', en: 'Championship site' } },
    ],
  },
  {
    slug: 'bitcup-2024',
    name: 'BIT-Cup 2024',
    year: 2024,
    accent: '#f3ba16',
    logo: '/bitcup-2024.svg',
    role: { ru: 'Промо-сайт олимпиады', en: 'Olympiad landing page' },
    tagline: {
      ru: 'Студенческая олимпиада БГУИР по информационным технологиям',
      en: 'BSUIR’s student olympiad in information technology',
    },
    description: {
      ru: [
        'BIT-Cup — студенческая олимпиада БГУИР, где задания готовят специалисты ИТ-компаний на основе реальных рабочих задач.',
        'Я сделал промо-лендинг олимпиады сезона 2024 года с собственной фирменной палитрой.',
      ],
      en: [
        'BIT-Cup is BSUIR’s student olympiad, where tasks are set by IT company specialists and based on real-world work problems.',
        'I built the 2024 season’s promo landing page with its own brand palette.',
      ],
    },
    links: [
      { href: 'http://bit-cup.bsuir.by', label: { ru: 'Сайт олимпиады', en: 'Olympiad site' } },
    ],
  },
]

export function getOlympiad(slug: string): Olympiad | undefined {
  return olympiads.find((o) => o.slug === slug)
}
