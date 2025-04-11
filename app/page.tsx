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

import Skills from "../components/Sections/portfolio/Skills"
import About from "../components/Sections/portfolio/about"
import Services from "@/components/Sections/Services"
import MarketingHook from "@/components/Sections/MarketingHook"

export default function IndexPage() {
  return (
    <div>
      {/* Home Section */}
      <Hero />
      <Services />
      <MarketingHook />
      <Projects />

      <Contacts />

      <Footer />
    </div>
  )
}
