import React from "react"

import { Icons } from "./icons"

const Skill = ({
  name,
  iscolor = false,
  icon,
}: {
  name: string
  iscolor?: boolean
  icon?: string
}) => {
  return (
    <>
      <span>
        <li className="flex items-center gap-2 text-lg">
          <span>
            {icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={icon}
                alt={name}
                className="h-6 w-6  rounded-full bg-white dark:p-1"
              />
            ) : (
              <Icons.logo className="h-6 w-6" />
            )}
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
