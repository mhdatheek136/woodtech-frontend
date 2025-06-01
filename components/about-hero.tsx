"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Feather, BookOpen, Heart, Star } from "lucide-react"

export function AboutHero() {
  const illustrationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createFloatingElement = (
      element: React.ReactNode,
      delay: number,
      duration: number,
      xStart: number,
      yStart: number,
    ) => {
      const wrapper = document.createElement("div")
      wrapper.style.position = "absolute"
      wrapper.style.left = `${xStart}%`
      wrapper.style.top = `${yStart}%`
      wrapper.style.opacity = "0"
      wrapper.style.transform = "translate(-50%, -50%)"
      wrapper.style.animation = `heroFloat ${duration}s ease-in-out ${delay}s infinite, heroFade ${duration}s ease-in-out ${delay}s infinite`

      const container = document.createElement("div")
      container.className = "text-accent/20"
      wrapper.appendChild(container)

      if (illustrationRef.current) {
        illustrationRef.current.appendChild(wrapper)
        // @ts-ignore - This is a hack to render React elements into the DOM
        const tempDiv = document.createElement("div")
        tempDiv.style.display = "none"
        document.body.appendChild(tempDiv)
        tempDiv.innerHTML = `<div>${element}</div>`
        const node = tempDiv.firstChild?.firstChild
        if (node) container.appendChild(node)
        document.body.removeChild(tempDiv)
      }
    }

    // Add gentle floating elements
    const elements = [
      <Feather key="feather1" size={28} />,
      <BookOpen key="book1" size={32} />,
      <Heart key="heart1" size={24} />,
      <Star key="star1" size={20} />,
      <Feather key="feather2" size={24} />,
      <BookOpen key="book2" size={28} />,
    ]

    elements.forEach((element, index) => {
      createFloatingElement(
        element,
        Math.random() * 2,
        10 + Math.random() * 4,
        10 + Math.random() * 80,
        20 + Math.random() * 60,
      )
    })

    return () => {
      if (illustrationRef.current) {
        illustrationRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-white via-secondary/50 to-accent/5 overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle texture patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="about-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-accent/15" />
                <circle cx="12" cy="8" r="0.3" fill="currentColor" className="text-primary/10" />
                <circle cx="7" cy="15" r="0.4" fill="currentColor" className="text-accent/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-texture)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent"></div>
      </div>

      {/* Floating illustrations */}
      <div ref={illustrationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Background image with artistic overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-0">
        <Image
          src="/images/burrowed-cover.png"
          alt="Background texture"
          fill
          className="object-cover blur-3xl scale-110"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8">
            <Feather className="h-10 w-10 text-accent" />
          </div>

          {/* Main heading */}
          <h1 className="font-secondary text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
            About{" "}
            <span className="text-accent italic relative">
              Burrowed
              {/* Decorative underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path
                  d="M0,10 Q25,3 50,8 T100,6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-accent/40"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-primary/80 font-primary text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 max-w-3xl mx-auto">
            A quiet home for loud thoughts — published by{" "}
            <span className="text-accent font-medium">Woodland Publishing</span>.
          </p>

          {/* Woodland Publishing logo */}
          <div className="inline-flex items-center justify-center mb-8">
            <Image
              src="/images/woodland-publishing-logo.png"
              alt="Woodland Publishing"
              width={140}
              height={50}
              className="opacity-80"
            />
          </div>

          {/* Decorative quote */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-primary/70 font-primary text-lg italic leading-relaxed">
              "In a world that often demands loudness, we celebrate the power of quiet reflection and thoughtful
              expression."
            </blockquote>
          </div>
        </div>
      </div>

      {/* CSS for hero animations */}
      <style jsx global>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        
        @keyframes heroFade {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
