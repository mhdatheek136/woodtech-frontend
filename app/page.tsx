"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { LatestIssue } from "@/components/latest-issue"
import { SubmissionCallout } from "@/components/submission-callout"
import { FeaturedNewsletter } from "@/components/featured-newsletter"
import { SponsorCollaborate } from "@/components/sponsor-collaborate"
import { Footer } from "@/components/footer"
import { LoadingBar } from "@/components/LoadingBar"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/health/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Health check failed (${res.status})`)
        }
        return res.json()
      })
      .then(() => setLoading(false))
      .catch(() => {
        // Don’t remove this console.error if you want to see errors during development:
        console.error("Backend health‐check error")
        setError("Could not reach server. Retrying…")

        setTimeout(() => {
          setError(null)
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/health/`)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Health check failed (${res.status})`)
              }
              return res.json()
            })
            .then(() => setLoading(false))
            .catch(() => {
              console.error("Second attempt failed")
              setError("Still waiting on server…")
            })
        }, 3000)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <LoadingBar />
        <p className="mt-8 text-gray-600 font-primary">
          {error ?? "Waking up server…"}
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <LatestIssue />
        <SubmissionCallout />
        <FeaturedNewsletter />
        <SponsorCollaborate />
      </main>
      <Footer />
    </div>
  )
}
