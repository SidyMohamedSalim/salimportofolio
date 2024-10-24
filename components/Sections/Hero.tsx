"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"

import { Avatar, AvatarImage } from "../ui/avatar"
import { buttonVariants } from "../ui/button"

const Hero: React.FC = () => {
  const inspirations = [
    "LA NATURE",
    "LE SPORT",
    "L'INNOVATION",
    "LA CRÉATIVITÉ",
    "LA TECHNOLOGIE",
    "L'ART",
    "LE VOYAGE",
    "LA SCIENCE",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inspirations.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="container px-4 pt-24 pb-16 mx-auto md:pt-32">
      <div className="flex flex-col-reverse gap-12 justify-between items-center md:flex-row">
        <motion.div
          className="flex flex-col justify-center items-start max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Salim Diallo
            </span>
          </h1>

          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            Software Engineer passionate about technology. My motto: Always
            learning, always improving.
          </p>
          <div className="flex gap-4">
            <Link
              href={`mailto:${siteConfig.email}`}
              rel="noreferrer"
              target="_blank"
              className={buttonVariants({ size: "lg" })}
            >
              Contact Me Now
            </Link>
            <Link
              href="/cv"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              CV
            </Link>
          </div>
        </motion.div>
        <div className="flex flex-col items-center mb-4 w-full">
          <span className="text-lg text-gray-600 dark:text-gray-400">
            INSPIRÉ PAR
          </span>
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 md:text-4xl"
          >
            {inspirations[currentIndex]}
          </motion.span>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-75 blur-lg animate-pulse" />
          <Avatar className="relative w-64 h-64 border-4 border-white shadow-lg dark:border-gray-800">
            <AvatarImage src="/profil2.png" alt="Salim Diallo" />
          </Avatar>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
