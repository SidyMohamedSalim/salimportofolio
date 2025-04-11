import Link from "next/link"
import { Contact } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Contacts } from "@/components/Sections/Contact"
import { CV } from "@/components/Sections/portfolio/Cv"
import Footer from "@/components/Sections/Footer"
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects"

import Services from "@/components/Sections/Services"
import HeroPortfolio from "@/components/Sections/portfolio/HeroPortfolio"
import Skills from "@/components/Sections/portfolio/Skills"
import About from "@/components/Sections/portfolio/about"

export default function PortofolioPage() {
  return (
    <div>
      {/* Home Section */}
      <HeroPortfolio />

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
