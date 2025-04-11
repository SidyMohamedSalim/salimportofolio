"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Target, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const MarketingHook = () => {
  const [activeTab, setActiveTab] = useState(0)
  
  const benefits = [
    {
      id: 0,
      title: "Performance",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      description: "Des solutions technologiques optimisées pour des performances exceptionnelles et un temps de chargement ultrarapide.",
      stat: "40%",
      statText: "d'amélioration des performances en moyenne"
    },
    {
      id: 1,
      title: "Résultats",
      icon: <Target className="w-6 h-6 text-red-500" />,
      description: "Augmentez votre conversion et atteignez vos objectifs commerciaux grâce à nos stratégies digitales orientées résultats.",
      stat: "3x",
      statText: "plus de conversions pour nos clients"
    },
    {
      id: 2,
      title: "Fiabilité",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      description: "Une infrastructure robuste et sécurisée pour garantir la stabilité de vos projets digitaux 24/7.",
      stat: "99.9%",
      statText: "de disponibilité garantie"
    }
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950 dark:to-slate-950 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      
      {/* Contenu principal */}
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Pourquoi choisir DigiSolutions?
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Notre approche orientée résultats transforme votre vision en réalité digitale qui dépasse vos attentes.
          </p>
        </motion.div>
        
        {/* Onglets interactifs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`cursor-pointer group transition-all duration-300 ${
                activeTab === index 
                  ? "bg-white dark:bg-slate-800 shadow-xl border-blue-400 dark:border-blue-500" 
                  : "bg-white/60 dark:bg-slate-800/60 hover:bg-white hover:dark:bg-slate-800 shadow-md border-transparent hover:border-blue-300 dark:hover:border-blue-700"
              } rounded-2xl border p-6`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-xl mr-4 ${
                  activeTab === index 
                    ? "bg-blue-100 dark:bg-blue-900/50" 
                    : "bg-slate-100 dark:bg-slate-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30"
                }`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              <div className={`mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 ${
                activeTab === index ? "opacity-100" : "opacity-60 group-hover:opacity-80"
              }`}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {benefit.stat}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {benefit.statText}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Section témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 italic mb-4">
                "DigiSolutions a transformé notre présence en ligne et multiplié nos ventes par 3 en seulement 6 mois. Leur expertise technique et leur vision stratégique sont inégalées."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  LM
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white">
                    Laure Martin
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Directrice Marketing, TechPro Inc.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4">
              <Link href="/case-studies">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 rounded-xl font-medium text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 transition-all duration-300"
                >
                  Voir nos études de cas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Link>
              
              <Link href="/methodology">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full px-6 py-3 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl font-medium text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Notre méthodologie
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Style pour la grille */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.05) 1px, transparent 1px);
        }
        
        @media (prefers-color-scheme: dark) {
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(226, 232, 240, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.05) 1px, transparent 1px);
          }
        }
      `}</style>
    </section>
  )
}

export default MarketingHook