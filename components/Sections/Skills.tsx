"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { TitleSection } from "../TitleSection"
import { Icons } from "../icons"

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
  <motion.div className={`mb-4 ${isHighlighted ? "order-first" : ""}`}>
    <div
      className={`flex items-center p-3 space-x-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
        isHighlighted
          ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className={`h-8 w-8  dark:bg-white dark:rounded-full dark:p-1 ${
          isColor ? "" : "filter-none"
        }`}
      />
      <span
        className={`text-sm font-medium ${isHighlighted ? "text-white" : ""}`}
      >
        {name}
      </span>
      {isHighlighted && (
        <span className="px-2 py-1 ml-auto text-xs font-semibold text-blue-500 bg-white rounded-full">
          Favoris
        </span>
      )}
    </div>
  </motion.div>
)

interface SkillCategoryProps {
  title: string
  skills: SkillProps[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="py-8 w-full">
    <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <ul>
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </ul>
  </div>
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
        {
          name: "JavaScript",
          icon: "/js-icon.svg",
        },
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

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <TitleSection title="Compétences" />
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
