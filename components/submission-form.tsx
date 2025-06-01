"use client"

import type React from "react"

import { useState } from "react"
import { Upload, AlertCircle, CheckCircle } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  title?: string
  bio?: string
  file?: string
}

export function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
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

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateFile = (file: File | null) => {
    if (!file) return "Please upload your work"

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ]

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a PDF, DOC, DOCX, or TXT file"
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB
      return "File size must be less than 10MB"
    }

    return null
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

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required"
    } else if (formData.bio.trim().split(" ").length < 10) {
      newErrors.bio = "Bio should be at least 10 words (50-80 words recommended)"
    } else if (formData.bio.trim().split(" ").length > 100) {
      newErrors.bio = "Bio should be no more than 100 words (50-80 words recommended)"
    }

    const fileError = validateFile(formData.file)
    if (fileError) {
      newErrors.file = fileError
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData((prev) => ({ ...prev, file }))
      setFileName(file.name)

      // Clear file errors when user selects a file
      if (errors.file) {
        setErrors((prev) => ({ ...prev, file: undefined }))
      }

      setTouched((prev) => ({ ...prev, file: true }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      title: true,
      bio: true,
      file: true,
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
        title: "",
        bio: "",
        message: "",
        file: null,
      })
      setFileName("")
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
      <div className="text-center p-8 bg-white rounded-lg border border-navy/10 shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-secondary text-2xl font-bold text-navy mb-4">Submission Received!</h3>
        <p className="font-primary text-navy/80 mb-6">
          Thank you for sharing your work with us. We'll review your submission and get back to you within 2-3 weeks.
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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-navy/10 shadow-sm p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.name && touched.name ? "border-red-500 focus:ring-red-500" : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="Your name"
          />
          {errors.name && touched.name && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.email && touched.email ? "border-red-500 focus:ring-red-500" : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="your.email@example.com"
          />
          {errors.email && touched.email && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Title of Piece *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.title && touched.title ? "border-red-500 focus:ring-red-500" : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="Title of your submission"
          />
          {errors.title && touched.title && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.title}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Upload Your Work *
          </label>
          <div
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
              errors.file && touched.file ? "border-red-500" : "border-navy/20"
            }`}
          >
            <div className="space-y-1 text-center">
              <Upload
                className={`mx-auto h-12 w-12 ${errors.file && touched.file ? "text-red-400" : "text-navy/30"}`}
              />
              <div className="flex text-sm text-navy/60">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-navy hover:text-navy/80"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-navy/60">PDF, DOC, DOCX or TXT up to 10MB</p>
              {fileName && (
                <p className="text-sm text-navy font-medium mt-2 flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {fileName}
                </p>
              )}
            </div>
          </div>
          {errors.file && touched.file && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.file}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Short Bio (50-80 words) *
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.bio && touched.bio ? "border-red-500 focus:ring-red-500" : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="Tell us a little about yourself..."
          ></textarea>
          <div className="flex justify-between items-center mt-1">
            {errors.bio && touched.bio && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.bio}</span>
              </div>
            )}
            <div className="text-xs text-navy/60 ml-auto">
              {
                formData.bio
                  .trim()
                  .split(" ")
                  .filter((word) => word.length > 0).length
              }{" "}
              words
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Message / Optional Note
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            placeholder="Any additional information you'd like to share..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-navy text-cream rounded-md font-primary font-medium hover:bg-navy/90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Your Work"}
          </button>
        </div>
      </div>
    </form>
  )
}
