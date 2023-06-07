import React from "react"
import { Link } from "lucide-react"

import { TitleSection } from "../TitleSection"
import { Icons } from "../icons"

const Projects = () => {
  return (
    <section
      id="project"
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] opacity-30  shadow-xl  ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <TitleSection title="Projects" />
        <div className="mt-10 flex flex-wrap justify-evenly">
          {/* Project */}
          <div className="my-3 w-80 rounded-md  px-3 pb-5 shadow-md shadow-sky-300">
            <h1 className="p-4 text-center text-lg font-bold">Tweeter Clone</h1>
            <p className="text-md ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              voluptatum? Eveniet amet dignissimos autem nam enim quae sunt,
              ullam rem mollitia error nostrum suscipit esse quidem neque
              accusamus ratione praesentium?
            </p>
            <div className="mt-5 flex justify-end pr-5">
              <div className="m-2 flex h-10 w-10 cursor-pointer  items-center justify-center rounded-md border border-sky-300 p-1 text-center align-middle shadow-md">
                <Icons.code />
              </div>
              <div className="m-2 flex h-10 w-10 cursor-pointer  items-center justify-center rounded-md border border-sky-300 p-1 text-center align-middle shadow-md">
                <Icons.views />
              </div>
            </div>
          </div>
          {/* Project */}
          <div className="my-3 w-80 rounded-md  px-3 pb-5 shadow-md shadow-sky-300">
            <h1 className="p-4 text-center text-lg font-bold">Tic Tac To</h1>
            <p className="text-md ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              voluptatum? Eveniet amet dignissimos autem nam enim quae sunt,
              ullam rem mollitia error nostrum suscipit esse quidem neque
              accusamus ratione praesentium?
            </p>
            <div className="mt-5 flex justify-end pr-5">
              <div className="m-2 flex h-10 w-10 cursor-pointer  items-center justify-center rounded-md border border-sky-300 p-1 text-center align-middle shadow-md">
                <Icons.code />
              </div>
              <div className="m-2 flex h-10 w-10 cursor-pointer  items-center justify-center rounded-md border border-sky-300 p-1 text-center align-middle shadow-md">
                <Icons.views />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
