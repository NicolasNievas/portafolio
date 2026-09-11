"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{opacity:0}} whileInView={{opacity:1}}
        transition={{duration:0.4}} viewport={{once:true, margin:"-100px"}}
        className="flex items-center gap-4 mb-6">
        <span className="text-xs tracking-widest uppercase text-neutral-400 font-mono">{t("projects.title")}</span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
        <span className="text-xs text-neutral-300 dark:text-neutral-700 font-mono">{projects.length} total</span>
      </motion.div>

      <motion.div
        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}} viewport={{once:true, margin:"-100px"}}
        className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </motion.div>
    </section>
  )
}