"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Feather, Star, Heart } from "lucide-react"

export function SubmissionCallout() {
  const illustrationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createArtisticElement = (
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
      wrapper.style.animation = `artisticFloat ${duration}s ease-in-out ${delay}s infinite, artisticFade ${duration}s ease-in-out ${delay}s infinite`

      const container = document.createElement("div")
      container.className = "text-accent/15"
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

    // Add artistic floating elements
    const elements = [
      <Feather key="feather1" size={28} />,
      <Star key="star1" size={24} />,
      <Heart key="heart1" size={20} />,
      <Feather key="feather2" size={32} />,
      <Star key="star2" size={18} />,
      <Heart key="heart2" size={26} />,
    ]

    elements.forEach((element, index) => {
      createArtisticElement(
        element,
        Math.random() * 3,
        10 + Math.random() * 6,
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
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-accent/5 to-primary/5 overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Ink swirl pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="ink-swirl" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M10,10 Q20,5 30,15 T50,20 Q40,30 20,25 T10,10"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-accent/20"
                />
                <circle cx="15" cy="35" r="1" fill="currentColor" className="text-primary/15" />
                <circle cx="35" cy="8" r="0.5" fill="currentColor" className="text-accent/25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ink-swirl)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent"></div>
      </div>

      {/* Floating artistic elements */}
      <div ref={illustrationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side - Artistic illustration */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="relative">
                {/* Main artistic element */}
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  {/* Feather pen illustration */}
                  <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 shadow-soft">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                        <Feather className="h-10 w-10 text-accent transform rotate-12" />
                      </div>

                      {/* Decorative stars */}
                      <div className="relative">
                        <Star className="absolute -top-8 -left-4 h-4 w-4 text-accent/40 animate-pulse" />
                        <Star className="absolute -top-4 right-2 h-3 w-3 text-primary/40 animate-pulse delay-1000" />
                        <Star className="absolute top-2 -right-6 h-5 w-5 text-accent/30 animate-pulse delay-2000" />

                        {/* Ink swirl decoration */}
                        <svg
                          className="w-32 h-16 mx-auto text-accent/30"
                          viewBox="0 0 120 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10,30 Q30,10 60,30 T110,25"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                          />
                          <circle cx="15" cy="35" r="2" fill="currentColor" className="animate-pulse delay-500" />
                          <circle cx="105" cy="20" r="1.5" fill="currentColor" className="animate-pulse delay-1500" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent/60" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 text-center lg:text-left">
              {/* Header section */}
              <div className="mb-10">
                {/* Community badge */}
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-primary font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Join Our Literary Community
                </div>

                {/* Main heading */}
                <h2 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                  Your Words{" "}
                  <span className="text-accent italic relative">
                    Belong Here
                    {/* Decorative underline */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4"
                      viewBox="0 0 100 15"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,10 Q25,3 50,8 T100,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-accent/40"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-primary/80 font-primary text-xl md:text-2xl leading-relaxed mb-8">
                  At Burrowed, every voice matters. Share your story, your poetry, your truth — and become part of a
                  literary revolution.
                </p>
              </div>

              {/* Contributor quote */}
              <div className="mb-10">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-accent/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/80 font-primary text-lg italic leading-relaxed mb-3">
                        "Submitting to Burrowed felt like finally being heard."
                      </p>
                      <p className="text-primary/60 font-primary text-sm">— Anonymous Contributor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <div className="text-center mb-8">
                <Link
                  href="/submit"
                  className="inline-flex items-center px-8 py-4 sm:px-12 sm:py-5 rounded-2xl bg-accent text-white font-primary font-bold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group transform hover:scale-[1.02]"
                >
                  Submission Guidelines
                  <Feather className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Supporting text */}
              <div className="text-center">
                <p className="text-primary/60 font-primary text-sm">
                  We accept poetry, fiction, essays, art, and experimental work.
                </p>
              </div>

              {/* Community highlights */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                    <Feather className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">All Voices Welcome</h4>
                  <p className="text-primary/60 font-primary text-sm">From first-time writers to seasoned authors</p>
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">Supportive Community</h4>
                  <p className="text-primary/60 font-primary text-sm">Join passionate storytellers and book lovers</p>
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">Literary Excellence</h4>
                  <p className="text-primary/60 font-primary text-sm">Published by Woodland Publishing with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for artistic animations */}
      <style jsx global>{`
        @keyframes artisticFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-12px) rotate(5deg);
          }
        }
        
        @keyframes artisticFade {
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
