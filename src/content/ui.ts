import type { Localized } from './types'

/**
 * Словарь интерфейсных строк. Контент разделов живёт в profile.ts,
 * experience.ts, projects.ts и skills.ts — здесь только подписи UI.
 */
export const ui = {
  nav: {
    about: { ru: 'Обо мне', en: 'About' },
    experience: { ru: 'Опыт', en: 'Experience' },
    projects: { ru: 'Проекты', en: 'Projects' },
    skills: { ru: 'Навыки', en: 'Skills' },
    contacts: { ru: 'Контакты', en: 'Contacts' },
  },
  hero: {
    projectsButton: { ru: 'Проекты', en: 'Projects' },
    contactButton: { ru: 'Связаться', en: 'Get in touch' },
  },
  sections: {
    about: { ru: 'Обо мне', en: 'About' },
    experience: { ru: 'Опыт', en: 'Experience' },
    projects: { ru: 'Проекты', en: 'Projects' },
    skills: { ru: 'Навыки', en: 'Skills' },
    contacts: { ru: 'Контакты', en: 'Contacts' },
  },
  experience: {
    present: { ru: 'сейчас', en: 'present' },
    education: { ru: 'учёба', en: 'education' },
    backToTimeline: { ru: 'Весь опыт', en: 'All experience' },
    did: { ru: 'Чем занимался', en: 'What I did' },
  },
  projects: {
    status: {
      released: { ru: 'в продакшене', en: 'released' },
      'in-dev': { ru: 'в разработке', en: 'in development' },
      done: { ru: 'завершён', en: 'completed' },
    },
    flagship: { ru: 'основной проект', en: 'flagship project' },
    stack: { ru: 'Стек', en: 'Stack' },
    links: { ru: 'Ссылки', en: 'Links' },
    highlights: { ru: 'Ключевое', en: 'Highlights' },
    backToList: { ru: 'Все проекты', en: 'All projects' },
    openProject: { ru: 'Открыть проект', en: 'Open project' },
  },
  skills: {
    learning: { ru: 'изучаю', en: 'learning' },
  },
  contacts: {
    note: {
      ru: 'Открыт к интересным проектам и просто хорошим разговорам. Быстрее всего отвечаю в Telegram.',
      en: 'Open to interesting projects and good conversations. Telegram is the fastest way to reach me.',
    },
  },
  footer: {
    building: { ru: 'строю', en: 'building' },
  },
  a11y: {
    mainNav: { ru: 'Основная навигация', en: 'Main navigation' },
    themeToggle: { ru: 'Переключить тему', en: 'Toggle theme' },
    themeLight: { ru: 'Светлая тема', en: 'Light theme' },
    themeDark: { ru: 'Тёмная тема', en: 'Dark theme' },
    themeSystem: { ru: 'Системная тема', en: 'System theme' },
    switchLocale: { ru: 'Switch to English', en: 'Переключить на русский' },
    skipToContent: { ru: 'К содержимому', en: 'Skip to content' },
  },
  notFound: {
    title: { ru: 'Страница не найдена', en: 'Page not found' },
    backHome: { ru: 'На главную', en: 'Back home' },
  },
} satisfies Record<string, Record<string, Localized | Record<string, Localized>>>
