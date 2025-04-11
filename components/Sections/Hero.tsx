"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Briefcase, Users, BarChart, ChevronRight, Globe, Code, Star } from "lucide-react"

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const services = [
    "DÉVELOPPEMENT WEB",
    "DATA ENGINEERING",
    "INTELLIGENCE ARTIFICIELLE",
    "UI/UX DESIGN",
    "CONSULTANCE TECH",
    "SOLUTIONS CLOUD",
  ]
  
  const expertises = ["Agence Digitale", "Solutions Innovantes", "Équipe d'Experts"]
  
  useEffect(() => {
    const inspirationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 3000)
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % expertises.length)
    }, 4000)
    
    return () => {
      clearInterval(inspirationInterval)
      clearInterval(textInterval)
    }
  }, [])
  
  if (!mounted) return null
  
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* Effet de grille moderne */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 dark:from-teal-400/10 dark:to-emerald-400/10 rounded-full filter blur-3xl"></div>
      
      {/* Lignes dynamiques */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0"></div>
      
      {/* Section principale */}
      <div className="mx-auto h-full w-full flex flex-col justify-center items-center relative z-10 py-20 px-4">
        <div className="w-full max-w-screen-2xl">
          {/* Layout en grid pour section héro moderne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Colonne gauche - Texte */}
            <div className="flex flex-col">
              {/* Badge statut */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="self-start mb-8"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Devis gratuit sous 24h
                </span>
              </motion.div>
              
              {/* Titre principal avec effet de gradient */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-bold tracking-tight mb-4"
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  DigiSolutions
                </span>
              </motion.h1>
              
              {/* Sous-titre animé */}
              <div className="h-16 mb-6 overflow-hidden">
                  <motion.h2
                    key={textIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white"
                  >
                    {expertises[textIndex]}
                  </motion.h2>
         
              </div>
              
              {/* Description avec mise en avant */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl"
              >
                Votre partenaire technologique pour des solutions digitales performantes.
                <span className="block mt-2 font-medium text-blue-600 dark:text-blue-400">
                  Nous transformons vos idées complexes en expériences exceptionnelles.
                </span>
              </motion.p>
              
              {/* Boutons d'action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-5 mb-12"
              >
                <Link href="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 rounded-xl text-lg font-medium text-white flex items-center gap-3 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 transition-all duration-300"
                  >
                    Demander un devis
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
                
                <Link href="/services">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-lg font-medium text-slate-800 dark:text-white flex items-center gap-3 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300"
                  >
                    Nos services
                    <Briefcase className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              {/* Services en rotation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-4"
              >
                <div className="flex items-center mb-4">
                  <div className="h-px w-6 bg-slate-300 dark:bg-slate-600"></div>
                  <span className="mx-3 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider font-medium">Expertises</span>
                  <div className="h-px w-6 bg-slate-300 dark:bg-slate-600"></div>
                </div>
                
                <div className="relative h-12 overflow-hidden">
         
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 flex items-center"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        {services[currentIndex]}
                      </h3>
                    </motion.div>
                  
                </div>
                
                <div className="flex gap-1 mt-3">
                  {services.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 w-8 rounded-full ${
                        index === currentIndex
                          ? "bg-blue-500 dark:bg-blue-400"
                          : "bg-slate-300 dark:bg-slate-700"
                      }`}
                      animate={{ 
                        scale: index === currentIndex ? [1, 1.3, 1] : 1
                      }}
                      transition={{ duration: 1.5, repeat: index === currentIndex ? Infinity : 0 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Colonne droite - Statistiques et éléments visuels */}
            <div className="relative">
              {/* Grille de statistiques */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                  <div className="mb-3 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                    <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-4xl font-bold text-slate-800 dark:text-white">100+</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">Projets livrés</p>
                </div>
                
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                  <div className="mb-3 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl w-fit">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-4xl font-bold text-slate-800 dark:text-white">98%</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">Clients satisfaits</p>
                </div>
                
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                  <div className="mb-3 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl w-fit">
                    <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="text-4xl font-bold text-slate-800 dark:text-white">12</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">Experts tech</p>
                </div>
                
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                  <div className="mb-3 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl w-fit">
                    <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-4xl font-bold text-slate-800 dark:text-white">24</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">Pays clients</p>
                </div>
              </motion.div>
              
              {/* Éléments visuels décoratifs */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-2xl"></div>
              
              {/* Élément flotant avec code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-16 -right-10 hidden xl:block"
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-mono text-slate-800 dark:text-slate-200 rotate-6">
                  <span className="text-blue-600 dark:text-blue-400">const</span> future = <span className="text-purple-600 dark:text-purple-400">await</span> digiSolutions.create(yourIdeas);
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
      
      </div>
      
   
    </section>
  )
}

export default Hero