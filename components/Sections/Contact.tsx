"use client"

import React from "react"
import { Github, Mail, Twitter } from "lucide-react"

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
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="flex items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <div className="p-3 mr-4 text-white bg-blue-500 rounded-full">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-200">
        {label}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
    </div>
  </a>
)

export const Contacts: React.FC = () => {
  const contactItems: ContactItemProps[] = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "View my repositories",
      href: siteConfig.links.github,
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      value: "Follow me on Twitter",
      href: siteConfig.links.twitter,
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <TitleSection title="Contact Me" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Feel free to reach out if you have any questions or just want to
          connect!
        </p>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() =>
              (window.location.href = `mailto:${siteConfig.email}`)
            }
          >
            Send me a message
          </Button>
        </div>
      </div>
    </section>
  )
}
