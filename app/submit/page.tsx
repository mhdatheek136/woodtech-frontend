"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SubmissionForm } from "@/components/submission-form"
import { PenLine, FileText, Clock, CheckCircle } from "lucide-react"

export default function SubmitPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-white via-secondary/50 to-accent/5 py-16 md:py-24 overflow-hidden">
          {/* Artistic background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="submit-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-accent/15" />
                    <circle cx="12" cy="8" r="0.3" fill="currentColor" className="text-primary/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#submit-texture)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <PenLine className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Submit an Article
            </h1>
            <p className="font-primary text-xl md:text-2xl max-w-3xl mx-auto text-primary/80">
              Your words belong here.
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="font-primary text-lg md:text-xl text-navy/80 leading-relaxed mb-8">
                We're always searching for voices that feel — voices that notice, ache, question, and wonder. If you
                have something to say, we want to read it.
              </p>
              <p className="font-primary text-lg text-navy/80 leading-relaxed">
                Whether it's a poem, a personal essay, or a short story, send it in. We accept pieces in English, Urdu,
                Sinhala, and Tamil — language isn't a barrier; honesty is.
              </p>
            </div>
          </div>
        </section>

        {/* What We Accept Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-navy" />
                </div>
                <h2 className="font-secondary text-2xl md:text-3xl font-bold text-navy">What We Accept</h2>
              </div>
              <p className="font-primary text-navy/80 mb-6">We publish work across genres:</p>
              <ul className="space-y-4 font-primary text-navy/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Poetry (free verse, spoken word, narrative)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Short fiction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Creative nonfiction / personal essays</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Letters, reflections, and hybrid forms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <PenLine className="h-5 w-5 text-navy" />
                </div>
                <h2 className="font-secondary text-2xl md:text-3xl font-bold text-navy">Submission Guidelines</h2>
              </div>
              <p className="font-primary text-navy/80 mb-6">Before you submit, please read:</p>
              <ul className="space-y-4 font-primary text-navy/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>One piece per submission (max 3 pages for prose, 2 poems max)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Work must be original and unpublished</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Include a short author bio (50–80 words)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>Preferred format: PDF or Google Docs link</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>We accept simultaneous submissions (just let us know if it's accepted elsewhere)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
                <h2 className="font-secondary text-2xl md:text-3xl font-bold text-navy">Deadlines & Response Time</h2>
              </div>
              <p className="font-primary text-navy/80">
                We review submissions on a rolling basis. You'll hear from us within 2–3 weeks.
              </p>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-secondary text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
                Submit Your Work
              </h2>
              <SubmissionForm />

              {/* Encouragement Note */}
              <div className="mt-12 p-6 bg-navy/5 rounded-lg border border-navy/10">
                <h3 className="font-secondary text-xl font-bold text-navy mb-4">A Note of Encouragement</h3>
                <p className="font-primary text-navy/80 italic">
                  Don't overthink it. Some of the most moving pieces we've published were sent by people who didn't
                  think they were "writers." We care about feeling, not credentials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
