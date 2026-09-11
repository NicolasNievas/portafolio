"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-20">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="card border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-10 dark:bg-neutral-900/50 text-center">
        
        <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto mb-8" />
        
        <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("contact.title")}</h2>
        <p className="text-sm text-neutral-500 font-mono mb-10">{t("contact.subtitle")}</p>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:nicoonievas7@gmail.com"
            className="text-xs bg-neutral-900 dark:bg-stone-100 text-stone-50 dark:text-neutral-900 px-6 py-3 rounded-lg tracking-widest uppercase hover:opacity-80 transition-opacity font-mono">
            → email
          </a>
          <a href="https://github.com/NicolasNievas" target="_blank" rel="noopener noreferrer"
            className="text-xs border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-lg tracking-widest uppercase hover:border-neutral-500 transition-colors font-mono">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nievas-nicolas/" target="_blank" rel="noopener noreferrer"
            className="text-xs border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-lg tracking-widest uppercase hover:border-neutral-500 transition-colors font-mono">
            LinkedIn
          </a>
        </div>

        <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto mt-8" />
      </motion.div>
    </section>
  )
}