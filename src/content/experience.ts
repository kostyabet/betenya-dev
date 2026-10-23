import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    kind: 'work',
    company: { ru: 'Vazon Hub', en: 'Vazon Hub' },
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
    tags: ['React Native', 'Expo', 'TypeScript', 'Swift', 'WidgetKit'],
  },
  {
    kind: 'work',
    company: { ru: 'Yumasoft', en: 'Yumasoft' },
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
    tags: ['React', 'Nest.js', 'TypeORM', 'AWS', 'GitLab CI/CD', 'Ant Design'],
  },
  {
    kind: 'work',
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
    tags: ['React', 'TypeScript', 'Zustand', 'Recharts', 'Tailwind CSS', 'Ant Design'],
  },
  {
    kind: 'work',
    company: { ru: 'Blackout Studio', en: 'Blackout Studio' },
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
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'WebSocket', 'MUI'],
  },
  {
    kind: 'work',
    company: { ru: 'EmotionIQ', en: 'EmotionIQ' },
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
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Figma'],
  },
  {
    kind: 'education',
    company: { ru: 'БГУИР', en: 'BSUIR' },
    url: 'https://www.bsuir.by',
    role: {
      ru: 'Бакалавриат, Computer Software Engineering',
      en: 'BSc, Computer Software Engineering',
    },
    period: { start: '2023-09', end: '2027-07' },
    bullets: {
      ru: [
        'Факультет компьютерных систем и сетей.',
        'Параллельно верстал сайты для олимпиад университета.',
      ],
      en: [
        'Faculty of Computer Systems and Networks.',
        'Built websites for the university’s programming olympiads along the way.',
      ],
    },
    tags: [],
  },
]
