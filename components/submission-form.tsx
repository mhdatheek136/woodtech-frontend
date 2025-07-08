"use client"

import React, { useState, useRef } from "react" // Added useRef
import { Upload, AlertCircle, CheckCircle } from "lucide-react"
import { fetchWithCsrf } from "../lib/csrf"
import ReCAPTCHA from "react-google-recaptcha" // Import ReCAPTCHA

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  title?: string
  bio?: string
  file?: string
  recaptcha?: string // Added recaptcha error
  non_field_errors?: string
}

export function SubmissionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    bio: "",
    message: "",
    file: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fileName, setFileName] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null) // Added recaptcha token
  const recaptchaRef = useRef<ReCAPTCHA>(null) // Added recaptcha ref

  // Helpers
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateFile = (file: File | null) => {
    if (!file) return "Please upload your work"
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ]
    if (!allowed.includes(file.type))
      return "Please upload a PDF, DOC, DOCX, or TXT file"
    if (file.size > 10 * 1024 * 1024) return "File size must be under 10MB"
    return null
  }

  // Client-side form validation
  const clientValidate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!formData.firstName.trim()) errs.firstName = "First name is required"
    if (!formData.lastName.trim()) errs.lastName = "Last name is required"
    if (!formData.email.trim()) {
      errs.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      errs.email = "Enter a valid email"
    }
    if (!formData.title.trim()) errs.title = "Title is required"
    if (!formData.bio.trim()) {
      errs.bio = "Bio is required"
    } else {
      const wordCount = formData.bio.trim().split(/\s+/).length
      if (wordCount < 10)
        errs.bio = "Bio should be at least 10 words"
      else if (wordCount > 100)
        errs.bio = "Bio should be no more than 100 words"
    }
    const fileErr = validateFile(formData.file)
    if (fileErr) errs.file = fileErr
    
    // Add recaptcha validation
    if (!recaptchaToken) {
      errs.recaptcha = "Please complete the reCAPTCHA verification"
    }
    
    return errs
  }

  // Scroll to first error field
  const scrollToError = (errs: FormErrors) => {
    const field = Object.keys(errs).find((k) => k !== "non_field_errors")
    if (field) {
      const el = document.getElementById(field)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
    } else if (errs.non_field_errors) {
      // scroll to top of form if non-field
      const formEl = document.getElementById("submission-form")
      formEl?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Handlers
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFormData((f) => ({ ...f, file }))
    setFileName(file?.name ?? "")
    setTouched((t) => ({ ...t, file: true }))
    if (errors.file) setErrors((e) => ({ ...e, file: undefined }))
  }

  // Handle recaptcha change
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (errors.recaptcha) {
      setErrors(e => ({ ...e, recaptcha: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      title: true,
      bio: true,
      file: true,
    })

    // 1) Client-side validation
    const clientErrs = clientValidate()
    if (Object.keys(clientErrs).length) {
      setErrors(clientErrs)
      scrollToError(clientErrs)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // 2) Build multipart payload
    const payload = new FormData()
    payload.append("first_name", formData.firstName)
    payload.append("last_name", formData.lastName)
    payload.append("email", formData.email)
    payload.append("title", formData.title)
    payload.append("bio", formData.bio)
    payload.append("message", formData.message)
    if (formData.file) payload.append("file", formData.file)
    payload.append("recaptcha_token", recaptchaToken || "") // Add recaptcha token

    try {
      const res = await fetchWithCsrf(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/submit/`,
        {
          method: "POST",
          body: payload,
        }
      )
      const data = await res.json()

      if (!res.ok) {
        // Map server errors into our shape
        const srvErrs: FormErrors = {}
        for (const key in data) {
          srvErrs[key as keyof FormErrors] = Array.isArray(data[key])
            ? data[key].join(" ")
            : String(data[key])
        }
        setErrors(srvErrs)
        scrollToError(srvErrs)
        
        // Reset recaptcha on error
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
        
        setIsSubmitting(false)
        return
      }

      // Success!
      setIsSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        bio: "",
        message: "",
        file: null,
      })
      setFileName("")
      
      // Reset recaptcha on success
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch {
      const errObj: FormErrors = {
        non_field_errors: "Network error. Please try again.",
      }
      setErrors(errObj)
      scrollToError(errObj)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render
  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-navy/10 shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-secondary text-2xl font-bold text-navy mb-4">
          Submission Received!
        </h3>
        <p className="font-primary text-navy/80 mb-6">
          Thank you! We'll review and get back within 2–3 weeks.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-navy text-cream rounded-md font-primary hover:bg-navy/90 transition-colors"
        >
          Submit Another Piece
        </button>
      </div>
    )
  }

  return (
    <form
      id="submission-form"
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-navy/10 shadow-sm p-6 md:p-8 space-y-6"
      noValidate
    >
      {errors.non_field_errors && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          {errors.non_field_errors}
        </div>
      )}

      {/* Names */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 mb-4 md:mb-0">
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.firstName && touched.firstName
                ? "border-red-500"
                : "border-navy/20"
            } focus:outline-none focus:ring-2 focus:ring-navy/30`}
          />
          {errors.firstName && touched.firstName && (
            <p className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.lastName && touched.lastName
                ? "border-red-500"
                : "border-navy/20"
            } focus:outline-none focus:ring-2 focus:ring-navy/30`}
          />
          {errors.lastName && touched.lastName && (
            <p className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.email && touched.email
              ? "border-red-500"
              : "border-navy/20"
          } focus:outline-none focus:ring-2 focus:ring-navy/30`}
        />
        {errors.email && touched.email && (
          <p className="flex items-center gap-2 mt-1 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title of Piece *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.title && touched.title
              ? "border-red-500"
              : "border-navy/20"
          } focus:outline-none focus:ring-2 focus:ring-navy/30`}
        />
        {errors.title && touched.title && (
          <p className="flex items-center gap-2 mt-1 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.title}
          </p>
        )}
      </div>

      {/* File */}
      <div>
        <label htmlFor="file" className="block text-sm font-medium mb-1">
          Upload Your Work *
        </label>
        <div
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
            errors.file && touched.file
              ? "border-red-500"
              : "border-navy/20"
          }`}
        >
          <div className="space-y-1 text-center">
            <Upload
              className={`mx-auto h-12 w-12 ${
                errors.file && touched.file ? "text-red-400" : "text-navy/30"
              }`}
            />
            <label
              htmlFor="file"
              className="relative cursor-pointer rounded-md font-medium text-navy hover:text-navy/80"
            >
              <span>Upload a file</span>
              <input
                id="file"
                name="file"
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
              />
            </label>
            <p className="text-xs text-navy/60">PDF, DOC, DOCX, TXT up to 10MB</p>
            {fileName && (
              <p className="text-sm font-medium text-navy mt-2 flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" /> {fileName}
              </p>
            )}
          </div>
        </div>
        {errors.file && touched.file && (
          <p className="flex items-center gap-2 mt-1 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.file}
          </p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label htmlFor="bio" className="block text-sm font-medium mb-1">
          Short Bio *
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          value={formData.bio}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.bio && touched.bio
              ? "border-red-500"
              : "border-navy/20"
          } focus:outline-none focus:ring-2 focus:ring-navy/30`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.bio && touched.bio && (
            <p className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {errors.bio}
            </p>
          )}
          <p className="text-xs text-navy/60 ml-auto">
            {formData.bio.trim().split(/\s+/).filter(Boolean).length} words
          </p>
        </div>
      </div>

      {/* Optional message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message / Optional Note
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30"
        />
      </div>
      
      {/* Added reCAPTCHA */}
      <div className="flex flex-col items-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleRecaptchaChange}
        />
        {errors.recaptcha && (
          <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.recaptcha}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center h-full">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full max-w-[304px] mx-auto px-6 py-3 bg-navy text-cream rounded-md font-primary font-medium hover:bg-navy/90 transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit Your Work"}
      </button>
      </div>
    </form>
  )
}