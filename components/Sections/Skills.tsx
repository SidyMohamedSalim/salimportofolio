"use client"

import React from "react"
import { motion } from "framer-motion"

import { TitleSection } from "../TitleSection"

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
      className={`flex items-center p-3 space-x-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
        isHighlighted
          ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
          : "bg-white dark:bg-gray-800"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={icon}
        alt={`${name} icon`}
        className={`h-8 w-8 dark:bg-white dark:rounded-full dark:p-1 ${
          isColor ? "" : "filter-none"
        }`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      />
      <span
        className={`text-sm font-medium ${isHighlighted ? "text-white" : ""}`}
      >
        {name}
      </span>
      {isHighlighted && (
        <motion.span
          className="px-2 py-1 ml-auto text-xs font-semibold text-blue-500 bg-white rounded-full"
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
    className="w-full md:py-8"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <ul>
      {skills.map((skill, skillIndex) => (
        <Skill key={skillIndex} {...skill} />
      ))}
    </ul>
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
    },
    {
      title: "Back-End",
      skills: [
        { name: "Python", icon: "/python-icon.svg", isHighlighted: true },
        { name: "Node.js", icon: "/nodejs-icon.svg" },
        { name: "Django", icon: "/django-icon.svg" },
        { name: "PostgreSQL", icon: "/postgresql-icon.svg", isColor: true },
      ],
    },
    {
      title: "Outils & Déploiement",
      skills: [
        { name: "Git & GitHub", icon: "/github-icon.svg" },
        { name: "Vercel", icon: "/vercel-icon.svg", isColor: true },
        { name: "Prisma", icon: "/prisma-icon.svg", isColor: true },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-8 bg-gray-50 md:py-16 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TitleSection title="Compétences" />
        </motion.div>
        <motion.div
          className="grid gap-4 mt-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCategory {...category} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
