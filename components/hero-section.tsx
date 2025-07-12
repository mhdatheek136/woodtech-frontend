"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Book, Feather, FileText, BookOpen, Bookmark, PenTool, Quote, ArrowRight, Star, Heart, Sun } from "lucide-react"
import FlipBookReader from "./FlipBookReader"

interface Magazine {
  id: number
  title: string
  publish_date: string
  description: string
  cover_image: string  // matches the API field
  issue_number: string
  year: number;          // Replaced volume_number
  season: string;        // Replaced season_number (values: 'Winter','Spring','Summer','Fall')
  pdf_file: string
  is_published: boolean
  page_images: string[]
}

export function HeroSection() {
  const animationRef = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)

  const [latestMagazine, setLatestMagazine] = useState<Magazine | null>(null)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api"
  // console.log("Fetching from:", `${API_BASE_URL}/magazines/latest/`)
  const [openMag, setOpenMag] = useState<Magazine | null>(null)

  // Fetch latest magazine data
  useEffect(() => {
    async function fetchLatestMagazine() {
      try {
        const res = await fetch(`${API_BASE_URL}/magazines/latest`)
        if (!res.ok) throw new Error("Failed to fetch latest magazine")
        const data = await res.json()
        setLatestMagazine(data)
      } catch (error) {
        console.error("Error fetching latest magazine:", error)
      }
    }
    fetchLatestMagazine()
  }, [])

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
      wrapper.style.transform = "translate(-50%, -50%) rotate(0deg)"
      wrapper.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, fadeInOut ${duration}s ease-in-out ${delay}s infinite, rotate ${
        duration * 2
      }s linear ${delay}s infinite`

      const container = document.createElement("div")
      container.className = "text-primary/15"
      wrapper.appendChild(container)

      if (animationRef.current) {
        animationRef.current.appendChild(wrapper)
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

    // Add floating elements with more variety
    const elements = [
      <Book key="book1" size={32} />,
      <Feather key="feather1" size={24} />,
      <FileText key="filetext1" size={28} />,
      <BookOpen key="bookopen1" size={36} />,
      <Book key="book2" size={20} />,
      <Feather key="feather2" size={32} />,
      <FileText key="filetext2" size={24} />,
      <BookOpen key="bookopen2" size={28} />,
      <Bookmark key="bookmark1" size={30} />,
      <PenTool key="pentool1" size={26} />,
      <Quote key="quote1" size={34} />,
      <Bookmark key="bookmark2" size={22} />,
      <Star key="star1" size={18} />,
      <Heart key="heart1" size={20} />,
      <Star key="star2" size={24} />,
      <Heart key="heart2" size={16} />,
    ]

    elements.forEach((element, index) => {
      createFloatingElement(
        element,
        Math.random() * 3,
        12 + Math.random() * 8,
        5 + Math.random() * 90,
        10 + Math.random() * 80,
      )
    })

    // Create falling sparkles animation
    const createSparkle = () => {
      if (!sparklesRef.current) return

      const sparkle = document.createElement("div")

      // Random position near the logo
      const centerX = 50 // Center of the screen
      const startY = 20 // Near the top where the logo is

      // Random ending position
      const xEnd = Math.random() * 100 - 50 // -50 to 50
      const yEnd = Math.random() * 100 + 50 // 50 to 150
      const rotation = Math.random() * 360
      const duration = 3 + Math.random() * 4

      sparkle.style.setProperty("--x-end", `${xEnd}px`)
      sparkle.style.setProperty("--y-end", `${yEnd}px`)
      sparkle.style.setProperty("--rotation", `${rotation}deg`)
      sparkle.style.setProperty("--duration", `${duration}s`)

      sparkle.className = "absolute w-1 h-1 bg-accent/30 rounded-full animate-sparkle"
      sparkle.style.left = `calc(${centerX}% + ${Math.random() * 40 - 20}px)`
      sparkle.style.top = `calc(${startY}% + ${Math.random() * 20 - 10}px)`

      sparklesRef.current.appendChild(sparkle)

      // Remove sparkle after animation completes
      setTimeout(() => {
        if (sparkle.parentNode === sparklesRef.current) {
          sparklesRef.current.removeChild(sparkle)
        }
      }, duration * 1000)
    }

    // Create falling stars animation
    const createFallingStar = () => {
      if (!sparklesRef.current) return

      const star = document.createElement("div")

      // Random starting position at the top
      const startX = Math.random() * 100
      const xDrift = Math.random() * 200 - 100 // -100 to 100px drift
      const rotation = Math.random() * 360
      const duration = 4 + Math.random() * 6
      const size = 1 + Math.random() * 2

      star.style.setProperty("--x-drift", `${xDrift}px`)
      star.style.setProperty("--rotation", `${rotation}deg`)
      star.style.setProperty("--duration", `${duration}s`)

      star.className = "absolute bg-accent/20 rounded-full animate-fallingStar"
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${startX}%`
      star.style.top = "0"

      sparklesRef.current.appendChild(star)

      // Remove star after animation completes
      setTimeout(() => {
        if (star.parentNode === sparklesRef.current) {
          sparklesRef.current.removeChild(star)
        }
      }, duration * 1000)
    }

    // Create sparkles at intervals
    const sparkleInterval = setInterval(createSparkle, 300)
    const starInterval = setInterval(createFallingStar, 800)

    return () => {
      if (animationRef.current) {
        animationRef.current.innerHTML = ""
      }
      clearInterval(sparkleInterval)
      clearInterval(starInterval)
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-secondary via-white to-secondary/50 overflow-hidden min-h-[85vh] flex items-center">
      {/* Enhanced artistic background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Layered pattern backgrounds */}
        <div className="absolute inset-0 bg-primary opacity-[0.02] pattern-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>

        {/* Woodland Publishing tree logo as background */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-56 md:h-56 opacity-[0.07]">
          <Image src="/images/woodland-publishing-logo.png" alt="Woodland Publishing" fill className="object-contain" />
        </div>

        {/* Container for falling sparkles */}
        <div ref={sparklesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>

        {/* New artistic elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="artistic-dots" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="0.8" fill="currentColor" className="text-accent/20" />
                <circle cx="10" cy="8" r="0.5" fill="currentColor" className="text-primary/15" />
                <circle cx="7" cy="12" r="0.6" fill="currentColor" className="text-accent/25" />
              </pattern>
              <pattern id="ink-strokes" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <path
                  d="M5,5 Q12,2 20,8 T25,15"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  fill="none"
                  className="text-primary/10"
                />
                <path
                  d="M2,15 Q8,12 15,18"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  fill="none"
                  className="text-accent/15"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artistic-dots)" />
            <rect width="100%" height="100%" fill="url(#ink-strokes)" />
          </svg>
        </div>

        {/* Organic shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/8 rounded-full blur-xl"></div>
      </div>

      {/* Background animation container */}
      <div ref={animationRef} className="absolute inset-0 overflow-hidden z-0"></div>

      {/* Blurred background image with artistic overlay */}
      <div className="absolute inset-0 opacity-[0.04] z-0">
        <Image
          src="/images/burrowed-cover.png"
          alt="Background texture"
          fill
          className="object-cover blur-3xl scale-110"
          priority
        />
        {/* Artistic overlay on the background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 mix-blend-multiply"></div>
      </div>

      {/* Main content */}
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
{/* Left Column - Magazine Display */}
<div className="lg:col-span-3 order-1 lg:order-1">
  <div className="relative group">
    {/* Updated outermost container: restored padding and kept rounded corners */}
    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 shadow-magazine-edge">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        {/* Magazine cover */}
        <div className="relative w-full max-w-[240px] md:max-w-[280px] aspect-[1275/1650] overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] shadow-magazine-inner">
          {latestMagazine ? (
            <Image
              src={latestMagazine.cover_image}
              alt={`Issue ${latestMagazine.issue_number} Cover`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="bg-gray-200 w-full h-full" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 border border-gray-200"></div>
        </div>

        {/* Issue details */}
        <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-primary font-bold mb-4 shadow-sm">
              <Sun className="w-4 h-4 mr-2 text-amber-600" />
              {latestMagazine
                ? `Latest Issue - ${latestMagazine.season} ${latestMagazine.year}`
                : "Loading..."}
            </div>
          <h2 className="font-secondary text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
            {latestMagazine ? latestMagazine.title : "Loading..."}
          </h2>
          <p className="text-primary/70 font-primary text-base md:text-lg mb-6 leading-relaxed">
            {latestMagazine ? latestMagazine.description : "Fetching latest magazine details..."}
          </p>
          {latestMagazine && (
            <button
              onClick={() => setOpenMag(latestMagazine)}
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Read Latest Issue
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
</div>


          {/* Right Column - Magazine Description (40% width) - Order 2 on mobile */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              {/* Tagline */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-primary font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>A Literary Space for the Quietly Brilliant
              </div>

              {/* Main description */}
              <h1 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Where literature takes many forms
              </h1>

              <p className="text-primary/80 font-primary text-lg md:text-xl mb-8 leading-relaxed">
                A monthly space where literature takes many forms — stories, poems, reflections, and the quiet
                brilliance of thoughtful minds.
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-primary/70">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="font-primary">Poetry, prose & visual narratives</span>
                </div>
                <div className="flex items-center text-primary/70">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="font-primary">Emerging & established voices</span>
                </div>
                <div className="flex items-center text-primary/70">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="font-primary">Published by Woodland Publishing</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/submit"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-primary text-white font-primary font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-xl group w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                Submit Your Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary action */}
              <p className="text-primary/60 font-primary text-sm mt-4 text-center sm:text-left">
                Join our community of writers and readers.{" "}
                <Link href="/about" className="text-accent hover:text-accent/80 transition-colors">
                  Learn more about us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          25%, 75% {
            opacity: 0.2;
          }
        }
        
        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .pattern-grid {
          background-image: 
            linear-gradient(to right, rgba(12, 42, 68, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(12, 42, 68, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        {openMag && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <FlipBookReader
            pages={openMag.page_images}
            downloadUrl={openMag.pdf_file}
            onClose={() => setOpenMag(null)}
          />
        </div>
      )}
    </section>
  )
}
