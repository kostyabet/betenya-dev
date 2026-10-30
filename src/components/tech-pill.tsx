import type { ReactNode } from 'react'
import {
  Binary,
  ChartLine,
  Cloud,
  Code,
  Cpu,
  Database,
  Lightning,
  PawPrint,
  PlugsConnected,
  ShareNetwork,
  SquaresFour,
  Stack,
  TerminalWindow,
} from '@phosphor-icons/react/dist/ssr'
import type { SimpleIcon } from 'simple-icons'
import {
  siAntdesign,
  siCloudflareworkers,
  siCss,
  siExpo,
  siExpress,
  siFigma,
  siGitlab,
  siJavascript,
  siMui,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRedux,
  siRust,
  siSwift,
  siTailwindcss,
  siTypeorm,
  siTypescript,
} from 'simple-icons'

function Brand({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

const iconProps = { size: 13, weight: 'light', 'aria-hidden': true } as const

/*
 * Иконка для элемента стека/тега: брендовые — simple-icons, остальные —
 * смысловые из Phosphor. Ключ — точное значение из `stack`/`tags`
 * (src/content/projects.ts, experience.ts). Для неизвестного — дефолт.
 */
const TECH_ICONS: Record<string, ReactNode> = {
  TypeScript: <Brand icon={siTypescript} />,
  JavaScript: <Brand icon={siJavascript} />,
  React: <Brand icon={siReact} />,
  'React Native': <Brand icon={siReact} />,
  'Next.js': <Brand icon={siNextdotjs} />,
  'Redux Toolkit': <Brand icon={siRedux} />,
  Zustand: <PawPrint {...iconProps} />,
  'Tailwind CSS': <Brand icon={siTailwindcss} />,
  'Ant Design': <Brand icon={siAntdesign} />,
  MUI: <Brand icon={siMui} />,
  CSS: <Brand icon={siCss} />,
  Expo: <Brand icon={siExpo} />,
  'Expo SDK 54': <Brand icon={siExpo} />,
  'Expo Modules API': <Brand icon={siExpo} />,
  Swift: <Brand icon={siSwift} />,
  WidgetKit: <SquaresFour {...iconProps} />,
  'App Intents': <Lightning {...iconProps} />,
  'Node.js': <Brand icon={siNodedotjs} />,
  'Nest.js': <Brand icon={siNestjs} />,
  Express: <Brand icon={siExpress} />,
  TypeORM: <Brand icon={siTypeorm} />,
  WebSocket: <PlugsConnected {...iconProps} />,
  TCP: <ShareNetwork {...iconProps} />,
  Recharts: <ChartLine {...iconProps} />,
  AWS: <Cloud {...iconProps} />,
  'GitLab CI/CD': <Brand icon={siGitlab} />,
  'Cloudflare Workers': <Brand icon={siCloudflareworkers} />,
  Figma: <Brand icon={siFigma} />,
  Rust: <Brand icon={siRust} />,
  tokio: <Lightning {...iconProps} />,
  'Kademlia DHT': <ShareNetwork {...iconProps} />,
  LMDB: <Database {...iconProps} />,
  MessagePack: <Stack {...iconProps} />,
  'VS Code API': <Code {...iconProps} />,
  FASM: <Binary {...iconProps} />,
  Assembly: <Cpu {...iconProps} />,
  'MS-DOS': <TerminalWindow {...iconProps} />,
  Delphi: <Code {...iconProps} />,
  'RAD Studio': <Code {...iconProps} />,
}

function techIcon(name: string): ReactNode {
  return TECH_ICONS[name] ?? <Code {...iconProps} />
}

/** Список элементов стека в виде «таблеток»: слева иконка, справа название. */
export function TechPills({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ''}`}>
      {items.map((item) => (
        <li
          key={item}
          className="glass border-glass-line text-muted inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
        >
          <span className="text-faint shrink-0">{techIcon(item)}</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
