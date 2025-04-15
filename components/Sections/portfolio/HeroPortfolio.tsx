"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Terminal, FileText, History } from "lucide-react"
import Image from "next/image"

const HeroPortfolio = () => {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  
  // Assurez-vous que le composant est monté pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])
  

  const titles = ["Développeur Web", "Data Engineering", "Web Scraper", "Ai Automation"]
  
  useEffect(() => {
   
    const titlesInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length)
    }, 4000)
    
    return () => {
      clearInterval(titlesInterval)
    }
  }, [])
  
  // Défilement de caractères pour l'effet de terminal
  const [terminalText, setTerminalText] = useState("")
  const fullText = "echo 'Bonjour, bienvenue sur mon portfolio!'"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        index = 0
        setTimeout(() => {
          setTerminalText("")
        }, 1500)
      }
    }, 120)
    
    return () => clearInterval(interval)
  }, [])
  
  if (!mounted) return null
  
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center transition-colors duration-300 dark:bg-slate-950 bg-slate-50">
      {/* Éléments de design d'arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent opacity-60 dark:opacity-40"></div>
      
      {/* Lignes de grille futuristes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 dark:via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 dark:via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 dark:via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 dark:via-blue-500/20 to-transparent"></div>
      </div>
      
      {/* Formes abstraites de design */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Conteneur principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Terminal animé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 w-full max-w-xl mx-auto overflow-hidden"
          >
            <div className="bg-slate-800 dark:bg-slate-900 rounded-lg overflow-hidden shadow-xl">
              <div className="flex items-center px-4 py-2 bg-slate-700 dark:bg-slate-800 border-b border-slate-600 dark:border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-white font-medium">terminal</div>
              </div>
              <div className="p-4 font-mono text-sm sm:text-base text-green-400 flex items-center h-16">
                <span className="mr-2">$</span>
                <span>{terminalText}</span>
                <span className="w-2 h-5 bg-green-400 ml-1 animate-blink"></span>
              </div>
            </div>
          </motion.div>
          
          {/* Badge de statut */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-medium text-lg">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Disponible pour missions freelance
            </span> */}
          </motion.div>
          
          {/* Section du profil avec image et nom côte à côte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6"
          >
            {/* Photo de profil avec animation et effets */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl relative z-10">
                {/* Pour une image locale */}
                <Image
                  fill
                  src="/profil2.png"
                  alt="Salim Diallo"
                  className="w-full h-full object-cover"
                />
                {/* Si vous avez une vraie image, remplacez "/api/placeholder/400/400" par le chemin de votre image (ex: "/images/profile.jpg") */}
              </div>
              
              {/* Cercle décoratif d'arrière-plan */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur opacity-60 dark:opacity-40 animate-pulse"></div>
            </motion.div>
            
            {/* Nom principal avec effet */}
            <div>
              <h1 className="text-3xl sm:text-7xl font-bold tracking-tighter">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                 Salim Diallo
                </span>
              </h1>
            </div>
          </motion.div>
          
          {/* Profession avec animation */}
          <div className="h-24 mb-8 overflow-hidden">
      
              <motion.h2
                key={textIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
              >
                {titles[textIndex]}
              </motion.h2>
           
          </div>
          
          {/* Description principale */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mb-12"
          >
            Je conçois et développe des <span className="font-medium text-blue-600 dark:text-blue-400">expériences web créatives</span> qui allient esthétique moderne et performance technique.
            J&apos;utilise des outils comme make et n8n pour automatiser les tâches répétitives et améliorer l&apos;efficacité des flux de travail.
          </motion.p>
          
          {/* Stats personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mx-auto mb-12"
          >
            <div className="flex flex-col items-center p-6 bg-white/70 dark:bg-slate-800/70 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</span>
              <span className="text-slate-600 dark:text-slate-300">Années d&apos;expérience</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 dark:bg-slate-800/70 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</span>
              <span className="text-slate-600 dark:text-slate-300">Projets réalisés</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 dark:bg-slate-800/70 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</span>
              <span className="text-slate-600 dark:text-slate-300">Satisfaction client</span>
            </div>
          </motion.div>
          
          {/* Boutons d'action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <Link href="/contact">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl text-xl font-semibold text-white flex items-center gap-3 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 transition-all duration-300"
              >
                Me contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
            
            <Link href="/portfolio/cv">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-xl font-semibold text-slate-800 dark:text-white flex items-center gap-3 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300"
              >
                <History className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                voir CV
              </motion.div>
            </Link>
          </motion.div>
          

        </div>
      </div>
      
      {/* Code flottant en arrière-plan - visible uniquement sur les grands écrans */}
      <div className="hidden lg:block">
        {["react", "useState", "tailwind", "nextjs", "framer", "motion", "fetch", "async"].map((word, i) => (
          <motion.div
            key={`code-${i}`}
            initial={{ 
              opacity: 0.1 + Math.random() * 0.1,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 20 - 10
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%"
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute font-mono text-4xl opacity-5 dark:opacity-10 select-none pointer-events-none font-bold text-blue-900 dark:text-blue-500"
          >
            {word}
          </motion.div>
        ))}
      </div>
      
      {/* Animation de style "Matrix" pour l'arrière-plan en mode sombre uniquement */}
      <div className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
        {Array.from({ length: 10 }).map((_, columnIndex) => (
          <div 
            key={`matrix-${columnIndex}`} 
            className="absolute top-0 text-green-500 font-mono text-xs animate-matrix whitespace-nowrap"
            style={{ 
              left: `${(columnIndex * 10) + Math.random() * 5}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroPortfolio
