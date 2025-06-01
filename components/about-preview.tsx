"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Feather, BookOpen, Heart, Sparkles } from "lucide-react"

export function AboutPreview() {
  const illustrationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createFloatingIllustration = (
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

    // Add gentle floating illustrations
    const illustrations = [
      <Feather key="feather1" size={24} />,
      <BookOpen key="book1" size={28} />,
      <Heart key="heart1" size={20} />,
      <Sparkles key="sparkle1" size={22} />,
      <Feather key="feather2" size={18} />,
      <BookOpen key="book2" size={24} />,
    ]

    illustrations.forEach((element, index) => {
      createFloatingIllustration(
        element,
        Math.random() * 2,
        8 + Math.random() * 4,
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
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden">
      {/* Artistic background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Hand-drawn style texture */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="organic-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.5" fill="currentColor" className="text-accent/10" />
                <circle cx="8" cy="7" r="0.3" fill="currentColor" className="text-primary/10" />
                <circle cx="15" cy="12" r="0.4" fill="currentColor" className="text-accent/15" />
                <circle cx="5" cy="15" r="0.2" fill="currentColor" className="text-primary/15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-texture)" />
          </svg>
        </div>

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      </div>

      {/* Floating illustrations */}
      <div ref={illustrationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-12 md:mb-16">
            {/* Decorative element */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Feather className="h-8 w-8 text-accent" />
            </div>

            {/* Poetic heading */}
            <h2 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Stories That Find You,{" "}
              <span className="text-accent italic relative">
                Monthly
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

            {/* Subtitle with Woodland Publishing */}
            <p className="text-primary/60 font-primary text-lg md:text-xl mb-4">
              A Monthly Journey by <span className="text-accent font-medium">Woodland Publishing</span>
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Left column - Description */}
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-primary/80 font-primary text-xl md:text-2xl leading-relaxed mb-8 font-light">
                  Published each month by <span className="text-accent font-medium">Woodland Publishing</span>, Burrowed
                  is a space for stories, poems, and thoughts that don't shout, but linger.
                </p>

                <p className="text-primary/70 font-primary text-lg leading-relaxed mb-8">
                  We spotlight fresh voices and deep reflections that burrow into your mind long after the last page.
                  Each issue is a carefully curated collection of literary gems that celebrate the art of storytelling
                  in all its forms.
                </p>

                {/* Features with artistic styling */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-secondary font-semibold text-primary mb-1">Thoughtful Curation</h4>
                      <p className="text-primary/70 font-primary">
                        Every piece is selected for its ability to resonate and inspire reflection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-secondary font-semibold text-primary mb-1">Diverse Voices</h4>
                      <p className="text-primary/70 font-primary">
                        From emerging writers to established authors, we celebrate literary diversity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-secondary font-semibold text-primary mb-1">Monthly Discovery</h4>
                      <p className="text-primary/70 font-primary">
                        Fresh content delivered monthly, creating anticipation and literary ritual.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white text-primary border border-primary/20 font-primary font-semibold hover:bg-secondary/50 transition-all duration-300 shadow-card hover:shadow-soft group text-sm sm:text-base"
                >
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right column - Woodland Publishing showcase */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-soft border border-primary/5 transform transition-all duration-500 hover:shadow-xl">
                  {/* Woodland Publishing logo */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-6">
                      <Image
                        src="/images/woodland-publishing-logo.png"
                        alt="Woodland Publishing"
                        width={160}
                        height={60}
                        className="opacity-90"
                      />
                    </div>
                    <p className="text-primary/60 font-primary text-sm">
                      Cultivating literary excellence since our founding
                    </p>
                  </div>

                  {/* Publishing stats or highlights */}
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 rounded-2xl bg-accent/5">
                      <div className="font-secondary text-2xl font-bold text-accent mb-1">12+</div>
                      <div className="text-primary/60 font-primary text-sm">Monthly Issues</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/5">
                      <div className="font-secondary text-2xl font-bold text-primary mb-1">200+</div>
                      <div className="text-primary/60 font-primary text-sm">Published Authors</div>
                    </div>
                  </div>

                  {/* Publisher description */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5">
                    <p className="text-primary/70 font-primary text-center italic">
                      "We believe in the power of words to transform, inspire, and connect us across cultures and
                      experiences."
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"></div>
              </div>
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
