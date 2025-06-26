"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"
import { fetchWithCsrf } from "../lib/csrf"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetchWithCsrf(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        if (errorData.email) {
          setErrorMessage(errorData.email.toString())
        } else if (errorData.non_field_errors) {
          setErrorMessage(errorData.non_field_errors.toString())
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.")
        }
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      setEmail("")
      setIsSubmitting(false)

      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (err) {
      console.error("Subscription error:", err)
      setErrorMessage("Network error. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-logo text-2xl font-bold text-white">BURROWED</span>
            </Link>
            <p className="text-white/60 text-sm mb-2 font-primary">
              A quarterly literary magazine celebrating the art of storytelling.
            </p>
            <p className="text-white/60 text-sm mb-6 font-primary">Published by Woodland Publishing</p>
            <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {/* <Link
              href="https://twitter.com"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link> */}
            <Link
              href="https://tiktok.com"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5v14H0v-14zM7.98 8.98h4.78v2.13h.07c.67-1.28 2.3-2.63 4.74-2.63 5.07 0 6.01 3.34 6.01 7.69v8.81h-5v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12v7.94h-5v-14z" />
              </svg>
            </Link>
          </div>
          </div>

          <div>
            <h3 className="font-secondary font-medium text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/issues" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  Issues
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  Submit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-secondary font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/submit"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/collaborate"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-secondary font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                  <Link
                  href="/legal"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-primary">
              © {new Date().getFullYear()} Burrowed Literary Magazine. Published by Woodland Publishing. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 w-full sm:w-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-2 w-full sm:w-auto rounded-l-2xl border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-r-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? "Submitting..." : "Subscribe"}
                  </button>
                </form>
              ) : (
                <p className="text-accent font-primary text-sm">Thank you for subscribing!</p>
              )}

              {errorMessage && (
                <p className="text-red-400 text-xs mt-2 text-center font-primary">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
