"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Calendar, Leaf, Sparkles, MapPin } from "lucide-react"

export function SubmissionAnnouncement() {
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
      wrapper.style.animation = `autumnFloat ${duration}s ease-in-out ${delay}s infinite, autumnFade ${duration}s ease-in-out ${delay}s infinite`

      const container = document.createElement("div")
      container.className = "text-orange-300/20"
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

    // Add autumn floating elements
    const elements = [
      <Leaf key="leaf1" size={24} />,
      <Sparkles key="sparkle1" size={20} />,
      <Leaf key="leaf2" size={18} />,
      <Sparkles key="sparkle2" size={16} />,
      <Leaf key="leaf3" size={22} />,
      <Sparkles key="sparkle3" size={18} />,
    ]

    elements.forEach((element, index) => {
      createFloatingElement(
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
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-orange-50/30 via-amber-50/20 to-red-50/30 overflow-hidden">
      {/* Autumn artistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Autumn texture pattern */}
        <div className="absolute inset-0 opacity-25">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="autumn-texture" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-orange-300/15" />
                <circle cx="15" cy="12" r="0.3" fill="currentColor" className="text-red-300/10" />
                <circle cx="25" cy="8" r="0.4" fill="currentColor" className="text-amber-300/20" />
                <circle cx="8" cy="20" r="0.2" fill="currentColor" className="text-orange-400/15" />
                <circle cx="20" cy="25" r="0.6" fill="currentColor" className="text-red-400/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#autumn-texture)" />
          </svg>
        </div>

        {/* Gradient overlays with autumn colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/15 to-transparent"></div>
      </div>

      {/* Floating autumn illustrations */}
      <div ref={illustrationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft border border-orange-200/30 text-center">
            {/* Autumn decorative header */}
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 mb-6 relative border border-orange-200/50">
                <Calendar className="h-10 w-10 text-orange-600 transform rotate-12" />

                {/* Floating autumn leaves */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-100/80 rounded-full flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-red-500/70 animate-pulse transform rotate-45" />
                </div>
                <div className="absolute -top-1 -right-4 w-6 h-6 bg-amber-100/80 rounded-full flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-amber-600/70 animate-pulse delay-1000" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-orange-100/80 rounded-full flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-orange-500/70 animate-pulse delay-500 transform -rotate-12" />
                </div>
              </div>

              {/* Rainbow arc decoration */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <svg className="w-32 h-16 opacity-60" viewBox="0 0 128 64" fill="none">
                  <path
                    d="M8 56C8 29.5 29.5 8 56 8C82.5 8 104 29.5 104 56"
                    stroke="url(#rainbow-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                      <stop offset="16.66%" stopColor="#f97316" stopOpacity="0.6" />
                      <stop offset="33.33%" stopColor="#eab308" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
                      <stop offset="66.66%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="83.33%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Announcement content */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 rounded-full text-sm font-primary font-medium mb-6 border border-orange-200/50">
                <MapPin className="w-4 h-4 mr-2" />
                Now Accepting Submissions
              </div>

              <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Submissions Open for{" "}
                <span className="text-orange-600 italic relative">
                  Year 1 - Fall Issue
                  {/* Decorative underline with autumn colors */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path
                      d="M0,8 Q25,2 50,6 T100,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-orange-400/60"
                    />
                  </svg>
                </span>
              </h2>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 text-primary/70 font-primary text-lg mb-4">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span>Publishing October 2025</span>
                </div>
              </div>
            </div>

            {/* Theme section */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 md:p-8 border border-orange-200/30 mb-6">
                <h3 className="font-secondary text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                  <Sparkles className="h-6 w-6 text-orange-500" />
                  Theme: "Rainbows in Darkness"
                </h3>
                <p className="text-primary/80 font-primary text-lg md:text-xl leading-relaxed mb-4">
                  We're seeking stories, poems, and reflections that find light in shadow, hope in despair, and beauty
                  in the most unexpected places.
                </p>
                <p className="text-primary/70 font-primary text-base md:text-lg leading-relaxed">
                  Like autumn leaves that blaze with color before they fall, we want work that discovers brilliance in
                  transition, strength in vulnerability, and rainbows that emerge from the darkest storms.
                </p>
              </div>

              {/* Theme inspiration points */}
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/60 rounded-2xl border border-orange-100/50">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-red-600 transform rotate-12" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">Finding Light</h4>
                  <p className="text-primary/60 font-primary text-sm">Stories of hope emerging from difficult times</p>
                </div>
                <div className="p-4 bg-white/60 rounded-2xl border border-amber-100/50">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">Beautiful Transitions</h4>
                  <p className="text-primary/60 font-primary text-sm">
                    Poetry about change, growth, and transformation
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-2xl border border-orange-100/50">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-secondary font-semibold text-primary mb-2">Unexpected Joy</h4>
                  <p className="text-primary/60 font-primary text-sm">Essays on discovering beauty in darkness</p>
                </div>
              </div>
            </div>

            {/* Submission details */}
            <div className="text-center">
              <p className="text-primary/70 font-primary text-base md:text-lg mb-6 leading-relaxed">
                <strong className="text-primary">Submission Deadline:</strong> August 31, 2025
                <br />
                <strong className="text-primary">Publication:</strong> October 2025
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center items-center gap-3 opacity-60 mb-6">
                <div className="w-2 h-2 bg-red-400/40 rounded-full"></div>
                <div className="w-1 h-1 bg-orange-400/40 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400/40 rounded-full"></div>
                <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400/40 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400/40 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400/40 rounded-full"></div>
              </div>

              <p className="text-primary/60 font-primary text-sm italic">
                Let your words be the rainbow that breaks through someone's storm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for autumn animations */}
      <style jsx global>{`
        @keyframes autumnFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-12px) rotate(10deg);
          }
        }
        
        @keyframes autumnFade {
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
