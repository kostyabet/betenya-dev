import type { SkillCategory } from './types'

export const skills: SkillCategory[] = [
  {
    title: { ru: 'Языки', en: 'Languages' },
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Python', learning: true },
      { name: 'Assembly (FASM)' },
    ],
  },
  {
    title: { ru: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Redux Toolkit' },
      { name: 'Zustand' },
      { name: 'Tailwind CSS' },
      { name: 'Ant Design' },
      { name: 'MUI' },
    ],
  },
  {
    title: { ru: 'Mobile', en: 'Mobile' },
    items: [
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'WidgetKit, App Intents' },
      { name: 'Apple Watch (WatchConnectivity)' },
      { name: 'In-App Purchases' },
      { name: 'ASO' },
    ],
  },
  {
    title: { ru: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js' },
      { name: 'Nest.js' },
      { name: 'Express' },
      { name: 'TypeORM' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'WebSocket' },
    ],
  },
  {
    title: { ru: 'Data', en: 'Data' },
    items: [
      { name: 'DWH' },
      { name: 'SQL analytics' },
      { name: 'Recharts' },
      { name: 'pandas', learning: true },
    ],
  },
  {
    title: { ru: 'DevOps', en: 'DevOps' },
    items: [
      { name: 'Docker' },
      { name: 'Dokploy (self-hosted VPS)' },
      { name: 'AWS (EC2, ECS, Lambda, S3, DynamoDB)' },
      { name: 'GitLab CI/CD' },
      { name: 'GitHub Actions' },
      { name: 'Cloudflare Workers' },
    ],
  },
  {
    title: { ru: 'Инструменты', en: 'Tools' },
    items: [
      { name: 'Git' },
      { name: 'Jira' },
      { name: 'Figma' },
      { name: 'Xcode, EAS' },
      { name: 'Claude Code' },
    ],
  },
]
