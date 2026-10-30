import type { Localized } from './types'

/**
 * Контент политики конфиденциальности. Сайт — статичное портфолио без форм,
 * аккаунтов и аналитики, поэтому политика короткая и честная: описывает ровно
 * то немногое, что реально происходит (тема в localStorage, технические логи
 * хостинга, шрифты на этапе сборки).
 */
type Para = Localized
type PrivacySection = { heading: Localized; body: Para[] }

export const privacy: {
  title: Localized
  updated: Localized
  intro: Para[]
  sections: PrivacySection[]
} = {
  title: {
    ru: 'Политика конфиденциальности',
    en: 'Privacy Policy',
  },
  updated: {
    ru: 'Обновлено: 30 октября 2026',
    en: 'Updated: October 30, 2026',
  },
  intro: [
    {
      ru: 'betenya.dev — личный сайт-портфолио Константина Бетени. Здесь нет форм регистрации, личных кабинетов, оплаты и рекламных трекеров. Этот документ объясняет, какие данные обрабатываются при посещении сайта и что с ними происходит.',
      en: 'betenya.dev is the personal portfolio of Kostya Betenya. There are no sign-up forms, accounts, payments or advertising trackers. This document explains what data is processed when you visit the site and what happens to it.',
    },
  ],
  sections: [
    {
      heading: { ru: 'Какие данные собираются', en: 'What data is collected' },
      body: [
        {
          ru: 'Никакие персональные данные сайт не собирает и не передаёт третьим лицам. Нет систем веб-аналитики, пикселей и рекламных сетей.',
          en: 'The site collects no personal data and shares nothing with third parties. There are no web analytics tools, tracking pixels or ad networks.',
        },
      ],
    },
    {
      heading: { ru: 'Хранение в браузере', en: 'Browser storage' },
      body: [
        {
          ru: 'Единственное, что сохраняется в вашем браузере, — выбранная тема оформления (светлая или тёмная) в localStorage. Это значение нужно только чтобы запомнить предпочтение между визитами; оно не покидает ваше устройство и никуда не отправляется.',
          en: 'The only thing stored in your browser is your chosen theme (light or dark) in localStorage. It exists solely to remember your preference between visits; it never leaves your device and is not sent anywhere.',
        },
      ],
    },
    {
      heading: { ru: 'Технические логи', en: 'Server logs' },
      body: [
        {
          ru: 'Хостинг-провайдер, на котором размещён сайт, может вести стандартные технические логи (IP-адрес, тип браузера, запрошенные страницы) для обеспечения работы и безопасности сервиса. Это обычная практика любого веб-хостинга; эти данные не используются для идентификации посетителей.',
          en: 'The hosting provider for this site may keep standard technical logs (IP address, browser type, requested pages) to run and secure the service. This is routine for any web host; the data is not used to identify visitors.',
        },
      ],
    },
    {
      heading: { ru: 'Шрифты', en: 'Fonts' },
      body: [
        {
          ru: 'Шрифты подключаются на этапе сборки и раздаются с того же домена, что и сайт. Браузер не делает запросов к сторонним шрифтовым сервисам.',
          en: 'Fonts are bundled at build time and served from the same domain as the site. Your browser makes no requests to third-party font services.',
        },
      ],
    },
    {
      heading: { ru: 'Внешние ссылки', en: 'External links' },
      body: [
        {
          ru: 'На сайте есть ссылки на сторонние ресурсы — GitHub, Telegram, LinkedIn, App Store, Google Play и другие. После перехода на них действуют их собственные политики конфиденциальности, за которые этот сайт не отвечает.',
          en: 'The site links to third-party resources such as GitHub, Telegram, LinkedIn, the App Store, Google Play and others. Once you follow them, their own privacy policies apply, and this site is not responsible for them.',
        },
      ],
    },
    {
      heading: { ru: 'Связь', en: 'Contacting me' },
      body: [
        {
          ru: 'Если вы напишете на почту или в Telegram, указанные в разделе «Контакты», ваше сообщение и контактные данные используются только для того, чтобы ответить вам.',
          en: 'If you write to the email or Telegram listed in the Contacts section, your message and contact details are used only to reply to you.',
        },
      ],
    },
    {
      heading: { ru: 'Изменения', en: 'Changes' },
      body: [
        {
          ru: 'Политика может обновляться — актуальная дата указана в начале страницы. По любым вопросам пишите на kostyabet336@gmail.com.',
          en: 'This policy may be updated; the current date is shown at the top of the page. For any questions, write to kostyabet336@gmail.com.',
        },
      ],
    },
  ],
}
