"use client"

import React from "react"
import { motion } from "framer-motion"
import { TitleSection } from "../../TitleSection"

interface SkillProps {
  name: string
  isHighlighted?: boolean
}

const Skill: React.FC<SkillProps> = ({
  name,
  isHighlighted = false,
}) => (
  <motion.div
    className={`mb-3 ${isHighlighted ? "order-first" : ""}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className={`p-4 rounded-xl border transition-all duration-300 
      ${isHighlighted 
        ? "text-white bg-gradient-to-r from-indigo-600 to-violet-500 border-transparent shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30" 
        : "bg-white border-gray-100 hover:border-indigo-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-900"}`}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: isHighlighted ? "0 10px 25px -5px rgba(99, 102, 241, 0.3)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-medium ${
            isHighlighted ? "text-white" : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {name}
        </span>
        {isHighlighted && (
          <motion.span
            className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-white/90 rounded-full shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Expert
          </motion.span>
        )}
      </div>
    </motion.div>
  </motion.div>
)

interface SkillCategoryProps {
  title: string
  skills: SkillProps[]
  index: number
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  index,
}) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <div className="grid grid-cols-1 gap-2">
      {skills.map((skill, skillIndex) => (
        <Skill key={skillIndex} {...skill} />
      ))}
    </div>
  </motion.div>
)

const Skills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Web Développement",
      skills: [
        { name: "Next.js", isHighlighted: true },
        { name: "Node Js" },
        { name: "Django" },
        { name: "Laravel" },
      ],
      index: 0,
    },
    {
      title: "Web Scraping",
      skills: [
        { name: "Selenium", isHighlighted: true },
        { name: "BeautifulSoup" },
        { name: "PlayWright" },
      ],
      index: 1,
    },
    {
      title: "Automation",
      skills: [
        { name: "Make", isHighlighted: true },
        { name: "n8n" },
      ],
      index: 2,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <TitleSection title="Compétences" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que j&apos;utilise pour créer des applications modernes et performantes.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <SkillCategory {...category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills