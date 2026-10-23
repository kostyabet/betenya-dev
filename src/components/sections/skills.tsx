import type { ReactNode } from 'react'
import {
  BadgeDollarSign,
  Boxes,
  Cable,
  Cloud,
  Code,
  Container,
  Cpu,
  Database,
  Globe,
  LayoutGrid,
  Network,
  PawPrint,
  Server,
  Terminal,
  TrendingUp,
  Watch,
  Zap,
} from 'lucide-react'
import type { SimpleIcon } from 'simple-icons'
import {
  siAntdesign,
  siClaude,
  siCloudflareworkers,
  siCss,
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
import type { SkillItem } from '@/content/types'
import { skillUsages } from '@/lib/skill-usage'
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
 * понятий (SQL, LMDB, ASO…) подобраны смысловые из lucide. Ключ — точное
 * `name` из src/content/skills.ts.
 */
const ICONS: Record<string, ReactNode> = {
  TypeScript: <Brand icon={siTypescript} />,
  JavaScript: <Brand icon={siJavascript} />,
  SQL: <Database {...lucideProps} />,
  Rust: <Brand icon={siRust} />,
  'Assembly (FASM)': <Cpu {...lucideProps} />,
  Delphi: <Code {...lucideProps} />,
  React: <Brand icon={siReact} />,
  'Next.js': <Brand icon={siNextdotjs} />,
  'Redux Toolkit': <Brand icon={siRedux} />,
  Zustand: <PawPrint {...lucideProps} />,
  'Tailwind CSS': <Brand icon={siTailwindcss} />,
  'Ant Design': <Brand icon={siAntdesign} />,
  MUI: <Brand icon={siMui} />,
  CSS: <Brand icon={siCss} />,
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
  LMDB: <Database {...lucideProps} />,
  WebSocket: <Cable {...lucideProps} />,
  TCP: <Network {...lucideProps} />,
  'Kademlia DHT': <Network {...lucideProps} />,
  MessagePack: <Boxes {...lucideProps} />,
  tokio: <Zap {...lucideProps} />,
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
  'VS Code API': <Code {...lucideProps} />,
  'RAD Studio': <Code {...lucideProps} />,
  'MS-DOS': <Terminal {...lucideProps} />,
  'Claude Code': <Brand icon={siClaude} />,
}

function SkillRow({ item, locale }: { item: SkillItem; locale: Locale }) {
  const usages = skillUsages(item, locale)
  return (
    <li className="flex items-start gap-2">
      <span className="text-faint mt-1 shrink-0">{ICONS[item.name]}</span>
      <span className="flex-1">
        {item.name}
        {item.learning && (
          <span className="text-accent ms-2 font-mono text-xs">{ui.skills.learning[locale]}</span>
        )}
      </span>
      {usages.length > 0 && (
        <span className="group relative mt-0.5 shrink-0">
          <span
            tabIndex={0}
            className="border-glass-line text-faint hover:text-fg focus-visible:text-fg inline-flex min-w-5 cursor-default items-center justify-center rounded-full border px-1.5 font-mono text-xs transition-colors"
          >
            {usages.length}
          </span>
          <span
            role="tooltip"
            className="glass border-glass-line pointer-events-none absolute right-0 bottom-full z-20 mb-2 w-max max-w-56 rounded-lg border p-2.5 text-left opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <span className="text-faint mb-1.5 block font-mono text-[11px]">
              {ui.skills.usedIn[locale]}
            </span>
            <span className="flex flex-col gap-1">
              {usages.map((u) => (
                <span
                  key={`${u.kind}-${u.label}`}
                  className="text-muted flex items-center gap-1.5 text-xs"
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${u.kind === 'work' ? 'bg-accent' : 'bg-faint'}`}
                  />
                  {u.label}
                </span>
              ))}
            </span>
          </span>
        </span>
      )}
    </li>
  )
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
                <SkillRow key={item.name} item={item} locale={locale} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
