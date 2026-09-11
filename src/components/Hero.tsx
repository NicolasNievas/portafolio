"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"

export default function Hero() {
  const { t, lang } = useTranslation()
  const cvHref = lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"
  const cvFilename = lang === "es" ? "CV-Nicolas-Nievas-ES.pdf" : "CV-Nicolas-Nievas-EN.pdf"
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-10">
      
      {/* Línea decorativa superior */}
      <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.8, ease:"easeOut"}}
        className="w-16 h-px bg-neutral-400 dark:bg-neutral-500 mb-10 origin-left" />

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}
        className="text-xs tracking-widest uppercase text-neutral-400 mb-6 font-mono">
        {t("hero.eyebrow")}
      </motion.p>

      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3, duration:0.6}}
        className="font-serif text-6xl md:text-7xl leading-[1.05] tracking-tight mb-5 max-w-3xl">
        Backend<br/>
        <span className="text-neutral-400 italic">Developer</span><br/>
        <span className="text-neutral-400 dark:text-neutral-400 text-5xl md:text-6xl">& Fullstack</span>
      </motion.h1>

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}}
        className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed mb-10 font-mono">
        {t("hero.subtitle")}
      </motion.p>

      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.55}}
        className="flex gap-3 mb-16">
        <a href="#projects"
          className="text-xs bg-neutral-900 dark:bg-stone-100 text-stone-50 dark:text-neutral-900 px-6 py-3 rounded-lg tracking-widest uppercase hover:opacity-80 transition-opacity font-mono">
          {t("hero.cta_projects")}
        </a>
        <a href="#contact"
          className="text-xs border border-neutral-300 dark:border-neutral-700 px-6 py-3 rounded-lg tracking-widest uppercase hover:border-neutral-600 dark:hover:border-neutral-400 transition-colors font-mono">
          {t("hero.cta_contact")}
        </a>
        <a href={cvHref} download={cvFilename}
          className="text-xs border border-neutral-300 dark:border-neutral-700 px-6 py-3 rounded-lg tracking-widest uppercase hover:border-neutral-600 dark:hover:border-neutral-400 transition-colors font-mono">
          ↓ {t("hero.cta_cv")}
        </a>
      </motion.div>
 
    </section>
  )
}