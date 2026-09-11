"use client"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/LanguageProvider"

const skillData = {
  backend: ["Java 17/21", "Spring Boot", "C# / .NET", "ASP.NET Web API", "REST APIs", "Microservices"],
  frontend: ["React", "Next.js", "Angular", "TypeScript", "JavaScript ES6+", "Tailwind CSS"],
  tools: ["PostgreSQL", "SQL Server", "Oracle", "Docker", "Git / GitHub", "JUnit / Mockito", "Scrum"],
}

export default function Skills() {
  const { t } = useTranslation()
  return (
    <section id="skills" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs tracking-widest uppercase text-neutral-400 font-mono">{t("skills.title")}</span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {(["backend","frontend","tools"] as const).map((cat, ci) => (
          <motion.div key={cat}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
            transition={{delay:ci*0.1}} viewport={{once:true}}
            className="card border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-6 dark:bg-neutral-900/50">
            <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono mb-5">{t(`skills.${cat}`)}</p>
            <div className="space-y-1">
              {skillData[cat].map((s, si) => (
                <div key={s} className="flex items-center gap-3 py-2 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0">
                  <span className="text-[10px] text-neutral-300 dark:text-neutral-700 font-mono">{String(si+1).padStart(2,"0")}</span>
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}