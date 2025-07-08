"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Coffee, Heart, Feather } from "lucide-react"

export function DonationSection() {
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
      wrapper.style.animation = `gentleFloat ${duration}s ease-in-out ${delay}s infinite, gentleFade ${duration}s ease-in-out ${delay}s infinite`

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
      <Coffee key="coffee1" size={24} />,
      <Heart key="heart1" size={20} />,
      <Feather key="feather1" size={22} />,
      <Coffee key="coffee2" size={18} />,
      <Heart key="heart2" size={16} />,
    ]

    elements.forEach((element, index) => {
      createFloatingElement(
        element,
        Math.random() * 2,
        8 + Math.random() * 4,
        15 + Math.random() * 70,
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
    <section className="relative py-16 md:py-20 lg:py-28 bg-secondary overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="donation-texture" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="0.4" fill="currentColor" className="text-accent/10" />
                <circle cx="12" cy="8" r="0.3" fill="currentColor" className="text-primary/8" />
                <circle cx="18" cy="15" r="0.5" fill="currentColor" className="text-accent/15" />
                <circle cx="7" cy="20" r="0.2" fill="currentColor" className="text-primary/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#donation-texture)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent"></div>
      </div>

      {/* Floating illustrations */}
      <div ref={illustrationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft border border-primary/5 text-center">
            {/* Hand-drawn coffee cup illustration */}
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 relative">
                <Coffee className="h-10 w-10 text-accent transform rotate-12" />

                {/* Decorative steam lines */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <svg className="w-8 h-6 text-accent/30" viewBox="0 0 32 24" fill="none">
                    <path
                      d="M8 20C8 16 10 14 10 10C10 14 12 16 12 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M16 20C16 16 18 14 18 10C18 14 20 16 20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-pulse delay-500"
                    />
                    <path
                      d="M24 20C24 16 26 14 26 10C26 14 28 16 28 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-pulse delay-1000"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating hearts */}
              <div className="absolute -top-4 -left-6 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-accent/60 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Feather className="h-3 w-3 text-primary/60 animate-pulse delay-1000" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Love What You're{" "}
              <span className="text-accent italic relative">
                Reading?
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path
                    d="M0,8 Q25,2 50,6 T100,4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-accent/40"
                  />
                </svg>
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-primary/80 font-primary text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Burrowed is made with heart, not paywalls. If our pages moved you, consider buying us a coffee — and help
              keep stories flowing, freely.
            </p>

            {/* Main CTA Button */}
            <div className="mb-8">
              <Link
                href="https://buymeacoffee.com/burrowed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 sm:px-12 sm:py-5 rounded-2xl bg-accent text-white font-primary font-bold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group transform hover:scale-[1.02] hover:-translate-y-1"
              >
                <Coffee className="mr-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-12" />
                Buy Us a Coffee
                <Heart className="ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110 text-white/80" />
              </Link>
            </div>

            {/* Supporting text */}
            <p className="text-primary/60 font-primary text-sm md:text-base italic">
              Every cup helps us spotlight more voices and stories that matter.
            </p>

            {/* Decorative elements */}
            <div className="mt-8 flex justify-center items-center gap-4 opacity-60">
              <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
              <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
              <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
            </div>

            {/* Gratitude note */}
            <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-primary/10">
              <p className="text-primary/70 font-primary text-sm md:text-base leading-relaxed">
                <strong className="text-primary">Thank you</strong> for being part of our literary community. Your
                support, whether through reading, sharing, or contributing, keeps independent publishing alive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for gentle animations */}
      <style jsx global>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
        
        @keyframes gentleFade {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  )
}
