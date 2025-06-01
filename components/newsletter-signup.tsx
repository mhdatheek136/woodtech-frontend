"use client"

import type React from "react"

import { useState } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">Stay in the Loop</h2>
          <p className="text-primary/80 text-lg mb-8 leading-relaxed font-primary">
            Join our community of readers and writers. Receive seasonal updates, new issue announcements, and gentle
            reminders.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-2xl border border-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-primary"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft disabled:opacity-70"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {isSuccess && <p className="mt-3 text-green-600 text-sm font-primary">Thank you for subscribing!</p>}
          </form>

          <p className="mt-4 text-primary/60 text-sm font-primary">
            Seasonal updates and gentle reminders. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  )
}
