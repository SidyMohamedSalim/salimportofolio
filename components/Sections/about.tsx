"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { TitleSection } from "../TitleSection"

interface GeekTypingAnimationProps {
  text: string
  duration?: number
  className?: string
  delay?: number
  showCursor?: boolean
}

export function GeekTypingAnimation({
  text,
  duration = 50,
  className,
  delay = 0,
  showCursor = true,
}: GeekTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [i, setI] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const elementRef = useRef<HTMLDivElement>(null)

  // Effet de clignotement du curseur
  useEffect(() => {
    if (!showCursor) return

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [showCursor])

  // Observer d'intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  // Effet de frappe
  useEffect(() => {
    if (!isVisible) return

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => {
          const nextChar = text[i]
          return prev + nextChar
        })
        setI(i + 1)
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => clearInterval(typingEffect)
  }, [duration, i, text, isVisible])

  return (
    <div ref={elementRef} className={cn("relative font-mono", className)}>
      <span className="">
        {isVisible && (
          <>
            <span className="opacity-50">{"$ "}</span>
            {displayedText}
          </>
        )}
        {showCursor && isVisible && (
          <span
            className={cn(
              "inline-block -mb-1 ml-1 w-2 h-4",
              cursorVisible ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </span>
    </div>
  )
}

export default function About() {
  const paragraph1 = "Hi, I'm Salim Diallo. Delighted to meet you."
  const paragraph2 = `Since the start of my journey as an Independent Developer more than 5 years ago
    years, I worked remotely for agencies, consulted startups and collaborated with talented people to create digital products for
    professional and consumer use.`
  const paragraph3 = `I am quietly confident, naturally curious and I constantly working to improve my Skills and to
    remain up to date at a time.`

  return (
    <section
      id="about"
      className="isolate overflow-hidden relative px-6 py-12 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 opacity-20 -z-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] opacity-10 shadow-xl ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="mb-12 text-center">
          <TitleSection title="About me" />
        </div>
        <figure className="mt-10">
          <blockquote className="space-y-8 text-base sm:text-lg">
            <GeekTypingAnimation
              text={paragraph1}
              duration={30}
              className="block opacity-0 animate-fadeIn"
            />
            <GeekTypingAnimation
              text={paragraph2}
              duration={20}
              delay={2000}
              className="block opacity-0 animate-fadeIn"
            />
            <GeekTypingAnimation
              text={paragraph3}
              duration={25}
              delay={6000}
              className="block opacity-0 animate-fadeIn"
            />
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto w-10 h-10 rounded-full ring-2"
              src="/profil2.png"
              alt=""
            />
            <div className="flex justify-center items-center mt-4 space-x-3 text-base">
              <div className="font-semibold">
                <GeekTypingAnimation
                  text="Salim Diallo"
                  duration={50}
                  delay={8000}
                  className="opacity-0 animate-fadeIn"
                />
              </div>
              <span className="text-green-500">|</span>
              <div>
                <GeekTypingAnimation
                  text="CEO of Ohm Vision"
                  duration={50}
                  delay={9000}
                  className="opacity-0 animate-fadeIn"
                />
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
