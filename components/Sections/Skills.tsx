import React from "react"

import { TitleSection } from "../TitleSection"
import { Icons } from "../icons"
import Skill from "../skill"

const Skills = () => {
  return (
    <section
      id="skill"
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] opacity-30  shadow-xl  ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <TitleSection title="Skills" />
        <div className="mt-10 flex flex-wrap justify-between">
          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Design</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="talwind" />
              {/* skyll */}
              <Skill name="Figma" iscolor={true} />
              {/* skyll */}
            </ul>
          </div>

          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Front-End</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="typescript" />

              {/* skyll */}
              <Skill name="react & next" iscolor={true} />
              {/* skyll */}
              <Skill name="php" />
              {/* skyll */}
              <Skill name="python" />
            </ul>
          </div>
          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Back-End</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="node Js" />
              {/* skyll */}
              <Skill name="Prisma" iscolor={true} />
              {/* skyll */}
              <Skill name="django" />
              {/* skyll */}
              <Skill name="postgresql" iscolor={true} />
            </ul>
          </div>
          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Autres</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <span>
                <li className="flex items-center gap-2 text-lg">
                  <span>
                    <Icons.logo className="w-6 h-6" />
                  </span>
                  <span className="font-bold text-sky-500">Figma</span>
                </li>
              </span>
              {/* skyll */}
              <Skill name="git & github" />
              {/* skyll */}
              <Skill name="vercel" iscolor={true} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
