"use client"
import { createContext, useContext, useEffect, useState } from "react"
import es from "@/messages/es.json"
import en from "@/messages/en.json"

type Lang = "es" | "en"
type Messages = typeof es
const messages: Record<Lang, Messages> = { es, en }

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (path: string) => string
}
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    // Sync with the visitor's saved preference after mount (client-only storage,
    // intentionally not read during the initial render to avoid a hydration mismatch).
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "es" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path: string): string => {
    const keys = path.split(".")
    let val: unknown = messages[lang]
    for (const k of keys) {
      if (val && typeof val === "object" && k in val) {
        val = (val as Record<string, unknown>)[k]
      } else {
        val = undefined
        break
      }
    }
    return typeof val === "string" ? val : path
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useTranslation must be used within a LanguageProvider")
  return ctx
}