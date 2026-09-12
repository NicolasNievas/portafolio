"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useTranslation()
  return (
    <motion.div whileHover={{y:-4}} transition={{duration:0.2}}
      className="group card border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors dark:bg-neutral-900/50">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-serif text-xl">{project.title}</h3>
        <div className="flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-stone-100 font-mono transition-colors">demo ↗</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-stone-100 font-mono transition-colors">repo ↗</a>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-mono">{project.description[lang]}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span key={s} className="text-[10px] px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 font-mono tracking-wide">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}