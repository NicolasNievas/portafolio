"use client"
import { useTranslation } from "@/context/LanguageProvider"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { lang, setLang, t } = useTranslation()
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Sync with the visitor's saved theme after mount (client-only storage,
    // intentionally not read during the initial render to avoid a hydration mismatch).
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDark(true)
    }
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <nav className={`sticky top-0 z-50 flex justify-between items-center py-5 border-b border-neutral-200 dark:border-neutral-800 bg-[#EEEAE3]/80 dark:bg-neutral-950/80 backdrop-blur-sm transition-all ${scrolled ? "shadow-sm" : ""}`}>
      <span className="font-serif text-xl tracking-tight">NN</span>
      <div className="flex gap-5 items-center">
        {["experience","projects","skills","contact"].map(s => (
          <a key={s} href={`#${s}`} className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-stone-100 tracking-widest uppercase transition-colors">
            {t(`nav.${s}`)}
          </a>
        ))}
        <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700" />
        <button onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="text-xs border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-md hover:border-neutral-400 transition-colors font-mono">
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button onClick={toggleTheme}
          className="text-xs border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-md hover:border-neutral-400 transition-colors font-mono">
          {dark ? "☀ claro" : "◐ oscuro"}
        </button>
      </div>
    </nav>
  )
}