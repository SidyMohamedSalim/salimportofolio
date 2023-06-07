import React from "react"
import { Link } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import { siteConfig } from "../../config/site"
import { TitleSection } from "../TitleSection"
import { Icons } from "../icons"

export const Contacts = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] opacity-30  shadow-xl  ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <TitleSection title="Contacts Me" />

        <p className="pt-7 text-center">
          ask me any question do you want to know about me
        </p>
        <div className="mt-10 flex flex-wrap justify-center">
          {/* contact */}

          <div className="mx-4 my-3 flex justify-center rounded-2xl bg-sky-100 p-1 px-3 py-4  align-middle dark:bg-sky-900">
            <span>
              <Link className="text-md mx-2 h-8 w-8 rounded-md bg-sky-400 p-1 shadow-md">
                <Icons.gitHub />
              </Link>
            </span>
            <h1 className="mx-2 text-lg font-semibold">Github</h1>
          </div>

          {/* contact */}
          <div className="mx-4 my-3 flex justify-center rounded-2xl bg-sky-100 p-1 px-3 py-4 align-middle dark:bg-sky-900">
            <span>
              <Link className="text-md mx-2 h-8 w-8 rounded-md bg-sky-400 p-1 shadow-md">
                <Icons.twitter />
              </Link>
            </span>
            <h1 className="mx-2 text-lg font-semibold">Tweeter</h1>
          </div>

          {/* contact */}
          <div className="mx-4 my-3 flex justify-center rounded-2xl bg-sky-100 p-1 px-3 py-4 align-middle dark:bg-sky-900">
            <span>
              <Link className="text-md mx-2 h-8 w-8 rounded-md bg-sky-400 p-1 shadow-md">
                <Icons.gitHub />
              </Link>
            </span>
            <h1 className="mx-2 text-lg font-semibold">{siteConfig.email}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
