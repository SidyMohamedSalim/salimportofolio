import React from "react"

export const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className="mx-auto flex h-12 justify-center text-2xl font-bold text-sky-500">
      <h1 className="border-b border-sky-500 ">{title}</h1>
    </div>
  )
}
