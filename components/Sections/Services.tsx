"use client"

import React from "react"
import { motion } from "framer-motion"
import { TitleSection } from "../TitleSection"
import { CheckCircle, ArrowRight, ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"

interface ServiceProps {
  name: string
  description: string
  icon: string
  isColor?: boolean
  isHighlighted?: boolean
}

const Service: React.FC<ServiceProps> = ({
  name,
  description,
  icon,
  isColor = false,
  isHighlighted = false,
}) => (
  <motion.div
    className={`h-full ${isHighlighted ? "order-first lg:order-none" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300
      ${isHighlighted 
        ? "text-white bg-gradient-to-br from-blue-600 to-indigo-600 border-transparent shadow-xl shadow-blue-500/20 dark:shadow-blue-900/30" 
        : "bg-white/80 backdrop-blur-sm border-slate-200 hover:border-blue-200 dark:bg-slate-800/80 dark:border-slate-700 dark:hover:border-blue-800"}`}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: isHighlighted ? "0 20px 30px -10px rgba(59, 130, 246, 0.3)" : "0 15px 30px -10px rgba(0, 0, 0, 0.1)" 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Badge populaire */}
      {isHighlighted && (
        <div className="absolute top-0 right-6 -translate-y-1/2">
          <motion.div
            className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md flex items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Star className="w-3.5 h-3.5" />
            Populaire
          </motion.div>
        </div>
      )}
      
      <div className="px-6 pt-8 pb-6">
        {/* En-tête du service */}
        <div className="flex items-start mb-5">
          <div className={`relative flex items-center justify-center h-14 w-14 rounded-2xl overflow-hidden
            ${!isHighlighted 
              ? "bg-blue-50 dark:bg-slate-700" 
              : "bg-white/20"}`}
          >
            <motion.img
              src={icon}
              alt={`${name} icon`}
              className={`h-8 w-8 ${isColor ? "" : "dark:filter dark:brightness-150"}`}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <h3
            className={`ml-4 text-xl font-bold ${
              isHighlighted ? "text-white" : "text-slate-800 dark:text-white"
            }`}
          >
            {name}
          </h3>
        </div>
        
        {/* Description */}
        <p className={`mb-6 text-base flex-grow ${isHighlighted ? "text-blue-50" : "text-slate-600 dark:text-slate-300"}`}>
          {description}
        </p>
        

      </div>
      
      {/* Bouton d'action */}
      <div className="mt-auto px-6 pb-6">
        <Link href={`/services/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full">
          <div className={`flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-medium transition-all
            ${isHighlighted 
              ? "bg-white text-blue-600 hover:bg-blue-50 group" 
              : "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-slate-700 dark:text-blue-400 dark:hover:bg-slate-600 group"}`}
          >
            <span>En savoir plus</span>
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </motion.div>
  </motion.div>
)

interface ServiceCategoryProps {
  title: string
  description: string
  services: ServiceProps[]
  index: number
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  services,
  index,
}) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="mb-10">
      <div className="flex items-center mb-3">
        <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-3`}></div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
        {description}
      </p>
    </div>
    
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
      {services.map((service, serviceIndex) => (
        <Service key={serviceIndex} {...service} />
      ))}
    </div>
  </motion.div>
)

const Services: React.FC = () => {
  const serviceCategories: ServiceCategoryProps[] = [
    {
      title: "Développement Web",
      description: "Création de sites et applications web modernes, rapides et sécurisés qui correspondent à vos besoins.",
      services: [
        { 
          name: "Sites Web Dynamiques", 
          isColor: true,
          isHighlighted: true,
          icon: "/tailwindcss-icon.svg",
          description: "Des sites web interactifs avec des fonctionnalités avancées optimisés pour mobile et SEO." 
        },
        { 
          name: "Applications Web", 
          icon: "/react-icon.svg", 
          isColor: true,
          description: "Des applications web complexes et interactives utilisant React, Next.js et d'autres technologies modernes." 
        },
        { 
          name: "API & Backends", 
          icon: "/nodejs-icon.svg", 
          description: "Construction d'API RESTful et de backends puissants pour vos applications et systèmes." 
        },
      ],
      index: 0,
    },
    {
      title: "Web Scraping",
      description: "Solutions d'extraction et d'analyse de données web pour alimenter vos systèmes d'information.",
      services: [
        { 
          name: "Extraction de Données", 
          icon: "/python-icon.svg", 
          isHighlighted: true,
          description: "Collecte automatisée de données structurées à partir de sites web et de plateformes en ligne." 
        },
        { 
          name: "Monitoring Web", 
          icon: "/postgresql-icon.svg", 
          isColor: true,
          description: "Surveillance des changements sur des pages web et alertes en temps réel pour votre veille concurrentielle." 
        },
        { 
          name: "Cleaning de Data", 
          icon: "/django-icon.svg", 
          description: "Enrichissement de vos bases de données avec des informations extraites du web de manière éthique." 
        },
      ],
      index: 1,
    },
    {
      title: "Automatisation IA",
      description: "Exploitation de l'intelligence artificielle pour automatiser vos processus et optimiser votre productivité.",
      services: [
        { 
          name: "Traitement Automatisé", 
          icon: "/python-icon.svg", 
          isHighlighted: true,
          description: "Automatisation de tâches répétitives grâce à des scripts et workflows intelligents." 
        },
        { 
          name: "Integration IA", 
          icon: "/typescript-icon.svg", 
          isColor: true,
          description: "Intégration de modèles d'IA dans vos systèmes existants pour améliorer l'efficacité et la prise de décision." 
        },
      ],
      index: 2,
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-blue-50/50 to-white/80 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Éléments de design d'arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/80 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-blue-300/20 dark:bg-blue-700/10 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <TitleSection title="Nos Services" />
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Solutions technologiques avancées en développement web, web scraping et automatisation IA pour transformer votre entreprise.
          </p>
        </motion.div>
        
        {/* Catégories de services */}
        <div className="space-y-32">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={index} {...category} />
          ))}
        </div>
        
        {/* Section CTA */}
        <motion.div 
          className="mt-32 text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Besoin d&apos;une solution technologique sur mesure?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Nos experts sont à votre disposition pour développer une solution parfaitement adaptée à vos objectifs d&apos;automatisation et de développement.
          </p>
          
          <Link href="/contact">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 transition-all duration-300 group"
            >
              Demander un devis personnalisé
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services