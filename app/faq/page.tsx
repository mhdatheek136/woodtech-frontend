import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq-accordion"
import { HelpCircle, BookOpen, Users } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-white via-secondary/50 to-accent/5 py-16 md:py-24 overflow-hidden">
          {/* Artistic background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="faq-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-accent/15" />
                    <circle cx="12" cy="8" r="0.3" fill="currentColor" className="text-primary/10" />
                    <circle cx="7" cy="15" r="0.4" fill="currentColor" className="text-accent/20" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#faq-texture)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <HelpCircle className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-primary text-xl md:text-2xl max-w-3xl mx-auto text-primary/80 leading-relaxed">
              Everything you need to know about submitting to Burrowed and being part of our literary community.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="text-center mb-12 md:mb-16">
                <p className="font-primary text-lg md:text-xl text-primary/80 leading-relaxed mb-8">
                  Have questions about submitting your work or our publication process? We've compiled answers to the
                  most common questions from our community of writers and readers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary/60 font-primary text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Still have questions?</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>
                      Contact us at{" "}
                      <a
                        href="mailto:hello@burrowed.com"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        hello@burrowed.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <FAQAccordion />

              {/* Contact CTA */}
              <div className="mt-16 md:mt-20 text-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                  <h3 className="font-secondary text-2xl md:text-3xl font-bold text-primary mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="font-primary text-primary/80 text-lg mb-6 leading-relaxed">
                    We're here to help! Reach out to our editorial team and we'll get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:hello@burrowed.com"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base justify-center"
                    >
                      Email Us
                      <HelpCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                    </a>
                    <a
                      href="/submit"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-semibold hover:bg-secondary/50 transition-all duration-300 shadow-card hover:shadow-soft group text-sm sm:text-base justify-center"
                    >
                      Submit Your Work
                      <BookOpen className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
