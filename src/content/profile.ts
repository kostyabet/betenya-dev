import type { Profile } from './types'

export const siteUrl = 'https://betenya.dev'

export const profile: Profile = {
  name: {
    ru: 'Константин Бетеня',
    en: 'Kostya Betenya',
  },
  role: {
    ru: 'Software Engineer',
    en: 'Software Engineer',
  },
  tagline: {
    ru: 'Делаю веб-платформы днём и мобильные приложения, которые ощущаются нативными, — вечером.',
    en: 'Web platforms by day, mobile apps that feel native by night.',
  },
  metaDescription: {
    ru: 'Константин Бетеня — software engineer из Минска. Fullstack-разработка, мобильные приложения на React Native, свои продукты: UniTime, Bsuir Time, Centry.',
    en: 'Kostya Betenya — software engineer from Minsk. Fullstack development, React Native mobile apps, own products: UniTime, Bsuir Time, Centry.',
  },
  location: {
    ru: 'Минск, Беларусь',
    en: 'Minsk, Belarus',
  },
  status: [
    {
      label: { ru: 'сейчас', en: 'now' },
      value: {
        ru: 'WealthCharts — интеграции брокерских платформ',
        en: 'WealthCharts — broker platform integrations',
      },
    },
    {
      label: { ru: 'строю', en: 'building' },
      value: {
        ru: 'UniTime — расписание для нескольких вузов',
        en: 'UniTime — schedules for multiple universities',
      },
      href: 'https://unitimes.app',
    },
    {
      label: { ru: 'база', en: 'based in' },
      value: {
        ru: 'Минск. БГУИР, ФКСиС',
        en: 'Minsk. BSUIR, Computer Systems and Networks',
      },
    },
  ],
  about: {
    ru: [
      'Я fullstack-инженер: днём работаю в Yumasoft над финтех-продуктами — начинал с DWH-платформы DataForge, сейчас занимаюсь WealthCharts, где подключаю новые брокерские фирмы к продукту и поддерживаю существующие интеграции. Вокруг этого — React, Nest.js и приличный кусок AWS.',
      'Вечерами развиваю Vazon Hub — свою студию мобильных приложений. Начал с Bsuir Time, расписания БГУИР с виджетами, Apple Watch и облачной синхронизацией, затем выпустил финансовый трекер Centry, а сейчас строю UniTime — платформу расписаний сразу для нескольких университетов.',
      'Учусь в БГУИР на факультете компьютерных систем и сетей. Люблю низкоуровневые штуки — писал игры и расширение для VS Code под FASM, — держу свои сервисы на собственном VPS с Dokploy и Docker и постепенно копаю в сторону data-аналитики.',
    ],
    en: [
      'I am a fullstack engineer. By day I work at Yumasoft on fintech products: I started on DataForge, a DWH platform, and now work on WealthCharts, where I onboard new brokerage firms into the product and maintain existing integrations. The toolkit around that is React, Nest.js and a solid chunk of AWS.',
      'In the evenings I run Vazon Hub, my own mobile app studio. It started with Bsuir Time — a BSUIR schedule app with widgets, an Apple Watch app and cloud sync — then came Centry, a personal finance tracker, and now I am building UniTime, a schedule platform for multiple universities at once.',
      'I study Computer Software Engineering at BSUIR. I enjoy low-level things — I wrote games and a VS Code extension for FASM — I self-host my services on a VPS with Dokploy and Docker, and I am steadily digging into data analytics.',
    ],
  },
  contacts: [
    {
      kind: 'telegram',
      label: { ru: 'Telegram', en: 'Telegram' },
      value: '@kostyabelbet',
      href: 'https://t.me/kostyabelbet',
    },
    {
      kind: 'telegram-channel',
      label: { ru: 'Канал с проектами', en: 'Projects channel' },
      value: '@multibelbet',
      href: 'https://t.me/multibelbet',
    },
    {
      kind: 'email',
      label: { ru: 'Почта', en: 'Email' },
      value: 'kostyabet336@gmail.com',
      href: 'mailto:kostyabet336@gmail.com',
    },
    {
      kind: 'github',
      label: { ru: 'GitHub', en: 'GitHub' },
      value: 'kostyabet',
      href: 'https://github.com/kostyabet',
    },
    {
      kind: 'linkedin',
      label: { ru: 'LinkedIn', en: 'LinkedIn' },
      value: 'kostya-betenya',
      href: 'https://www.linkedin.com/in/kostya-betenya-080754338',
    },
    {
      kind: 'instagram',
      label: { ru: 'Instagram', en: 'Instagram' },
      value: '@kostikk.bet',
      href: 'https://www.instagram.com/kostikk.bet/',
    },
  ],
}
