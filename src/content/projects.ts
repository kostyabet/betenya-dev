import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'unitime',
    name: 'UniTime',
    accent: 'gold',
    status: 'in-dev',
    tagline: {
      ru: 'Расписание вуза, которому можно верить',
      en: 'A university schedule you can trust',
    },
    description: {
      ru: [
        'UniTime — платформа расписаний сразу для нескольких университетов, выросшая из Bsuir Time. Идея та же: расписание, которое ощущается нативным приложением, а не обёрткой над сайтом деканата, — но теперь для любого подключённого вуза.',
        'Проект в активной разработке: проектирую систему так, чтобы добавление нового университета было вопросом адаптера к его API, а не отдельного приложения.',
        // TODO: уточнить список первых поддерживаемых вузов и сроки релиза.
      ],
      en: [
        'UniTime is a schedule platform for multiple universities at once, grown out of Bsuir Time. The idea is the same: a schedule that feels like a native app rather than a wrapper around the dean’s office website — but now for any connected university.',
        'The project is in active development: the system is designed so that adding a new university is a matter of writing an adapter for its API, not building a separate app.',
        // TODO: confirm the list of initially supported universities and release dates.
      ],
    },
    stack: ['React Native', 'Expo', 'TypeScript'],
    links: [
      {
        kind: 'site',
        label: { ru: 'unitimes.app', en: 'unitimes.app' },
        href: 'https://unitimes.app',
      },
      {
        kind: 'telegram',
        label: { ru: 'Канал разработки', en: 'Dev channel' },
        href: 'https://t.me/multibelbet',
      },
    ],
  },
  {
    slug: 'bsuir-time',
    name: 'Bsuir Time',
    accent: 'blue',
    status: 'released',
    tagline: {
      ru: 'Расписание БГУИР, которое ощущается нативным',
      en: 'A BSUIR class schedule that feels native',
    },
    description: {
      ru: [
        'Расписание занятий БГУИР с честной поддержкой 4-недельного цикла, автоскроллом к текущей паре, экзаменами и объявлениями. Поиск устойчив к опечаткам, группы и преподаватели закрепляются и обновляются в фоне.',
        'Главное в проекте — нативность: виджеты на WidgetKit (включая Lock Screen) и Glance, приложение для Apple Watch через WatchConnectivity, синхронизация в iCloud и Google Drive, настоящие вкладки UITabBarController и Liquid Glass на iOS 26+.',
        'Сверху — дневник с планировщиком, стрики с заморозками, занятость аудиторий через self-hosted Cloudflare Worker, 24 альтернативные иконки, три языка и режимы доступности.',
      ],
      en: [
        'A BSUIR class schedule with proper support for the 4-week cycle, auto-scroll to the current lesson, exams and announcements. Search is typo-tolerant; pinned groups and lecturers are prefetched in the background.',
        'What matters most here is the native feel: WidgetKit widgets (including Lock Screen) and Glance on Android, an Apple Watch app via WatchConnectivity, iCloud and Google Drive sync, real UITabBarController tabs and Liquid Glass on iOS 26+.',
        'On top of that — a diary with a planner, streaks with freezes, room free/busy status via a self-hosted Cloudflare Worker, 24 alternative app icons, three languages and accessibility modes.',
      ],
    },
    highlights: {
      ru: [
        'Виджеты на iOS и Android с deep links в приложение',
        'Приложение для Apple Watch с фолбэком на прямой API',
        'Облачная синхронизация: iCloud на iOS, Google Drive на Android',
        'Занятость аудиторий в реальном времени через Cloudflare Worker',
      ],
      en: [
        'iOS and Android widgets with deep links into the app',
        'An Apple Watch app with a direct-API fallback',
        'Cloud sync: iCloud on iOS, Google Drive on Android',
        'Real-time room availability via a Cloudflare Worker',
      ],
    },
    stack: ['Expo SDK 54', 'React Native', 'TypeScript', 'WidgetKit', 'Cloudflare Workers'],
    links: [
      {
        kind: 'appstore',
        label: { ru: 'App Store', en: 'App Store' },
        href: 'https://apps.apple.com/by/app/bsuir-time/id6762343557',
      },
      {
        kind: 'googleplay',
        label: { ru: 'Google Play', en: 'Google Play' },
        href: 'https://play.google.com/store/apps/details?id=by.vazon.bsuirtime',
      },
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/vazonhub/bsuir-schedule',
      },
    ],
  },
  {
    slug: 'centry',
    name: 'Centry',
    accent: 'emerald',
    status: 'released',
    tagline: {
      ru: 'Мультивалютный финансовый трекер: офлайн, ввод за 4 секунды',
      en: 'A multi-currency finance tracker: offline, 4-second entry',
    },
    description: {
      ru: [
        'Centry — личный финансовый трекер для iOS, сделанный для тех, у кого деньги в разных валютах и частично наличными. Работает полностью офлайн, без сервера и регистрации.',
        'Принципы зашиты жёстко: деньги хранятся только в целых минорных единицах, курс фиксируется на момент транзакции, ввод траты занимает не больше четырёх секунд, и до первой траты нет ни одного настроечного экрана.',
        'Второе приложение студии Vazon: стек и дизайн-система унаследованы от Bsuir Time — Expo, строгий TypeScript, виджеты через WidgetKit и App Intents.',
      ],
      en: [
        'Centry is a personal finance tracker for iOS built for people whose money lives in several currencies, partly in cash. It works fully offline — no server, no sign-up.',
        'Its principles are non-negotiable: money is stored only in integer minor units, the exchange rate is fixed at transaction time, logging an expense takes four seconds at most, and there are zero settings screens before the first expense.',
        'The second app of the Vazon studio: the stack and design system are inherited from Bsuir Time — Expo, strict TypeScript, widgets via WidgetKit and App Intents.',
      ],
    },
    stack: ['Expo', 'React Native', 'TypeScript', 'WidgetKit', 'App Intents'],
    links: [
      {
        kind: 'appstore',
        label: { ru: 'App Store', en: 'App Store' },
        href: 'https://apps.apple.com/by/app/centry-expense-tracker/id6803400593',
      },
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/vazonhub/centry-wallet',
      },
      {
        kind: 'site',
        label: { ru: 'Лендинг', en: 'Landing page' },
        href: 'https://kostyabet.github.io/centry/',
      },
    ],
  },
  {
    slug: 'tactics-game-fasm',
    name: 'TacticsGame',
    accent: 'red',
    status: 'done',
    tagline: {
      ru: 'Тактическая настолка, написанная на чистом FASM',
      en: 'A tactics board game written in pure FASM',
    },
    description: {
      ru: [
        'Небольшая пошаговая тактическая игра в советском сеттинге, написанная целиком на FlatASM. Без движков, без фреймворков — только ассемблер и желание понять, как всё работает на самом низком уровне.',
        'Самый залайканный проект на моём GitHub: оказалось, игры на ассемблере в 2025-м всё ещё кого-то радуют.',
      ],
      en: [
        'A small turn-based tactics game in a Soviet setting, written entirely in FlatASM. No engines, no frameworks — just assembly and the urge to understand how things work at the lowest level.',
        'The most starred project on my GitHub: turns out assembly games still make people happy in 2025.',
      ],
    },
    stack: ['FASM', 'Assembly'],
    links: [
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kostyabet/TacticsGame-fasm',
      },
    ],
  },
  {
    slug: 'vscode-fasm-ext',
    name: 'FASM Ext for VS Code',
    status: 'done',
    tagline: {
      ru: 'Расширение VS Code для FlatASM: подсветка, сборка, отладка',
      en: 'A VS Code extension for FlatASM: highlighting, build, debug',
    },
    description: {
      ru: [
        'Расширение для VS Code, которое делает разработку на FlatASM человечной: подсветка инструкций, регистров и макросов, сборка и запуск по F5, подключение отладчика OllyDbg.',
        'Родилось из собственной боли во время FASM-проектов — и пригодилось не только мне.',
      ],
      en: [
        'A VS Code extension that makes FlatASM development humane: highlighting for instructions, registers and macros, build-and-run on F5, OllyDbg debugger integration.',
        'Born from my own pain during FASM projects — and turned out useful to others too.',
      ],
    },
    stack: ['TypeScript', 'VS Code API'],
    links: [
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kostyabet/VSCode-FASM-ext',
      },
    ],
  },
  {
    slug: 'expo-native-modules',
    name: 'Expo native modules',
    status: 'released',
    tagline: {
      ru: 'Три open-source модуля для нативных фич в React Native / Expo',
      en: 'Three open-source modules for native features in React Native / Expo',
    },
    description: {
      ru: [
        'Пакет библиотек, выросших из работы над Bsuir Time и Centry, — нативные возможности, которых не хватало в стандартном Expo:',
        'expo-accessibility-plus — системные флаги доступности, которые не отдаёт стандартный AccessibilityInfo: differentiate-without-color, reduce transparency, bold text, invert colors, content size category.',
        'expo-icloud-kv — key/value-хранилище на NSUbiquitousKeyValueStore: синхронизация небольших кусочков состояния между Apple-устройствами пользователя с Promise-based API.',
        'expo-widgetkit-bridge — перезагрузка виджетов iOS из React Native: мост в одну строку к reloadAllTimelines и reloadTimelines(ofKind:).',
      ],
      en: [
        'A set of libraries that grew out of Bsuir Time and Centry — native capabilities missing from stock Expo:',
        'expo-accessibility-plus — system accessibility flags that stock AccessibilityInfo does not expose: differentiate-without-color, reduce transparency, bold text, invert colors, content size category.',
        'expo-icloud-kv — a key/value store backed by NSUbiquitousKeyValueStore: sync small pieces of app state across a user’s Apple devices with a Promise-based API.',
        'expo-widgetkit-bridge — reload iOS widgets from React Native: a one-call bridge to reloadAllTimelines and reloadTimelines(ofKind:).',
      ],
    },
    stack: ['TypeScript', 'Swift', 'Expo Modules API'],
    links: [
      {
        kind: 'github',
        label: { ru: 'expo-accessibility-plus', en: 'expo-accessibility-plus' },
        href: 'https://github.com/kostyabet/expo-accessibility-plus',
      },
      {
        kind: 'github',
        label: { ru: 'expo-icloud-kv', en: 'expo-icloud-kv' },
        href: 'https://github.com/kostyabet/expo-icloud-kv',
      },
      {
        kind: 'github',
        label: { ru: 'expo-widgetkit-bridge', en: 'expo-widgetkit-bridge' },
        href: 'https://github.com/kostyabet/expo-widgetkit-bridge',
      },
    ],
  },
  {
    slug: 'news',
    name: 'News',
    status: 'in-dev',
    tagline: {
      ru: 'Пет-проект: новостная платформа в монорепе — mobile, web, API',
      en: 'Pet project: a news platform in a monorepo — mobile, web, API',
    },
    description: {
      ru: [
        'Монорепозиторий новостной платформы: мобильное приложение, веб-клиент и backend REST API на TypeScript. Полигон для обкатки полного цикла продукта — от схемы данных до публикации.',
        // TODO: уточнить текущий статус и планы по проекту.
      ],
      en: [
        'A news platform monorepo: a mobile app, a web client and a backend REST API in TypeScript. A playground for the full product cycle — from data schema to publishing.',
        // TODO: clarify the current status and plans.
      ],
    },
    stack: ['TypeScript', 'React Native', 'Node.js'],
    links: [
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kostyabet/news-monorepo',
      },
    ],
  },
  {
    slug: 'crm-system',
    name: 'CRM System',
    status: 'done',
    tagline: {
      ru: 'Универсальная CRM для управления задачами',
      en: 'A universal CRM for task management',
    },
    description: {
      ru: [
        'Универсальная CRM-система для ведения и мониторинга задач. Написана на JavaScript и React, выросла из опыта разработки внутренней CRM в Blackout Studio.',
        // TODO: пара слов о фичах и скриншоты.
      ],
      en: [
        'A universal CRM for managing and monitoring tasks. Written in JavaScript and React; it grew out of building Blackout Studio’s internal CRM.',
        // TODO: a few words about features plus screenshots.
      ],
    },
    stack: ['JavaScript', 'React'],
    links: [
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kostyabet/CRM-system',
      },
    ],
  },
  {
    slug: '15puzzle-fasm',
    name: '15 Puzzle',
    status: 'done',
    tagline: {
      ru: 'Пятнашки на FASM в реальном режиме процессора под MS-DOS',
      en: 'The 15 puzzle in FASM, real mode, MS-DOS',
    },
    description: {
      ru: [
        'Классические пятнашки, написанные на FASM в реальном режиме процессора под MS-DOS. Никакой ОС-прослойки: прямая работа с видеопамятью и прерываниями.',
      ],
      en: [
        'The classic 15 puzzle written in FASM in real processor mode for MS-DOS. No OS layer: direct work with video memory and interrupts.',
      ],
    },
    stack: ['FASM', 'Assembly', 'MS-DOS'],
    links: [
      {
        kind: 'github',
        label: { ru: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kostyabet/15PUZZLE-fasm',
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
