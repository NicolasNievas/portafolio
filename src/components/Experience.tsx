"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"
import { experience } from "@/data/projects"

export default function Experience() {
  const { lang } = useTranslation()
  const typedLang = lang as "es" | "en"
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{opacity:0}} whileInView={{opacity:1}}
        transition={{duration:0.4}} viewport={{once:true, margin:"-100px"}}
        className="flex items-center gap-4 mb-6">
        <span className="text-xs tracking-widest uppercase text-neutral-400 font-mono">
          {typedLang === "es" ? "experiencia" : "experience"}
        </span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
      </motion.div>

      <div className="space-y-5">
        {experience.map((exp, i) => (
          <motion.div key={i}
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}}
            transition={{delay:i*0.1, duration:0.5}} viewport={{once:true, margin:"-100px"}}
            className="card border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-6 dark:bg-neutral-900/50">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-5">
              <div>
                <h3 className="font-serif text-xl mb-0.5">{exp.company}</h3>
                <p className="text-sm text-neutral-500 font-mono">{exp.role[typedLang]}</p>
              </div>
              <div className="md:text-right">
                <p className="text-xs font-mono text-neutral-400">{exp.period}</p>
                <p className="text-xs font-mono text-neutral-300 dark:text-neutral-600">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {exp.bullets[typedLang].map((b: string, bi: number) => (
                <li key={bi} className="flex gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  <span className="text-neutral-300 dark:text-neutral-700 mt-0.5">→</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              {exp.stack.map(s => (
                <span key={s} className="text-[10px] px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}