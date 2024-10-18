"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { TitleSection } from "../TitleSection"

interface ProjectCardProps {
  title: string
  imageSrc: string
  githubLink?: string
  liveLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  githubLink,
  liveLink,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="flex overflow-hidden flex-col bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
  >
    <div className="relative w-full h-48">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="transition-all duration-300 hover:opacity-75"
      />
    </div>
    <div className="flex flex-col flex-1 justify-between p-6">
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex justify-end mt-4 space-x-4">
        {githubLink && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-700 bg-gray-200 rounded-full transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            <Github size={20} />
          </motion.a>
        )}
        {liveLink && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-blue-500 rounded-full transition-colors hover:bg-blue-600"
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
)

const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Senegal Premium Tour",
      imageSrc: "/projets/tourism.png",
      liveLink: "https://www.senegalpremiumtour.com/",
    },
    {
      title: "Reviser avec l'IA",
      imageSrc: "/projets/revise.png",
      githubLink: "https://github.com/SidyMohamedSalim/Revise-App",
      liveLink: "https://revise-app-ia.vercel.app/",
    },
    {
      title: "Travel Site",
      imageSrc: "/projets/travel.png",
      githubLink: "https://github.com/SidyMohamedSalim/easyTourisme",
      liveLink: "https://travelsalim.netlify.app",
    },
    // Add more projects here
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TitleSection title="Projects" />
        </motion.div>
        <motion.div
          className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
