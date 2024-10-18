"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Github, Link, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

import { siteConfig } from "../../config/site"
import { TitleSection } from "../TitleSection"

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex overflow-hidden items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:hover:bg-gray-700"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="p-4 mr-6 text-white bg-blue-400 rounded-full hover:bg-blue-500"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
          {label}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </motion.a>
  )
}

export const Contacts: React.FC = () => {
  const contactItems: ContactItemProps[] = [
    {
      icon: <Github size={28} />,
      label: "GitHub",
      value: "View my repositories",
      href: siteConfig.links.github,
    },
    {
      icon: <Twitter size={28} />,
      label: "Twitter",
      value: "Follow me on Twitter",
      href: siteConfig.links.twitter,
    },
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Linkedin size={28} />,
      label: "Linkedin",
      value: "Join my network on Linkedin",
      href: siteConfig.links.linkedin,
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleSection title="Let's Connect!" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
            I&apos;m always excited to collaborate on new projects or just have
            a friendly chat. Don&apos;t hesitate to reach out!
          </p>
        </motion.div>
        <motion.div
          className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </motion.div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() =>
              (window.location.href = `mailto:${siteConfig.email}`)
            }
            className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full transition-colors duration-300 hover:bg-blue-700"
          >
            Send me a message
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
