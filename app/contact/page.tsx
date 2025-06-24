"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Instagram, Linkedin, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-white via-secondary/50 to-accent/5 py-20 md:py-32 overflow-hidden">
          {/* Artistic background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="contact-texture" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" className="text-accent/15" />
                    <circle cx="15" cy="12" r="0.3" fill="currentColor" className="text-primary/10" />
                    <circle cx="8" cy="20" r="0.4" fill="currentColor" className="text-accent/20" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-texture)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-secondary text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
                Contact Us
              </h1>
              <p className="font-primary text-xl md:text-2xl text-primary/80 leading-relaxed max-w-2xl mx-auto">
                We'd love to hear from you. Whether you have questions about submissions, want to collaborate, or just
                want to say hello.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Email Contacts */}
              <div className="mb-16 md:mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">Email Contacts</h2>
                  <p className="font-primary text-primary/70 text-lg">
                    Reach out to us directly for any inquiries or submissions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white rounded-3xl p-8 shadow-card border border-primary/5 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-secondary text-xl font-bold text-primary mb-3">General Inquiries</h3>
                    <p className="font-primary text-primary/70 text-sm mb-4">
                      Questions, partnerships, or general information
                    </p>
                    <a
                      href="mailto:burrowed@woodlandpublishing.com"
                      className="font-primary text-accent hover:text-accent/80 transition-colors font-medium break-all"
                    >
                      burrowed@woodlandpublishing.com
                    </a>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-card border border-primary/5 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-secondary text-xl font-bold text-primary mb-3">Submissions</h3>
                    <p className="font-primary text-primary/70 text-sm mb-4">
                      Submit your literary work for consideration
                    </p>
                    <a
                      href="mailto:submit@burrowedmag.com"
                      className="font-primary text-accent hover:text-accent/80 transition-colors font-medium break-all"
                    >
                      submit@burrowedmag.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-16 md:mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Instagram className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">Follow Us</h2>
                  <p className="font-primary text-primary/70 text-lg">
                    Stay connected with our literary community on social media.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white rounded-3xl p-8 shadow-card border border-primary/5 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Instagram className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="font-secondary text-xl font-bold text-primary mb-3">Instagram</h3>
                    <p className="font-primary text-primary/70 text-sm mb-4">
                      Daily literary inspiration and community highlights
                    </p>
                    <a
                      href="https://instagram.com/burrowed.mag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-primary text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      @burrowed.mag
                    </a>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-card border border-primary/5 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-secondary text-xl font-bold text-primary mb-3">LinkedIn</h3>
                    <p className="font-primary text-primary/70 text-sm mb-4">
                      Professional updates and publishing insights
                    </p>
                    <a
                      href="https://linkedin.com/company/woodland-publishing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-primary text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      Woodland Publishing
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mb-16 md:mb-20">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                  <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-secondary text-lg font-bold text-primary mb-2">Response Time</h3>
                        <p className="font-primary text-primary/70">
                          We typically respond to general inquiries within 24-48 hours and submissions within 2-3 weeks.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-secondary text-lg font-bold text-primary mb-2">Published By</h3>
                        <p className="font-primary text-primary/70">
                          Burrowed is published monthly by Woodland Publishing, dedicated to nurturing literary
                          excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
                  <p className="font-primary text-primary/70 text-lg">
                    Prefer to use a form? Fill out the details below and we'll get back to you soon.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
