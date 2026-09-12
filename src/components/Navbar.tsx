"use client"
import { useTranslation } from "@/context/LanguageProvider"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { lang, setLang, t } = useTranslation()
  // Default theme is dark; the inline script in layout.tsx already applied
  // the "dark" class before hydration, so this initial value matches what's
  // on screen for both server and client (no mismatch).
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Sync with the visitor's saved theme after mount (client-only storage,
    // intentionally not read during the initial render to avoid a hydration mismatch).
    const saved = localStorage.getItem("theme")
    const isDark = saved ? saved === "dark" : true
    document.documentElement.classList.toggle("dark", isDark)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(isDark)
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

  const navLinks = ["experience","projects","skills","contact"]

  return (
    <nav className={`sticky top-0 z-50 py-5 border-b border-neutral-200 dark:border-neutral-800 bg-[#EEEAE3]/80 dark:bg-neutral-950/80 backdrop-blur-sm transition-all ${scrolled ? "shadow-sm" : ""}`}>
      <div className="flex justify-between items-center">
        <span className="font-serif text-xl tracking-tight">NN</span>

        {/* Desktop: fila completa */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map(s => (
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

        {/* Mobile: hamburguesa */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="md:hidden text-lg leading-none w-9 h-9 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-md">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Panel mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-5 pb-1">
          {navLinks.map(s => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}
              className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-stone-100 tracking-widest uppercase transition-colors">
              {t(`nav.${s}`)}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-md hover:border-neutral-400 transition-colors font-mono">
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button onClick={toggleTheme}
              className="text-xs border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-md hover:border-neutral-400 transition-colors font-mono">
              {dark ? "☀ claro" : "◐ oscuro"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}