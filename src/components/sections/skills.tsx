import type { ReactNode } from 'react'
import {
  Cloud,
  Code,
  Cpu,
  CurrencyDollar,
  Database,
  Globe,
  HardDrives,
  Lightning,
  Package,
  PawPrint,
  PlugsConnected,
  ShareNetwork,
  SquaresFour,
  Stack,
  TerminalWindow,
  TrendUp,
  Watch,
} from '@phosphor-icons/react/dist/ssr'
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

const iconProps = { size: 14, weight: 'light', 'aria-hidden': true } as const

/*
 * Иконка для каждого навыка: брендовые — simple-icons, для небрендовых
 * понятий (SQL, LMDB, ASO…) подобраны смысловые из Phosphor. Ключ — точное
 * `name` из src/content/skills.ts.
 */
const ICONS: Record<string, ReactNode> = {
  TypeScript: <Brand icon={siTypescript} />,
  JavaScript: <Brand icon={siJavascript} />,
  SQL: <Database {...iconProps} />,
  Rust: <Brand icon={siRust} />,
  'Assembly (FASM)': <Cpu {...iconProps} />,
  Delphi: <Code {...iconProps} />,
  React: <Brand icon={siReact} />,
  'Next.js': <Brand icon={siNextdotjs} />,
  'Redux Toolkit': <Brand icon={siRedux} />,
  Zustand: <PawPrint {...iconProps} />,
  'Tailwind CSS': <Brand icon={siTailwindcss} />,
  'Ant Design': <Brand icon={siAntdesign} />,
  MUI: <Brand icon={siMui} />,
  CSS: <Brand icon={siCss} />,
  'React Native': <Brand icon={siReact} />,
  Expo: <Brand icon={siExpo} />,
  'Expo Modules (npm packages)': <Brand icon={siNpm} />,
  'Swift / Kotlin native modules': <Brand icon={siSwift} />,
  'WidgetKit, App Intents': <SquaresFour {...iconProps} />,
  'Apple Watch (WatchConnectivity)': <Watch {...iconProps} />,
  'In-App Purchases': <CurrencyDollar {...iconProps} />,
  ASO: <TrendUp {...iconProps} />,
  'Node.js': <Brand icon={siNodedotjs} />,
  'Nest.js': <Brand icon={siNestjs} />,
  Express: <Brand icon={siExpress} />,
  TypeORM: <Brand icon={siTypeorm} />,
  Prisma: <Brand icon={siPrisma} />,
  PostgreSQL: <Brand icon={siPostgresql} />,
  MySQL: <Brand icon={siMysql} />,
  LMDB: <Database {...iconProps} />,
  WebSocket: <PlugsConnected {...iconProps} />,
  TCP: <ShareNetwork {...iconProps} />,
  'Kademlia DHT': <ShareNetwork {...iconProps} />,
  MessagePack: <Stack {...iconProps} />,
  tokio: <Lightning {...iconProps} />,
  Docker: <Brand icon={siDocker} />,
  'Dokploy (self-hosted VPS)': <HardDrives {...iconProps} />,
  'AWS (EC2, ECS, Lambda, S3, DynamoDB)': <Cloud {...iconProps} />,
  'ECR, YCR registries': <Package {...iconProps} />,
  'GitLab CI/CD (self-hosted)': <Brand icon={siGitlab} />,
  'GitHub Actions': <Brand icon={siGithubactions} />,
  'Cloudflare Workers': <Brand icon={siCloudflareworkers} />,
  'AlphaVPS, Vercel, hoster.by': <Globe {...iconProps} />,
  Git: <Brand icon={siGit} />,
  Jira: <Brand icon={siJira} />,
  Figma: <Brand icon={siFigma} />,
  'Xcode, EAS': <Brand icon={siXcode} />,
  'VS Code API': <Code {...iconProps} />,
  'RAD Studio': <Code {...iconProps} />,
  'MS-DOS': <TerminalWindow {...iconProps} />,
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
