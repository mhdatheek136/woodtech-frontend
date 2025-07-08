"use client"

import React, { useState, useRef } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { fetchWithCsrf } from "../lib/csrf"
import ReCAPTCHA from "react-google-recaptcha"

interface FormData {
  name: string
  email: string
  message: string
  recaptchaToken: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  recaptchaToken?: string
  non_field_errors?: string
}

export function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    recaptchaToken: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    message: false,
    recaptchaToken: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Utility to scroll to the first field with an error
  const scrollToError = (errs: FormErrors) => {
    const field = (["name", "email", "message", "recaptchaToken"] as Array<keyof FormErrors>)
      .find((key) => errs[key] != null)
    if (field) {
      const el = document.getElementById(field)
      el?.scrollIntoView({ behavior: "smooth", block: "center" })
    } else if (errs.non_field_errors) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const clientValidate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!formData.name.trim()) errs.name = "Name is required"
    if (!formData.email.trim()) {
      errs.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      errs.email = "Enter a valid email"
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters"
    }
    if (!formData.recaptchaToken) {
      errs.recaptchaToken = "Please verify you're not a robot"
    }
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((f) => ({ ...f, [name]: value }))
    setTouched((t) => ({ ...t, [name]: true }))
    if (errors[name as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [name]: undefined }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setFormData(f => ({ ...f, recaptchaToken: token }))
      setTouched(t => ({ ...t, recaptchaToken: true }))
      setErrors(e => ({ ...e, recaptchaToken: undefined }))
    } else {
      setFormData(f => ({ ...f, recaptchaToken: "" }))
      setErrors(e => ({ ...e, recaptchaToken: "Please verify you're not a robot" }))
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      recaptchaToken: ""
    })
    setTouched({
      name: false,
      email: false,
      message: false,
      recaptchaToken: false
    })
    setErrors({})
    recaptchaRef.current?.reset()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({
      name: true,
      email: true,
      message: true,
      recaptchaToken: true
    })

    // Client-side validation
    const clientErrs = clientValidate()
    if (Object.keys(clientErrs).length) {
      setErrors(clientErrs)
      scrollToError(clientErrs)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const res = await fetchWithCsrf(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            recaptcha_token: formData.recaptchaToken
          }),
        }
      )
      const payload = await res.json()

      if (!res.ok) {
        const fieldErrors: FormErrors = {}
        
        // Handle reCAPTCHA errors separately
        if (payload.recaptcha_token) {
          fieldErrors.recaptchaToken = Array.isArray(payload.recaptcha_token)
            ? payload.recaptcha_token.join(" ")
            : String(payload.recaptcha_token)
        }
        
        // Handle other fields
        for (const key of ["name", "email", "message"] as Array<keyof FormErrors>) {
          if (payload[key]) {
            fieldErrors[key] = Array.isArray(payload[key])
              ? payload[key].join(" ")
              : String(payload[key])
          }
        }
        
        if (payload.non_field_errors) {
          fieldErrors.non_field_errors = Array.isArray(payload.non_field_errors)
            ? payload.non_field_errors.join(" ")
            : String(payload.non_field_errors)
        }
        
        if (!Object.keys(fieldErrors).length && payload.detail) {
          fieldErrors.non_field_errors = String(payload.detail)
        }
        
        setErrors(fieldErrors)
        scrollToError(fieldErrors)
        recaptchaRef.current?.reset()
        setIsSubmitting(false)
        return
      }

      // Success
      setIsSuccess(true)
      resetForm()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      const netErr = { non_field_errors: "Network error. Please try again." }
      setErrors(netErr)
      scrollToError(netErr)
      recaptchaRef.current?.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-white rounded-3xl border border-primary/10 shadow-card">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-secondary text-2xl font-bold text-primary mb-4">
          Message Sent!
        </h3>
        <p className="font-primary text-primary/80 mb-6 text-lg">
          Thank you for reaching out. We'll get back to you shortly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false)
            resetForm()
          }}
          className="px-6 py-3 bg-accent text-white rounded-2xl font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft"
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-3xl border border-primary/10 shadow-card p-8"
      noValidate
    >
      {errors.non_field_errors && (
        <div className="flex items-center gap-2 mb-4 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{errors.non_field_errors}</span>
        </div>
      )}

      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-4 rounded-2xl border ${
            errors.name && touched.name
              ? "border-red-500 focus:ring-red-500"
              : "border-primary/20 focus:ring-accent/30"
          } focus:outline-none focus:ring-2`}
          placeholder="Your full name"
          required
        />
        {errors.name && touched.name && (
          <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-4 rounded-2xl border ${
            errors.email && touched.email
              ? "border-red-500 focus:ring-red-500"
              : "border-primary/20 focus:ring-accent/30"
          } focus:outline-none focus:ring-2`}
          placeholder="your.email@example.com"
          required
        />
        {errors.email && touched.email && (
          <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-4 rounded-2xl border ${
            errors.message && touched.message
              ? "border-red-500 focus:ring-red-500"
              : "border-primary/20 focus:ring-accent/30"
          } focus:outline-none focus:ring-2 resize-none`}
          placeholder="Tell us what's on your mind..."
          required
        />
        <div className="flex justify-between items-center mt-2">
          {errors.message && touched.message && (
            <p className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </p>
          )}
          <p className="text-xs text-primary/60 ml-auto">
            {formData.message.length} characters
          </p>
        </div>
      </div>

    {/* reCAPTCHA */}
    <div className="mb-6 flex justify-center">
      <div className="recaptcha-container">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleRecaptchaChange}
        />
        {errors.recaptchaToken && touched.recaptchaToken && (
          <p className="flex items-center gap-2 mt-2 text-red-600 text-sm justify-center">
            <AlertCircle className="h-4 w-4" />
            {errors.recaptchaToken}
          </p>
        )}
      </div>
    </div>

{/* Submit */}
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full max-w-[304px] mx-auto px-8 py-4 bg-accent text-white rounded-2xl font-medium hover:bg-accent/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-3"
>
  {isSubmitting ? (
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  ) : (
    "Send Message"
  )}
  {!isSubmitting && <Send className="h-5 w-5" />}
</button>
    </form>
  )
}