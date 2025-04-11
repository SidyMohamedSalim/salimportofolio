"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Clock, User, Tag, Search, BookOpen, ChevronRight, Calendar, MessageCircle } from "lucide-react"

const BlogPage = () => {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [filterOpen, setFilterOpen] = useState(false)
  
  // Assurer que le composant est monté pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const featuredPost = {
    id: 1,
    title: "Les tendances du développement web en 2025",
    excerpt: "Découvrez les technologies et méthodologies qui façonnent l'avenir du développement web cette année.",
    date: "10 Avril 2025",
    author: "Thomas Durand",
    category: "Technologie",
    readTime: "8 min",
    image: "/api/placeholder/800/450",
    comments: 12
  }
  
  const blogPosts = [
    {
      id: 2,
      title: "Comment l'IA révolutionne l'expérience utilisateur",
      excerpt: "L'intelligence artificielle transforme radicalement la façon dont nous concevons les interfaces utilisateur.",
      date: "5 Avril 2025",
      author: "Sophie Martin",
      category: "Intelligence Artificielle",
      readTime: "6 min",
      image: "/api/placeholder/400/250",
      comments: 8
    },
    {
      id: 3,
      title: "Les meilleures pratiques SEO pour 2025",
      excerpt: "Optimisez votre présence en ligne avec ces stratégies SEO éprouvées pour améliorer votre classement.",
      date: "1 Avril 2025",
      author: "Lucas Petit",
      category: "Marketing Digital",
      readTime: "5 min",
      image: "/api/placeholder/400/250",
      comments: 4
    },
    {
      id: 4,
      title: "Sécurité web : protégez votre site contre les cyberattaques",
      excerpt: "Les menaces évoluent constamment. Découvrez comment protéger efficacement votre présence en ligne.",
      date: "25 Mars 2025",
      author: "Emma Dubois",
      category: "Sécurité",
      readTime: "7 min",
      image: "/api/placeholder/400/250",
      comments: 6
    },
    {
      id: 5,
      title: "Le design responsive en 2025 : au-delà du mobile-first",
      excerpt: "Comment concevoir des expériences fluides qui s'adaptent à tous les appareils et contextes d'utilisation.",
      date: "18 Mars 2025",
      author: "Julie Leroux",
      category: "Design",
      readTime: "4 min",
      image: "/api/placeholder/400/250",  
      comments: 9
    },
    {
      id: 6,
      title: "Le commerce électronique à l'ère du Web 3.0",
      excerpt: "L'évolution des plateformes e-commerce avec l'arrivée des technologies décentralisées.",
      date: "12 Mars 2025",
      author: "Nicolas Bernard",
      category: "E-commerce",
      readTime: "6 min",
      image: "/api/placeholder/400/250",
      comments: 3
    }
  ]
  
  const categories = ["Tous", "Technologie", "Intelligence Artificielle", "Marketing Digital", "Sécurité", "Design", "E-commerce"]
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })
  
  if (!mounted) return null
  
  return (
    <section className="w-full min-h-screen relative overflow-hidden transition-colors duration-300 dark:bg-slate-950 bg-slate-50 pt-12 pb-24">
      {/* Éléments de design d'arrière-plan spécifiques au thème */}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Titre de la page avec effet différent selon le thème */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 tracking-tighter">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                Notre Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Découvrez nos dernières réflexions, conseils et analyses sur le monde du digital et du développement web.
            </p>
          </motion.div>
          
          {/* Barre de recherche et filtres */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 dark:text-white"
                />
              </div>
              
              <div className="relative w-full md:w-auto">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="w-full md:w-auto px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md flex items-center justify-between gap-4 transition-all duration-300"
                >
                  <span className="text-slate-700 dark:text-white font-medium">Catégorie: {selectedCategory}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-500 transform transition-transform ${filterOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {filterOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-20 overflow-hidden"
                  >
                    <ul>
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => {
                              setSelectedCategory(category)
                              setFilterOpen(false)
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 ${
                              selectedCategory === category 
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' 
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Article à la une */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-5xl mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
              <span className="mx-4 text-slate-500 dark:text-slate-400 text-lg font-medium">À LA UNE</span>
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
            </div>
            
            <Link href={`/blog/${featuredPost.id}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-500 dark:text-slate-400">{featuredPost.author}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-500 dark:text-slate-400">{featuredPost.readTime}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-500 dark:text-slate-400">{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-500 dark:text-slate-400">{featuredPost.comments} commentaires</span>
                      </div>
                      
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
                      >
                        Lire l'article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Liste des articles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl"
          >
            <div className="flex items-center mb-10">
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
              <span className="mx-4 text-slate-500 dark:text-slate-400 text-lg font-medium">ARTICLES RÉCENTS</span>
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link href={`/blog/${post.id}`}>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="group h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
                      >
                        <div className="relative">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </div>
                        </div>
                        
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                              <span className="text-sm text-slate-500 dark:text-slate-400">{post.author}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                              <span className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</span>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
                            <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                              <span className="text-sm text-slate-500 dark:text-slate-400">{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("Tous")
                  }}
                  className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Réinitialiser les filtres
                </button>
              </motion.div>
            )}
            
            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center mt-16"
              >
                <nav className="flex items-center bg-white dark:bg-slate-800 px-4 py-3 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
                  <button className="p-2 mr-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 dark:text-white">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 mx-1 rounded-lg flex items-center justify-center transition-colors ${
                        page === 1
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="p-2 ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </nav>
              </motion.div>
            )}
          </motion.div>
          
          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl mt-24 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-700 rounded-2xl overflow-hidden shadow-xl p-1"
          >
            <div className="bg-white/95 dark:bg-slate-900/95 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  Vous avez un projet digital en tête ?
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Notre équipe d'experts est prête à transformer votre vision en réalité. Contactez-nous dès aujourd'hui pour discuter de votre projet.
                </p>
                <Link href="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 transition-all duration-300"
                  >
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Code flottant en arrière-plan - visible uniquement sur les grands écrans */}
      <div className="hidden lg:block">
        {["blog", "content", "article", "digital", "web", "design", "seo", "react"].map((word, i) => (
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

export default BlogPage

// N'oubliez pas d'ajouter ces animations dans votre fichier global.css
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes matrix {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100vh);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-matrix {
  animation: matrix linear infinite;
}
*/