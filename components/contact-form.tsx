"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters"
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    })

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setErrors({})
      setTouched({})

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 md:p-12 bg-white rounded-3xl border border-primary/10 shadow-card">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-secondary text-2xl md:text-3xl font-bold text-primary mb-4">Message Sent!</h3>
        <p className="font-primary text-primary/80 mb-6 text-lg">
          Thank you for reaching out. We'll get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-accent text-white rounded-2xl font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-primary/10 shadow-card p-8 md:p-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-2 font-primary">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-4 rounded-2xl border ${
                errors.name && touched.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-primary/20 focus:ring-accent/30"
              } focus:outline-none focus:ring-2 font-primary text-lg transition-all duration-200`}
              placeholder="Your full name"
            />
            {errors.name && touched.name && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-2 font-primary">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-4 rounded-2xl border ${
                errors.email && touched.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-primary/20 focus:ring-accent/30"
              } focus:outline-none focus:ring-2 font-primary text-lg transition-all duration-200`}
              placeholder="your.email@example.com"
            />
            {errors.email && touched.email && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-2 font-primary">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-4 rounded-2xl border ${
                errors.message && touched.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-primary/20 focus:ring-accent/30"
              } focus:outline-none focus:ring-2 font-primary text-lg transition-all duration-200 resize-none`}
              placeholder="Tell us what's on your mind..."
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              {errors.message && touched.message && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.message}</span>
                </div>
              )}
              <div className="text-xs text-primary/60 ml-auto">{formData.message.length} characters</div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-accent text-white rounded-2xl font-primary font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
