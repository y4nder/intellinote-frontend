import { useEffect } from "react"

interface KeyboardShortcutProps {
  keys: string[]
  callback: () => void
  disabled?: boolean
}

export function KeyboardShortcut({ keys, callback, disabled = false }: KeyboardShortcutProps) {
  useEffect(() => {
    if (disabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const keysPressed = keys.every((key) => {
        if (key === "ctrl" || key === "⌃") return event.ctrlKey
        if (key === "shift" || key === "⇧") return event.shiftKey
        if (key === "alt" || key === "⌥") return event.altKey
        if (key === "meta" || key === "⌘") return event.metaKey
        return event.key.toLowerCase() === key.toLowerCase()
      })

      if (keysPressed) {
        event.preventDefault()
        callback()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [keys, callback, disabled])

  return null
}
