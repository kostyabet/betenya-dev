import type { ReactNode } from 'react'
import {
  BadgeDollarSign,
  Cable,
  ChartArea,
  ChartColumn,
  Cloud,
  Container,
  Cpu,
  Database,
  Globe,
  LayoutGrid,
  PawPrint,
  Server,
  TrendingUp,
  Warehouse,
  Watch,
} from 'lucide-react'
import type { SimpleIcon } from 'simple-icons'
import {
  siAntdesign,
  siClaude,
  siCloudflareworkers,
  siDocker,
  siExpo,
  siExpress,
  siFigma,
  siGit,
  siGithubactions,
  siGitlab,
  siJavascript,
  siJira,
  siMui,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siPostgresql,
  siPrisma,
  siReact,
  siRedux,
  siRust,
  siSwift,
  siTailwindcss,
  siTypeorm,
  siTypescript,
  siXcode,
} from 'simple-icons'
import type { Locale } from '@/lib/i18n'
import { skills } from '@/content/skills'
import { ui } from '@/content/ui'
import { Section } from '@/components/section'

function Brand({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

const lucideProps = { size: 14, strokeWidth: 1.8, 'aria-hidden': true } as const

/*
 * Иконка для каждого навыка: брендовые — simple-icons, для небрендовых
 * понятий (SQL, DWH, ASO…) подобраны смысловые из lucide. Ключ — точное
 * `name` из src/content/skills.ts.
 */
const ICONS: Record<string, ReactNode> = {
  TypeScript: <Brand icon={siTypescript} />,
  JavaScript: <Brand icon={siJavascript} />,
  SQL: <Database {...lucideProps} />,
  Rust: <Brand icon={siRust} />,
  'Assembly (FASM)': <Cpu {...lucideProps} />,
  React: <Brand icon={siReact} />,
  'Next.js': <Brand icon={siNextdotjs} />,
  'Redux Toolkit': <Brand icon={siRedux} />,
  Zustand: <PawPrint {...lucideProps} />,
  'Tailwind CSS': <Brand icon={siTailwindcss} />,
  'Ant Design': <Brand icon={siAntdesign} />,
  MUI: <Brand icon={siMui} />,
  'React Native': <Brand icon={siReact} />,
  Expo: <Brand icon={siExpo} />,
  'Expo Modules (npm packages)': <Brand icon={siNpm} />,
  'Swift / Kotlin native modules': <Brand icon={siSwift} />,
  'WidgetKit, App Intents': <LayoutGrid {...lucideProps} />,
  'Apple Watch (WatchConnectivity)': <Watch {...lucideProps} />,
  'In-App Purchases': <BadgeDollarSign {...lucideProps} />,
  ASO: <TrendingUp {...lucideProps} />,
  'Node.js': <Brand icon={siNodedotjs} />,
  'Nest.js': <Brand icon={siNestjs} />,
  Express: <Brand icon={siExpress} />,
  TypeORM: <Brand icon={siTypeorm} />,
  Prisma: <Brand icon={siPrisma} />,
  PostgreSQL: <Brand icon={siPostgresql} />,
  MySQL: <Brand icon={siMysql} />,
  WebSocket: <Cable {...lucideProps} />,
  DWH: <Warehouse {...lucideProps} />,
  'SQL analytics': <ChartColumn {...lucideProps} />,
  Recharts: <ChartArea {...lucideProps} />,
  Docker: <Brand icon={siDocker} />,
  'Dokploy (self-hosted VPS)': <Server {...lucideProps} />,
  'AWS (EC2, ECS, Lambda, S3, DynamoDB)': <Cloud {...lucideProps} />,
  'ECR, YCR registries': <Container {...lucideProps} />,
  'GitLab CI/CD (self-hosted)': <Brand icon={siGitlab} />,
  'GitHub Actions': <Brand icon={siGithubactions} />,
  'Cloudflare Workers': <Brand icon={siCloudflareworkers} />,
  'AlphaVPS, Vercel, hoster.by': <Globe {...lucideProps} />,
  Git: <Brand icon={siGit} />,
  Jira: <Brand icon={siJira} />,
  Figma: <Brand icon={siFigma} />,
  'Xcode, EAS': <Brand icon={siXcode} />,
  'Claude Code': <Brand icon={siClaude} />,
}

export function Skills({ locale }: { locale: Locale }) {
  return (
    <Section id="skills" title={ui.sections.skills[locale]}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <div key={category.title.en}>
            <h3 className="text-fg mb-3 font-medium">{category.title[locale]}</h3>
            <ul className="text-muted space-y-1.5 text-sm leading-relaxed">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-start gap-2">
                  <span className="text-faint mt-1 shrink-0">{ICONS[item.name]}</span>
                  <span>
                    {item.name}
                    {item.learning && (
                      <span className="text-accent ms-2 font-mono text-xs">
                        {ui.skills.learning[locale]}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
