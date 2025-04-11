"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Linkedin, Phone, Mail, Users, BarChart, Menu, X, ChevronDown, Github, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Gestion du scroll pour l'effet compact
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Fermeture du menu mobile lors du changement de route
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }
    
    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])
  
  return (
    <header className={`sticky top-0 z-40 w-full border-b bg-background transition-all duration-300 ${
      scrolled ? "shadow-md" : ""
    }`}>
      {/* Barre de contact supérieure - masquée sur mobile */}
      <div className="hidden sm:flex w-full items-center justify-between py-1 px-4 bg-blue-600 dark:bg-blue-900 text-white text-sm border-b border-blue-500 dark:border-blue-800">
        <div className="flex items-center space-x-4">
          <a href="tel:+33123456789" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
            <Phone className="w-3 h-3" />
            <span>+33 1 23 45 67 89</span>
          </a>
          <a href="mailto:contact@digisolutions.fr" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
            <Mail className="w-3 h-3" />
            <span>contact@digisolutions.fr</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-white hover:text-blue-200 transition-colors">
              <Icons.twitter className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-white hover:text-blue-200 transition-colors">
              <Icons.gitHub className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Header principal avec logo et navigation */}
      <div className={`flex items-center justify-between px-4 sm:px-6 lg:container ${
        scrolled ? "h-14" : "h-16"
      } transition-all duration-300`}>
        {/* Logo de l'agence */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl p-2 rounded">DS</div>
            <span className="font-bold text-xl hidden sm:inline-block">DigiSolutions</span>
          </Link>
        </div>

        {/* Navigation principale - visible sur desktop */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <MainNav items={siteConfig.mainNav} />
        </div>
        
        {/* Zone droite avec boutons d'action et outils */}
        <div className="flex items-center space-x-4">
          {/* Bouton de contact/devis - visible uniquement sur desktop */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "sm",
                variant: "default",
                className: "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
              })}
            >
              Demander un devis
            </Link>
          </div>

          {/* Icônes de navigation secondaire - visibles uniquement sur desktop */}
          <nav className="hidden sm:flex items-center space-x-1">
            <Link
              href="/services"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <BarChart className="w-5 h-5" />
                <span className="sr-only">Services</span>
              </div>
            </Link>
            <Link
              href="/team"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Users className="w-5 h-5" />
                <span className="sr-only">Notre équipe</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Bouton menu hamburger - visible uniquement sur mobile */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
 
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="px-4 py-3 space-y-4">
              {/* Liens principaux */}
              <nav className="flex flex-col space-y-1">
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 rounded-lg text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Liens secondaires */}
              <div className="flex flex-col space-y-1 pt-2 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href="/services"
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-3"
                >
                  <BarChart className="w-5 h-5" />
                  <span>Nos services</span>
                </Link>
                <Link
                  href="/team"
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Notre équipe</span>
                </Link>
              </div>

              {/* Bouton de contact/devis */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demander un devis
                </Link>
              </div>

              {/* Infos de contact */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800 space-y-2">
                <div className="flex items-center space-x-3 px-4 py-2">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a href="tel:+33123456789" className="text-gray-700 dark:text-gray-300">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div className="flex items-center space-x-3 px-4 py-2">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a href="mailto:contact@digisolutions.fr" className="text-gray-700 dark:text-gray-300">
                    contact@digisolutions.fr
                  </a>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="flex space-x-4 px-4 py-3">
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

    </header>
  )
}