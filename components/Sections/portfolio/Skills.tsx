"use client"

import React from "react"
import { motion } from "framer-motion"
import { TitleSection } from "../../TitleSection"

interface SkillProps {
  name: string
  icon: string
  isColor?: boolean
  isHighlighted?: boolean
}

const Skill: React.FC<SkillProps> = ({
  name,
  icon,
  isColor = false,
  isHighlighted = false,
}) => (
  <motion.div
    className={`mb-4 ${isHighlighted ? "order-first" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className={`flex items-center p-4 space-x-3 rounded-xl border transition-all duration-300 
      ${isHighlighted 
        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 border-transparent shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30" 
        : "bg-white border-gray-100 hover:border-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-900"}`}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: isHighlighted ? "0 10px 25px -5px rgba(59, 130, 246, 0.3)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`relative flex items-center justify-center h-10 w-10 rounded-lg overflow-hidden
        ${!isHighlighted 
          ? "bg-blue-50 dark:bg-gray-700" 
          : "bg-white/20"}`}
      >
        <motion.img
          src={icon}
          alt={`${name} icon`}
          className={`h-6 w-6 ${isColor ? "" : "dark:filter-none"}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      <span
        className={`text-sm font-medium ${
          isHighlighted ? "text-white" : "text-gray-800 dark:text-gray-100"
        }`}
      >
        {name}
      </span>
      {isHighlighted && (
        <motion.span
          className="px-2 py-1 ml-auto text-xs font-semibold text-blue-600 bg-white rounded-full shadow-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          Favoris
        </motion.span>
      )}
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
    className="w-full md:py-6"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="mb-5 text-xl font-bold text-gray-800 dark:text-white flex items-center">
      <span className="inline-block w-8 h-1 mr-3 bg-blue-500 rounded-full dark:bg-blue-400"></span>
      {title}
    </h3>
    <div className="space-y-2">
      {skills.map((skill, skillIndex) => (
        <Skill key={skillIndex} {...skill} />
      ))}
    </div>
  </motion.div>
)

const Skills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Design",
      skills: [
        { name: "Tailwind CSS", icon: "/tailwindcss-icon.svg" },
        { name: "Figma", icon: "/figma-icon.svg", isColor: true },
      ],
      index: 0,
    },
    {
      title: "Front-End",
      skills: [
        { name: "JavaScript", icon: "/js-icon.svg" },
        {
          name: "TypeScript",
          icon: "/typescript-icon.svg",
          isHighlighted: true,
        },
        { name: "React & Next.js", icon: "/react-icon.svg", isColor: true },
      ],
      index: 1,
    },
    {
      title: "Back-End",
      skills: [
        { name: "Python", icon: "/python-icon.svg", isHighlighted: true },
        { name: "Node.js", icon: "/nodejs-icon.svg" },
        { name: "Django", icon: "/django-icon.svg" },
        { name: "PostgreSQL", icon: "/postgresql-icon.svg", isColor: true },
      ],
      index: 2,
    },
    {
      title: "Outils & Déploiement",
      skills: [
        { name: "Git & GitHub", icon: "/github-icon.svg" },
        { name: "Vercel", icon: "/vercel-icon.svg", isColor: true },
        { name: "Prisma", icon: "/prisma-icon.svg", isColor: true },
      ],
      index: 3,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TitleSection title="Compétences" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des applications modernes et performantes.
          </p>
        </motion.div>
        
        <motion.div
          className="grid gap-6 mt-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700"
            >
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills