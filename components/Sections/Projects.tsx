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
}) => {
  // Animation pour l'effet de survol de la carte
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  // Animation pour l'image
  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.4 },
    },
  }

  // Animation pour le titre
  const titleVariants = {
    initial: { y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  }

  // Animation pour les boutons
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="overflow-hidden relative bg-white rounded-lg shadow-lg dark:bg-gray-800"
      style={{ transformOrigin: "center" }}
    >
      <div className="overflow-hidden relative w-full h-48">
        <motion.div variants={imageVariants} className="w-full h-full">
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="transition-all duration-300"
          />
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 justify-between p-6">
        <motion.h3
          variants={titleVariants}
          className="mb-2 text-xl font-semibold text-gray-900 dark:text-white"
        >
          {title}
        </motion.h3>
        <div className="flex justify-end mt-4 space-x-4">
          {githubLink && (
            <motion.a
              variants={buttonVariants}
              whileTap="tap"
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
              variants={buttonVariants}
              whileTap="tap"
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
}

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
  ]

  // Animation pour l'apparition séquentielle des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // Animation pour chaque carte individuelle
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  }

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.4,
          }}
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
            <motion.div
              key={index}
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
