import React from "react"

import { Icons } from "./icons"

const Skill = ({
  name,
  iscolor = false,
}: {
  name: string
  iscolor?: boolean
}) => {
  return (
    <>
      <span>
        <li className="flex items-center gap-2 text-lg">
          <span>
            <Icons.logo className="h-6 w-6" />
          </span>
          {iscolor ? (
            <span className="font-bold text-sky-500">{name}</span>
          ) : (
            <span className="font-bold">{name}</span>
          )}
        </li>
      </span>
    </>
  )
}

export default Skill
