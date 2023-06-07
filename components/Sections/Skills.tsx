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
              <Skill name="talwind" icon="/talwind-icon.svg" />
              {/* skyll */}
              <Skill name="Figma" iscolor={true} icon="/figma-icon.svg" />
              {/* skyll */}
            </ul>
          </div>

          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Front-End</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="typescript" icon="/typescript-icon.svg" />

              {/* skyll */}
              <Skill name="react & next" iscolor={true} icon="react-icon.svg" />

              {/* skyll */}
              <Skill name="python" icon="/python-icon.svg" />
            </ul>
          </div>
          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Back-End</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="node Js" icon="/nodejs-icon.svg" />
              {/* skyll */}
              <Skill name="Prisma" iscolor={true} icon="/prisma-icon.svg" />
              {/* skyll */}
              <Skill name="django" icon="/django-icon.svg" />
              {/* skyll */}
              <Skill
                name="postgresql"
                iscolor={true}
                icon="/postgresql-icon.svg"
              />
            </ul>
          </div>
          {/* Categorie */}
          <div className="sm:mx-10">
            <h3 className="text-2xl font-bold fade-in">Autres</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* skyll */}
              <Skill name="git & github" icon="/github-icon.svg" />
              {/* skyll */}
              <Skill name="vercel" iscolor={true} icon="/vercel-icon.svg" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
