"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code, ArrowRight, Bookmark, Tag, Calendar } from "lucide-react"

import { TitleSection } from "../TitleSection"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  githubLink?: string
  liveLink?: string
  technologies: string[]
  date: string
  category: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  githubLink,
  liveLink,
  technologies,
  date,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Badge de catégorie */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
          <Tag className="w-3 h-3" />
          {category}
        </div>
      </div>
      
      {/* Image du projet avec overlay au survol */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={340}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"
        />
      </div>
      
      <div className="p-6">
        {/* En-tête avec date */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Boutons d'action */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-3">
            {githubLink && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 bg-slate-100 rounded-full transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                aria-label="Voir le code sur GitHub"
              >
                <Github size={18} />
              </motion.a>
            )}
            {liveLink && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Voir le site en ligne"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
          
          <motion.a
            whileHover={{ x: 4 }}
            href={liveLink || githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Voir détails
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects: ProjectCardProps[] = [
    {
      title: "ProGestion",
      description: "Application de gestion d'agence avec fonctionnalités de gestion des clients, employés et projets.",
      imageSrc: "/projets/crmAgence.png",
      technologies: ["React", "Next.js", "Tailwind CSS","Prisma"],
      category: "Web",
      date: "Jan 2025",
    },
    
    {
      title: "Senegal Premium Tour",
      description: "Site web professionnel pour une agence de voyage au Sénégal, avec réservation en ligne et présentation des circuits touristiques.",
      imageSrc: "/projets/tourism.png",
      liveLink: "https://www.senegalpremiumtour.com/",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      date: "Mar 2023",
      category: "Web"
    },
    {
      title: "Portfolio",
      description: "Mon portfolio personnel, mettant en avant mes compétences et projets récents.",
      imageSrc: "/projets/portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "Jan 2023",
      liveLink: "https://www.salimdiallo.com/portfolio",
      category: "Web"
    },
    {
      technologies: ["Python", "BeautifulSoup", "SQLite", "Pandas", "NumPy","Requests", "Selenium"],
      imageSrc: "/projets/carforSale.png",
      title: "CarForSale Scraper",
      description: "Scraper pour extraire des données de voitures à vendre sur un site web, avec stockage dans une base de données.",
      category: "Web",
      date: "Mai 2024",
    },
    {
      title: "Reviser avec l'IA",
      description: "Application d'aide à la révision utilisant l'intelligence artificielle pour créer des fiches de révision personnalisées.",
      imageSrc: "/projets/revise.png",
      githubLink: "https://github.com/SidyMohamedSalim/Revise-App",
      liveLink: "https://revise-app-ia.vercel.app/",
      technologies: ["React", "OpenAI API", "Prisma", "TypeScript"],
      date: "Jan 2024",
      category: "IA"
    },
    {
      title: "N8N Automation",
      description: "Ce workflow envoie automatiquement les e-mails étiquetés dans Gmail vers une base de données Notion en créant une page avec le sujet, un extrait du contenu et le lien de l’e-mail.",
      imageSrc: "/projets/n8n.png",
      technologies: ["N8N", "Gmail API", "Notion API"],
      date: "Dec 2024",
      category: "Ai"
    },
    {
      title: "Crypto Tracker",
      description: "Application de suivi des prix des cryptomonnaies en temps réel, avec graphiques et alertes personnalisées.",
      imageSrc: "/projets/CryptoApp.png",
      technologies: ["React", "Tailwind CSS", "CoinGecko API"],
      date: "Fév 2021",
      githubLink:"https://github.com/SidyMohamedSalim/cryptoapp",
      category: "Web"
    },
    {
      title: "Telegram Dm Sender",
      description: "Bot Telegram pour envoyer des messages en masse à des utilisateurs spécifiques, avec gestion des erreurs et des délais.",
      imageSrc: "/projets/telegram.png",
      technologies: ["Python", "Telethon", "SQLite"],
      date: "2024",
      category: "IA"
    }
    ,
    // {
    //   title: "Travel Site",
    //   description: "Plateforme de réservation de voyages avec comparaison de prix et suggestions personnalisées basées sur les préférences utilisateurs.",
    //   imageSrc: "/projets/travel.png",
    //   githubLink: "https://github.com/SidyMohamedSalim/easyTourisme",
    //   liveLink: "https://travelsalim.netlify.app",
    //   technologies: ["Nextjs", "Talwind Css", "Prisma"],
    //   date: "Nov 2023",
    //   category: "Web"
    // },
  ];

  const categories = ["all", "Web", "IA", "Data"];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        {/* En-tête de section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <TitleSection title="Projects" />
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Découvrez une sélection de mes projets les plus récents en développement logiciel et data engineering.
          </p>
          
          {/* Filtres de catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? "bg-blue-600 text-white dark:bg-blue-500" 
                    : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Grille de projets avec animation */}
     
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${filter}-${index}`} {...project} />
            ))}
          </motion.div>
      
        
        {/* Bouton "Voir plus" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="/all-projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-slate-800 dark:text-white font-medium border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2 transition-all duration-300"
          >
            <Bookmark className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Voir tous les projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;