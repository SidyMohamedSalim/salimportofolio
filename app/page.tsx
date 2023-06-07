import Link from "next/link"
import { Contact } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Contacts } from "@/components/Sections/Contact"
import Footer from "@/components/Sections/Footer"
import Projects from "@/components/Sections/Projects"

import Skills from "../components/Sections/Skills"
import About from "../components/Sections/about"
import { Icons } from "../components/icons"

export default function IndexPage() {
  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="container m-auto flex flex-wrap-reverse items-center justify-center  gap-6 rounded-t-3xl pb-8 pt-32  md:grid-cols-2"
      >
        <div className="flex flex-col justify-center align-middle md:pr-20">
          <div className="m-auto flex max-w-[980px] flex-col items-start justify-center gap-2 ">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              &quot;Hello I&apos;m{" "}
              <span className="italic text-sky-500"> Salim Diallo</span> &quot;
              <br className="hidden sm:inline" />
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I am a web and mobile developer passionate about technology. My
              motto is to always learn and always improve.
            </p>
          </div>
          <div className="my-4 flex gap-4">
            <Link
              href={"mailto:" + siteConfig.email}
              rel="noreferrer"
              target={"_blank"}
              className={buttonVariants()}
            >
              Contact Me Now
            </Link>
          </div>
        </div>
        <div className=" xs:flex-col  flex text-center  md:justify-end ">
          <Avatar className="h-60 w-60 border-4 border-sky-500">
            <AvatarImage src="/profil2.png" alt="Ohm-School" />
          </Avatar>
        </div>
      </section>

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
