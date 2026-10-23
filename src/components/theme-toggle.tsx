'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type Theme = 'system' | 'light' | 'dark'

const ORDER: Theme[] = ['system', 'light', 'dark']

/*
 * Выбор темы хранится в localStorage и читается через useSyncExternalStore:
 * на сервере и до гидрации — 'system', после — сохранённое значение.
 */
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot(): Theme {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

function getServerSnapshot(): Theme {
  return 'system'
}

function applyTheme(theme: Theme) {
  const dark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
}

function setStoredTheme(theme: Theme) {
  try {
    if (theme === 'system') localStorage.removeItem('theme')
    else localStorage.setItem('theme', theme)
  } catch {
    // приватный режим — тема просто не сохранится
  }
  applyTheme(theme)
  for (const listener of listeners) listener()
}

export function ThemeToggle({
  labels,
}: {
  labels: { toggle: string; system: string; light: string; dark: string }
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [theme])

  const current = { system: labels.system, light: labels.light, dark: labels.dark }[theme]
  const Icon = { system: Monitor, light: Sun, dark: Moon }[theme]

  return (
    <button
      type="button"
      onClick={() => setStoredTheme(ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length])}
      aria-label={`${labels.toggle}. ${current}`}
      title={current}
      className="text-muted hover:text-fg rounded-md p-2 transition-colors"
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  )
}
