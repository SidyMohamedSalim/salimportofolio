import React from "react"
import Link from "next/link"

// import { } from "framer-

import { siteConfig } from "@/config/site"

import { Avatar, AvatarImage } from "../ui/avatar"
import { buttonVariants } from "../ui/button"

const Hero: React.FC = () => {
  return (
    <section id="home" className="container px-4 pt-32 pb-16 mx-auto">
      <div className="flex flex-col-reverse gap-12 justify-between items-center md:flex-row">
        <div
          className="flex flex-col justify-center items-start max-w-xl"
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Salim Diallo
            </span>
          </h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            Web and mobile developer passionate about technology. My motto:
            Always learning, always improving.
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
              href="#projects"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View My Work
            </Link>
          </div>
        </div>
        <div
          className="relative"
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-75 blur-lg animate-pulse" />
          <Avatar className="relative w-64 h-64 border-4 border-white shadow-lg dark:border-gray-800">
            <AvatarImage src="/profil2.png" alt="Salim Diallo" />
          </Avatar>
        </div>
      </div>
    </section>
  )
}

export default Hero
