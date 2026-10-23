import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    kind: 'work',
    slug: 'vazon-hub',
    company: { ru: 'Vazon Hub', en: 'Vazon Hub' },
    logo: '/logos/vazon-hub.jpg',
    url: 'https://github.com/vazonhub',
    role: { ru: 'Founder, CTO', en: 'Founder, CTO' },
    period: { start: '2026-04', end: null },
    employment: { ru: 'свой проект', en: 'own venture' },
    bullets: {
      ru: [
        'Строю студию мобильных приложений: Bsuir Time, Centry и UniTime — от идеи до релиза в App Store и Google Play.',
        'React Native / Expo с нативными модулями: виджеты на WidgetKit и Glance, приложение для Apple Watch, синхронизация через iCloud и Google Drive.',
        'Доступность (VoiceOver, крупный текст, high contrast), внутренние покупки, ASO-оптимизация.',
      ],
      en: [
        'Building a mobile app studio: Bsuir Time, Centry and UniTime — from idea to release on the App Store and Google Play.',
        'React Native / Expo with native modules: WidgetKit and Glance widgets, an Apple Watch app, cloud sync via iCloud and Google Drive.',
        'Accessibility (VoiceOver, large text, high contrast), in-app purchases, ASO.',
      ],
    },
    details: {
      ru: [
        'Vazon Hub — моя студия мобильных приложений: продукты для студентов и личных финансов, которые я веду сам — от идеи и дизайна до релиза в App Store и Google Play.',
        'Начал с Bsuir Time — расписания БГУИР с виджетами и приложением для Apple Watch, затем выпустил Centry — финансовый трекер с офлайн-вводом за несколько секунд. Сейчас строю UniTime — расписание, которое работает сразу для нескольких университетов.',
        'Внутри — React Native и Expo с нативными модулями: виджеты на WidgetKit и Glance, синхронизация через iCloud и Google Drive, доступность (VoiceOver, крупный текст, high contrast), внутренние покупки и ASO.',
      ],
      en: [
        'Vazon Hub is my mobile app studio: products for students and personal finance that I run end-to-end — from idea and design to App Store and Google Play releases.',
        'It started with Bsuir Time — a BSUIR schedule app with widgets and an Apple Watch app — followed by Centry, a finance tracker with offline entry in seconds. Now I am building UniTime: a schedule that works across multiple universities at once.',
        'Under the hood it is React Native and Expo with native modules: WidgetKit and Glance widgets, iCloud and Google Drive sync, accessibility (VoiceOver, large text, high contrast), in-app purchases and ASO.',
      ],
    },
    links: [
      { href: 'https://github.com/vazonhub', label: { ru: 'GitHub студии', en: 'Studio GitHub' } },
      { href: 'https://unitimes.app', label: { ru: 'UniTime', en: 'UniTime' } },
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Swift', 'WidgetKit'],
  },
  {
    kind: 'work',
    slug: 'yumasoft',
    company: { ru: 'Yumasoft', en: 'Yumasoft' },
    logo: '/logos/yumasoft.jpg',
    role: { ru: 'Full Stack Engineer', en: 'Full Stack Engineer' },
    period: { start: '2026-02', end: null },
    bullets: {
      ru: [
        'DataForge (февраль — май): DWH-платформа на React и Nest.js с TypeORM.',
        'WealthCharts (с мая): интеграция брокерских платформ — подключаю новые фирмы к продукту и поддерживаю существующие интеграции.',
        'AWS в ежедневной работе: EC2, ECS, Lambda, DynamoDB, S3, ECR и code pipelines.',
        'Поднял офлайн-GitLab с CI/CD и security-правилами для внутренних репозиториев.',
      ],
      en: [
        'DataForge (February — May): a DWH platform built with React and Nest.js with TypeORM.',
        'WealthCharts (since May): broker platform integrations — onboarding new firms into the product and maintaining existing integrations.',
        'Day-to-day AWS: EC2, ECS, Lambda, DynamoDB, S3, ECR and code pipelines.',
        'Set up a self-hosted GitLab with CI/CD and security rules for internal repositories.',
      ],
    },
    details: {
      ru: [
        'Yumasoft — команда, в которой я работаю над финтех-продуктами на полном стеке: React на фронте, Nest.js с TypeORM на бэке.',
        'Начинал с DataForge — DWH-платформы для работы с данными. С мая перешёл на WealthCharts — платформу для трейдинга, где отвечаю за интеграции брокерских платформ: подключаю новые фирмы к продукту и поддерживаю существующие интеграции.',
        'Инфраструктура живёт в AWS: EC2, ECS, Lambda, DynamoDB, S3, ECR и code pipelines. Отдельно поднял офлайн-GitLab с CI/CD и security-правилами для внутренних репозиториев.',
      ],
      en: [
        'Yumasoft is the team where I work on fintech products across the full stack: React on the front, Nest.js with TypeORM on the back.',
        'I started on DataForge, a DWH platform. Since May I have been on WealthCharts — a trading platform where I own broker integrations: onboarding new firms into the product and maintaining existing integrations.',
        'The infrastructure lives on AWS: EC2, ECS, Lambda, DynamoDB, S3, ECR and code pipelines. I also set up a self-hosted GitLab with CI/CD and security rules for internal repositories.',
      ],
    },
    links: [{ href: 'https://www.wealthcharts.com', label: { ru: 'WealthCharts', en: 'WealthCharts' } }],
    tags: ['React', 'Nest.js', 'TypeORM', 'AWS', 'GitLab CI/CD', 'Ant Design'],
  },
  {
    kind: 'work',
    slug: 'farmaservice',
    company: { ru: 'Farmaservice', en: 'Farmaservice' },
    role: { ru: 'Frontend Engineer', en: 'Frontend Engineer' },
    period: { start: '2025-05', end: '2025-09' },
    bullets: {
      ru: [
        'ERP-система для бухгалтеров: учёт и работа с товарами на предприятиях.',
        'Архитектура запросов на axios, стейт на zustand, графики на recharts.',
        'Генерация PDF-отчётов на фронте и виртуализация таблиц с большим числом строк.',
      ],
      en: [
        'An ERP system for accountants: inventory and goods management for enterprises.',
        'Query architecture with axios, state with zustand, charts with recharts.',
        'Frontend PDF report generation and virtualization of large tables.',
      ],
    },
    details: {
      ru: [
        'ERP-система для бухгалтеров: учёт и работа с товарами на предприятиях. Я отвечал за фронтенд.',
        'Собрал архитектуру запросов на axios и стейт на zustand, графики — на recharts. Из интересного: генерация PDF-отчётов прямо на фронте и виртуализация таблиц, где строк — десятки тысяч.',
      ],
      en: [
        'An ERP system for accountants: inventory and goods management for enterprises. I owned the frontend.',
        'I built the query architecture on axios and state on zustand, with charts on recharts. The fun parts: PDF report generation right on the frontend and virtualization for tables with tens of thousands of rows.',
      ],
    },
    tags: ['React', 'TypeScript', 'Zustand', 'Recharts', 'Tailwind CSS', 'Ant Design'],
  },
  {
    kind: 'work',
    slug: 'blackout-studio',
    company: { ru: 'Blackout Studio', en: 'Blackout Studio' },
    logo: '/logos/blackout-studio.jpg',
    role: { ru: 'Full Stack Engineer', en: 'Full Stack Engineer' },
    period: { start: '2025-01', end: '2025-08' },
    employment: { ru: 'part-time', en: 'part-time' },
    bullets: {
      ru: [
        'Внутренняя CRM-система компании: React, Redux Toolkit, MUI.',
        'Чат и уведомления на WebSocket, интеграция с Telegram-ботом.',
        'REST API на Node.js и Express, S3-хранилище, адаптация под PWA.',
      ],
      en: [
        'The company’s internal CRM: React, Redux Toolkit, MUI.',
        'WebSocket chat and notifications, Telegram bot integration.',
        'REST API with Node.js and Express, S3 storage, PWA support.',
      ],
    },
    details: {
      ru: [
        'Внутренняя CRM-система компании: React, Redux Toolkit и MUI на фронте, REST API на Node.js и Express на бэке.',
        'Сделал чат и уведомления на WebSocket с интеграцией Telegram-бота, S3-хранилище файлов и адаптацию интерфейса под PWA. Работал part-time параллельно с учёбой.',
      ],
      en: [
        'The company’s internal CRM: React, Redux Toolkit and MUI on the front, a REST API on Node.js and Express on the back.',
        'I built WebSocket chat and notifications with a Telegram bot integration, S3 file storage and PWA support. Worked part-time alongside university.',
      ],
    },
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'WebSocket', 'MUI'],
  },
  {
    kind: 'work',
    slug: 'emotioniq',
    company: { ru: 'EmotionIQ', en: 'EmotionIQ' },
    logo: '/logos/emotioniq.jpg',
    role: { ru: 'Software Engineer', en: 'Software Engineer' },
    period: { start: '2024-05', end: '2025-02' },
    employment: { ru: 'part-time', en: 'part-time' },
    bullets: {
      ru: [
        'Веб-платформа аналитики и статистики: фронтенд и REST API на Node.js с Express.',
        'Настройка CI/CD, прототипирование UI/UX в Figma, файловое хранилище на S3.',
        'Участие в переговорах и выступления на публичных мероприятиях для привлечения инвестиций.',
      ],
      en: [
        'A web platform for analytics and statistics: frontend plus a REST API on Node.js with Express.',
        'CI/CD setup, UI/UX prototyping in Figma, S3 file storage.',
        'Took part in negotiations and spoke at public events to attract investment.',
      ],
    },
    details: {
      ru: [
        'Веб-платформа аналитики и статистики: я делал фронтенд и REST API на Node.js с Express.',
        'Настраивал CI/CD, прототипировал UI/UX в Figma, подключал файловое хранилище на S3. Помимо кода — участвовал в переговорах и выступал на публичных мероприятиях, когда команда привлекала инвестиции.',
      ],
      en: [
        'A web platform for analytics and statistics: I built the frontend and a REST API on Node.js with Express.',
        'I set up CI/CD, prototyped UI/UX in Figma and wired up S3 file storage. Beyond code — took part in negotiations and spoke at public events while the team was raising investment.',
      ],
    },
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Figma'],
  },
  {
    kind: 'education',
    slug: 'bsuir',
    company: { ru: 'БГУИР', en: 'BSUIR' },
    url: 'https://www.bsuir.by',
    role: {
      ru: 'Бакалавриат, Computer Software Engineering',
      en: 'BSc, Computer Software Engineering',
    },
    period: { start: '2023-09', end: '2027-07' },
    avgGrade: '8.8',
    bullets: {
      ru: [
        'Факультет компьютерных систем и сетей.',
        'Параллельно верстал промо-лендинги для 4 олимпиад университета.',
        '2 публикации на студенческих научных конференциях БГУИР (2024, 2025).',
      ],
      en: [
        'Faculty of Computer Systems and Networks.',
        'Built promo landing pages for 4 of the university’s olympiads along the way.',
        '2 papers at BSUIR student research conferences (2024, 2025).',
      ],
    },
    details: {
      ru: [
        'Учусь на факультете компьютерных систем и сетей БГУИР.',
        'Параллельно с учёбой верстал промо-лендинги для университетских олимпиад по программированию — подробнее о каждой ниже.',
        'Опубликовал два доклада на студенческих научных конференциях БГУИР: про фишинг как угрозу социальной инженерии (2024) и про методы исследования психоэмоционального состояния и гармонии личности (2025, в соавторстве с научным руководителем Д. А. Мозалевской).',
      ],
      en: [
        'Studying at the Faculty of Computer Systems and Networks at BSUIR.',
        'Alongside my studies I built promo landing pages for the university’s programming olympiads — more on each below.',
        'Published two papers at BSUIR student research conferences: on phishing as a social engineering threat (2024) and on methods for studying psycho-emotional state and personal harmony (2025, with academic advisor D. A. Mozalevskaya).',
      ],
    },
    links: [
      {
        href: 'https://libeldoc.bsuir.by/handle/123456789/56693',
        label: { ru: 'Phishing in social engineering, 2024', en: 'Phishing in social engineering, 2024' },
      },
      {
        href: 'https://libeldoc.bsuir.by/handle/123456789/60326',
        label: {
          ru: 'Методы исследования психоэмоционального состояния, 2025',
          en: 'Methods for studying psycho-emotional state, 2025',
        },
      },
    ],
    tags: [],
  },
]

export function getExperience(slug: string): ExperienceEntry | undefined {
  return experience.find((entry) => entry.slug === slug)
}
