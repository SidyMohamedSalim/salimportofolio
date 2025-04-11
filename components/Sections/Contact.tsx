"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Send, ArrowRight, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { TitleSection } from "../TitleSection"


interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  color: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  href,
  color,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-transparent dark:hover:border-transparent"
      whileHover={{ 
        scale: 1.03,
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`p-3 mr-5 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20 text-opacity-90 group-hover:scale-110 transition-all duration-300`}
      >
        {icon}
      </motion.div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {label}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
      </div>
      <motion.div 
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ x: 5 }}
      >
        <ExternalLink size={18} className="text-gray-400 dark:text-gray-500" />
      </motion.div>
    </motion.a>
  )
}

export const Contacts: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const contactItems: ContactItemProps[] = [
    {
      icon: <Github size={24} className="text-gray-800 dark:text-white" />,
      label: "GitHub",
      value: "Check out my repositories",
      href: siteConfig.links.github,
      color: "bg-gray-200 dark:bg-gray-700",
    },
    {
      icon: <Twitter size={24} className="text-blue-500" />,
      label: "Twitter",
      value: "Let's connect on Twitter",
      href: siteConfig.links.twitter,
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: <Mail size={24} className="text-red-500" />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "bg-red-100 dark:bg-red-900",
    },
    {
      icon: <Linkedin size={24} className="text-blue-700" />,
      label: "LinkedIn",
      value: "Connect with me professionally",
      href: siteConfig.links.linkedin,
      color: "bg-blue-100 dark:bg-blue-900",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${siteConfig.email}?subject=Contact from Website&body=Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0A${formState.message}`
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TitleSection title="Contactez-moi" />
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Besoin d&apos;une solution sur mesure pour votre projet digital ? Je suis toujours à la recherche de nouvelles collaborations passionnantes.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Contact form */}
          <motion.div
            className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-xl dark:shadow-2xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full p-3 h-40 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div className="pt-2">
                <Button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30"
                >
                  Envoyer mon message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Right side - Contact channels */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ContactItem {...item} />
              </motion.div>
            ))}
            
            {/* Quick contact card */}
            <motion.div
              className="mt-4 p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-xl"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl mr-4">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Besoin d&apos;une réponse rapide ?</h3>
              </div>
              <p className="mb-4 text-white/80">
                Pour les demandes urgentes, n&apos;hésitez pas à me contacter directement.
              </p>
              <Button
                onClick={() => window.location.href = `mailto:${siteConfig.email}`}
                className="group w-full bg-white text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2 py-2 rounded-xl transition-all duration-300"
              >
                Écrivez-moi maintenant
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Map or image section */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden h-64 shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Rabat, Morroco</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Disponible pour des projets partout au Maroc et à l&apos;international</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}