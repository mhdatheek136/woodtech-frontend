"use client"

import { useState, useRef } from "react"
import { Mail, ArrowRight, BookOpen } from "lucide-react"
import { fetchWithCsrf } from "../lib/csrf"
import ReCAPTCHA from "react-google-recaptcha"

export function FeaturedNewsletter() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null)

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    setRecaptchaError(null)
    if (!token) {
      setRecaptchaToken("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setRecaptchaError("Please verify you're not a robot")
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)
    setRecaptchaError(null)

    try {
      const response = await fetchWithCsrf(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name, 
            email,
            recaptcha_token: recaptchaToken 
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        if (errorData.email) {
          setErrorMessage(errorData.email.toString())
        } else if (errorData.non_field_errors) {
          setErrorMessage(errorData.non_field_errors.toString())
        } else if (errorData.recaptcha_token) {
          setRecaptchaError(errorData.recaptcha_token.toString())
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.")
        }
        recaptchaRef.current?.reset()
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      setEmail("")
      setName("")
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
      setIsSubmitting(false)

      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (err) {
      console.error("Subscription error:", err)
      setErrorMessage("Network error. Please try again.")
      recaptchaRef.current?.reset()
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Info Panel - Unchanged */}
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-secondary text-cream/80 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Join Our Literary Community
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed font-primary">
                Subscribe to our curated newsletter and receive exclusive content,
                author interviews, reading recommendations, and early access to
                new issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-primary text-sm sm:text-base">
                    Monthly digest of literary gems
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <ArrowRight className="h-5 w-5" />
                  <span className="font-primary text-sm sm:text-base">
                    No spam, unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Panel with reCAPTCHA */}
            <div className="w-full">
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-soft mx-auto max-w-md">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <p className="text-red-400 text-sm text-center">
                        {errorMessage}
                      </p>
                    )}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-1 font-primary"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Austen"
                        required
                        className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-primary text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="featured-email"
                        className="block text-sm font-medium text-white/80 mb-1 font-primary"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="featured-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        required
                        className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-primary text-sm"
                      />
                    </div>
                    
                    {/* reCAPTCHA Component */}
                    <div className="flex justify-center" >
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        onChange={handleRecaptchaChange}
                        className="recaptcha-container"
                      />
                    </div>
                    {recaptchaError && (
                      <p className="text-red-400 text-sm text-center">
                        {recaptchaError}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 rounded-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft disabled:opacity-70 flex items-center justify-center text-sm"
                      >
                        {isSubmitting
                          ? "Subscribing..."
                          : "Subscribe to Newsletter"}
                        {!isSubmitting && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-white/60 text-xs text-center mt-4 font-primary">
                      By subscribing, you agree to our privacy policy and
                      consent to receive updates from our company.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-secondary text-xl sm:text-2xl font-bold mb-4">
                      Thank You for Subscribing!
                    </h3>
                    <p className="text-white/80 font-primary text-sm sm:text-base">
                      We've sent a confirmation email to your inbox. Please
                      check your email to complete the subscription process.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}