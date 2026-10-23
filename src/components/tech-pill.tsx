import type { ReactNode } from 'react'
import {
  Binary,
  Boxes,
  Cable,
  ChartArea,
  Cloud,
  Code,
  Cpu,
  Database,
  LayoutGrid,
  Network,
  PawPrint,
  Terminal,
  Zap,
} from 'lucide-react'
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

const lucideProps = { size: 13, strokeWidth: 1.8, 'aria-hidden': true } as const

/*
 * Иконка для элемента стека/тега: брендовые — simple-icons, остальные —
 * смысловые из lucide. Ключ — точное значение из `stack`/`tags`
 * (src/content/projects.ts, experience.ts). Для неизвестного — дефолт.
 */
const TECH_ICONS: Record<string, ReactNode> = {
  TypeScript: <Brand icon={siTypescript} />,
  JavaScript: <Brand icon={siJavascript} />,
  React: <Brand icon={siReact} />,
  'React Native': <Brand icon={siReact} />,
  'Next.js': <Brand icon={siNextdotjs} />,
  'Redux Toolkit': <Brand icon={siRedux} />,
  Zustand: <PawPrint {...lucideProps} />,
  'Tailwind CSS': <Brand icon={siTailwindcss} />,
  'Ant Design': <Brand icon={siAntdesign} />,
  MUI: <Brand icon={siMui} />,
  CSS: <Brand icon={siCss} />,
  Expo: <Brand icon={siExpo} />,
  'Expo SDK 54': <Brand icon={siExpo} />,
  'Expo Modules API': <Brand icon={siExpo} />,
  Swift: <Brand icon={siSwift} />,
  WidgetKit: <LayoutGrid {...lucideProps} />,
  'App Intents': <Zap {...lucideProps} />,
  'Node.js': <Brand icon={siNodedotjs} />,
  'Nest.js': <Brand icon={siNestjs} />,
  Express: <Brand icon={siExpress} />,
  TypeORM: <Brand icon={siTypeorm} />,
  WebSocket: <Cable {...lucideProps} />,
  TCP: <Network {...lucideProps} />,
  Recharts: <ChartArea {...lucideProps} />,
  AWS: <Cloud {...lucideProps} />,
  'GitLab CI/CD': <Brand icon={siGitlab} />,
  'Cloudflare Workers': <Brand icon={siCloudflareworkers} />,
  Figma: <Brand icon={siFigma} />,
  Rust: <Brand icon={siRust} />,
  tokio: <Zap {...lucideProps} />,
  'Kademlia DHT': <Network {...lucideProps} />,
  LMDB: <Database {...lucideProps} />,
  MessagePack: <Boxes {...lucideProps} />,
  'VS Code API': <Code {...lucideProps} />,
  FASM: <Binary {...lucideProps} />,
  Assembly: <Cpu {...lucideProps} />,
  'MS-DOS': <Terminal {...lucideProps} />,
  Delphi: <Code {...lucideProps} />,
  'RAD Studio': <Code {...lucideProps} />,
}

function techIcon(name: string): ReactNode {
  return TECH_ICONS[name] ?? <Code {...lucideProps} />
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
