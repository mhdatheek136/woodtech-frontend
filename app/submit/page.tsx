"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SubmissionAnnouncement } from "@/components/submission-announcement"
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
              Submit Your Work
            </h1>
            <p className="font-primary text-xl md:text-2xl max-w-3xl mx-auto text-primary/80">
              Your words belong here.
            </p>
          </div>
        </div>

        {/* Submission Announcement - NEW COMPONENT */}
        <SubmissionAnnouncement />

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

        {/* Guidelines Section - UPDATED */}
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
                  <span>
                    <strong>Theme Alignment:</strong> All submissions should relate to the current issue's theme. For
                    the Fall 2025 issue, we're looking for work that explores "Rainbows in Darkness" — finding light,
                    hope, and beauty in difficult or transitional moments.
                  </span>
                </li>
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
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <span>
                    <strong>Quarterly Deadlines:</strong> Each issue has a specific submission deadline. Current
                    deadline for Fall 2025 issue is August 31, 2025.
                  </span>
                </li>
              </ul>

              {/* Theme guidance box */}
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-lg border border-orange-200/30">
                <h3 className="font-secondary text-xl font-bold text-navy mb-4">
                  Theme Guidance: "Rainbows in Darkness"
                </h3>
                <p className="font-primary text-navy/80 mb-4">
                  We're looking for work that explores how beauty, hope, and meaning can emerge from challenging
                  circumstances. Consider these approaches:
                </p>
                <ul className="space-y-2 font-primary text-navy/70 text-sm ml-4">
                  <li>• Stories of resilience and finding strength in vulnerability</li>
                  <li>• Poetry about transformation, change, and growth through difficulty</li>
                  <li>• Essays on discovering unexpected joy or beauty in dark times</li>
                  <li>• Reflections on how challenges can reveal hidden strengths or insights</li>
                  <li>• Narratives about community, connection, and support during hardship</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines Section - UPDATED */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
                <h2 className="font-secondary text-2xl md:text-3xl font-bold text-navy">Deadlines & Response Time</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-lg p-6 border border-orange-200/30 mb-6">
                <h3 className="font-secondary text-lg font-semibold text-navy mb-3">Current Submission Period</h3>
                <div className="grid md:grid-cols-2 gap-4 text-navy/80 font-primary">
                  <div>
                    <strong>Issue:</strong> Year 1 - Fall 2025
                    <br />
                    <strong>Theme:</strong> "Rainbows in Darkness"
                  </div>
                  <div>
                    <strong>Deadline:</strong> August 31, 2025
                    <br />
                    <strong>Publication:</strong> October 2025
                  </div>
                </div>
              </div>
              <p className="font-primary text-navy/80">
                We review submissions on a rolling basis during each submission period. You'll hear from us within 4–6
                weeks of the deadline. We encourage early submissions as we may close submissions early if we receive
                sufficient high-quality work.
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
