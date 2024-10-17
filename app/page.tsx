import Link from "next/link"
import { Contact } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Contacts } from "@/components/Sections/Contact"
import Footer from "@/components/Sections/Footer"
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects"

import Skills from "../components/Sections/Skills"
import About from "../components/Sections/about"
import { Icons } from "../components/icons"

export default function IndexPage() {
  return (
    <div>
      {/* Home Section */}
      <Hero />
      {/* Skills Section */}
      <Skills />

      {/* Projects Section  */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}

      <Contacts />

      {/* Footer */}
      <Footer />
    </div>
  )
}
