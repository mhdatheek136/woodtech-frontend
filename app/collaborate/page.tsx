import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import MediaKitSection from "@/components/MediaKitSection";
import Link from "next/link"
import { Users, Download, Mail, FileText } from "lucide-react"
import { CollaborationForm } from "@/components/collaboration-form"

export default function CollaboratePage() {
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
                  <pattern id="collab-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-accent/15" />
                    <circle cx="12" cy="8" r="0.3" fill="currentColor" className="text-primary/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#collab-texture)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Let your brand live inside a story.
            </h1>
            <p className="font-primary text-xl md:text-2xl max-w-3xl mx-auto text-primary/80">
              Collaborate with Burrowed to create something beautiful together.
            </p>
          </div>
        </div>

        {/* Opening Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="font-primary text-lg md:text-xl text-navy/80 leading-relaxed mb-8">
                We believe that even advertisements can be beautiful — subtle, respectful, and placed with purpose.
              </p>
              <p className="font-primary text-lg text-navy/80 leading-relaxed mb-4">
                When you sponsor our magazine, you're not just buying space.
              </p>
              <p className="font-primary text-lg text-navy/80 leading-relaxed">
                You're becoming part of a carefully curated literary experience shared by a loyal, thoughtful
                readership.
              </p>
            </div>
          </div>
        </section>

        {/* Why Collaborate Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-secondary text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                Why Collaborate With Us?
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">Audience</h3>
                  <p className="font-primary text-navy/80">
                    Our readers are writers, dreamers, artists, and students from across South Asia and beyond.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">Reach</h3>
                  <p className="font-primary text-navy/80">
                    With each issue, we connect with thousands of subscribers, writers, and creatives via our magazine,
                    mailing list, and social platforms.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">Ad Style</h3>
                  <p className="font-primary text-navy/80">
                    We design sponsor placements in elegant, literary ways — like a quote, a handwritten note, a short
                    illustration, or a page feature — that flow naturally within the reading experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Opportunities */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-secondary text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                Opportunities for Sponsorship
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-navy/10 shadow-sm">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">Full-page placements</h3>
                  <p className="font-primary text-navy/80">
                    Beautiful, full-page advertisements designed to complement our magazine's aesthetic.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-navy/10 shadow-sm">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">
                    Feature mentions in our newsletter
                  </h3>
                  <p className="font-primary text-navy/80">
                    Thoughtful mentions and features in our regular newsletter sent to our subscriber base.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-navy/10 shadow-sm">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">
                    Instagram shoutouts or co-curated posts
                  </h3>
                  <p className="font-primary text-navy/80">
                    Elegant social media collaborations that highlight your brand to our engaged following.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-navy/10 shadow-sm">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-secondary text-xl font-bold text-navy mb-4">Collaborative issues or contests</h3>
                  <p className="font-primary text-navy/80">
                    Partner with us on special themed issues or writing contests that align with your brand values.
                  </p>
                </div>
              </div>

              <p className="font-primary text-lg text-navy/80 text-center mt-12">
                Have an idea we haven't mentioned? Let's create something new together.
              </p>
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <MediaKitSection />

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-secondary text-3xl md:text-4xl font-bold text-navy mb-6 text-center">Get In Touch</h2>
              <p className="font-primary text-lg text-navy/80 text-center mb-12">
                Interested in collaborating? Fill the form below or email us directly at{" "}
                <a href="mailto:collaborate@burrowed.com" className="text-navy hover:underline">
                  collaborate@burrowed.com
                </a>
                . We'd love to hear your story.
              </p>

              <CollaborationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
