"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, FileText, Copyright, Scale, Lock, Users } from "lucide-react"

export default function LegalPage() {
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
                  <pattern id="legal-texture" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-accent/15" />
                    <circle cx="20" cy="15" r="0.3" fill="currentColor" className="text-primary/10" />
                    <circle cx="12" cy="25" r="0.4" fill="currentColor" className="text-accent/20" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#legal-texture)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-secondary text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
                Legal & Rights
              </h1>
              <p className="font-primary text-xl md:text-2xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
                Transparency in how we handle your data, content, and rights as part of the Burrowed community.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="text-center mb-16 md:mb-20">
                <p className="font-primary text-lg md:text-xl text-primary/80 leading-relaxed">
                  At Burrowed, we believe in transparency and respect for our contributors and readers. Below you'll
                  find our policies regarding privacy, terms of use, and copyright.
                </p>
              </div>

              {/* Privacy Policy Section */}
              <div className="mb-16 md:mb-20">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-primary/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary">Privacy Policy</h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 font-primary text-primary/80 leading-relaxed">
                      <p className="text-lg">
                        <strong className="text-primary">Your privacy matters to us.</strong> We collect only the
                        essential information needed to communicate with you and publish your work.
                      </p>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <Lock className="h-5 w-5 text-accent" />
                          Information We Collect
                        </h3>
                        <ul className="space-y-2 ml-6">
                          <li>
                            • <strong>Name and Email Address:</strong> For communication regarding submissions,
                            publications, and updates
                          </li>
                          <li>
                            • <strong>Author Bio:</strong> For publication purposes when your work is accepted
                          </li>
                          <li>
                            • <strong>Submitted Content:</strong> Your literary work for editorial review
                          </li>
                          <li>
                            • <strong>Contact Form Data:</strong> Messages sent through our website contact forms
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          How We Use Your Information
                        </h3>
                        <ul className="space-y-2 ml-6">
                          <li>• To communicate about your submissions and publication status</li>
                          <li>• To publish your work and author bio if accepted</li>
                          <li>• To send occasional updates about new issues and opportunities</li>
                          <li>• To respond to your inquiries and provide customer support</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">Data Protection</h3>
                        <p>
                          <strong>
                            We never share, sell, or distribute your personal information to third parties.
                          </strong>{" "}
                          Your data is stored securely and used solely for the purposes outlined above. You may request
                          deletion of your personal data at any time by contacting us at{" "}
                          <a
                            href="mailto:burrowed@woodlandpublishing.com"
                            className="text-accent hover:text-accent/80 transition-colors"
                          >
                            burrowed@woodlandpublishing.com
                          </a>
                          .
                        </p>
                      </div>

                      <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                        <p className="text-primary/90 italic">
                          <strong>Simple Promise:</strong> We treat your information with the same care and respect we'd
                          want for our own. No spam, no selling your data, no surprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms of Use Section */}
              <div className="mb-16 md:mb-20">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-primary/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary">Terms of Use</h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 font-primary text-primary/80 leading-relaxed">
                      <p className="text-lg">
                        <strong className="text-primary">By submitting to Burrowed,</strong> you agree to the following
                        terms that protect both your rights and ours.
                      </p>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">
                          Submission Requirements
                        </h3>
                        <ul className="space-y-2 ml-6">
                          <li>
                            • <strong>Original Content Only:</strong> All submitted work must be your original creation
                          </li>
                          <li>
                            • <strong>Unpublished Work:</strong> Submissions should not have been previously published
                            elsewhere
                          </li>
                          <li>
                            • <strong>Accurate Information:</strong> Provide truthful contact information and author
                            details
                          </li>
                          <li>
                            • <strong>Respectful Content:</strong> Work should not contain hate speech, harassment, or
                            illegal content
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">
                          Rights and Permissions
                        </h3>
                        <ul className="space-y-2 ml-6">
                          <li>
                            • <strong>You Retain Ownership:</strong> You maintain full copyright of your work
                          </li>
                          <li>
                            • <strong>Non-Exclusive Rights:</strong> You grant Burrowed non-exclusive rights to publish
                            your work
                          </li>
                          <li>
                            • <strong>Editorial Rights:</strong> We may make minor edits for clarity, with your approval
                          </li>
                          <li>
                            • <strong>Promotional Use:</strong> We may use excerpts for promotional purposes with
                            attribution
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">Publication Process</h3>
                        <ul className="space-y-2 ml-6">
                          <li>• Submissions are reviewed on a rolling basis</li>
                          <li>• Response time is typically 2-3 weeks</li>
                          <li>• Acceptance does not guarantee immediate publication</li>
                          <li>• We reserve the right to decline submissions without detailed explanation</li>
                        </ul>
                      </div>

                      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                        <p className="text-primary/90 italic">
                          <strong>Our Commitment:</strong> We treat every submission with respect and consideration.
                          While we can't publish everything, we value the trust you place in us by sharing your work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="mb-16 md:mb-20">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-primary/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Copyright className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary">Copyright</h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 font-primary text-primary/80 leading-relaxed">
                      <p className="text-lg">
                        <strong className="text-primary">Your creative work belongs to you.</strong> We believe in
                        protecting and respecting the intellectual property of our contributors.
                      </p>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">Author Rights</h3>
                        <ul className="space-y-2 ml-6">
                          <li>
                            • <strong>Full Ownership:</strong> You retain complete copyright ownership of your work
                          </li>
                          <li>
                            • <strong>Attribution:</strong> Your work will always be credited to you
                          </li>
                          <li>
                            • <strong>Future Use:</strong> You're free to republish your work elsewhere after
                            publication
                          </li>
                          <li>
                            • <strong>Withdrawal:</strong> You may request removal of your work from our archives
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">
                          Burrowed's Usage Rights
                        </h3>
                        <ul className="space-y-2 ml-6">
                          <li>
                            • <strong>Publication Rights:</strong> Non-exclusive right to publish in our magazine
                          </li>
                          <li>
                            • <strong>Archive Rights:</strong> Right to maintain published work in our digital archives
                          </li>
                          <li>
                            • <strong>Promotional Use:</strong> Right to use excerpts for marketing and social media
                            with attribution
                          </li>
                          <li>
                            • <strong>Format Adaptation:</strong> Right to adapt work for different publication formats
                            (print, digital, audio)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">Editorial Content</h3>
                        <p>
                          All editorial content, design elements, and original material created by Burrowed and Woodland
                          Publishing are protected by copyright. This includes our website design, logo, editorial
                          commentary, and curated collections.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-secondary text-xl font-semibold text-primary mb-3">
                          Fair Use and Permissions
                        </h3>
                        <p>
                          Readers and educators may quote brief excerpts from published work for academic, critical, or
                          educational purposes under fair use guidelines. For substantial use or commercial purposes,
                          please contact both the author and Burrowed for permission.
                        </p>
                      </div>

                      <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                        <p className="text-primary/90 italic">
                          <strong>Copyright Questions?</strong> If you have concerns about copyright, attribution, or
                          usage rights, please contact us at{" "}
                          <a
                            href="mailto:burrowed@woodlandpublishing.com"
                            className="text-accent hover:text-accent/80 transition-colors"
                          >
                            burrowed@woodlandpublishing.com
                          </a>
                          . We're committed to protecting your creative rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                  <h3 className="font-secondary text-2xl md:text-3xl font-bold text-primary mb-4">
                    Questions About Our Policies?
                  </h3>
                  <p className="font-primary text-primary/80 text-lg mb-6 leading-relaxed">
                    We believe in transparency and are happy to clarify any aspect of our legal policies. Don't hesitate
                    to reach out.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:burrowed@woodlandpublishing.com"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base justify-center"
                    >
                      Contact Us
                      <Shield className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-semibold hover:bg-secondary/50 transition-all duration-300 shadow-card hover:shadow-soft group text-sm sm:text-base justify-center"
                    >
                      Contact Form
                      <FileText className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
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
