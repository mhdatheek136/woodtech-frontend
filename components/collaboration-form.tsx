"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

export function CollaborationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    file: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
        file: null,
      })
      setFileName("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-navy/10 shadow-sm">
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-navy"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-secondary text-2xl font-bold text-navy mb-4">Message Sent!</h3>
        <p className="font-primary text-navy/80 mb-6">
          Thank you for your interest in collaborating with Burrowed. We'll review your message and get back to you
          soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-navy text-cream rounded-md font-primary hover:bg-navy/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-navy/10 shadow-sm p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Brand/Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            placeholder="Your company or organization"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Message / Proposal Brief
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            placeholder="Tell us about your collaboration idea or proposal..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            (Optional) Upload logo or sample idea
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-navy/20 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-navy/30" />
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
                    accept=".jpg,.jpeg,.png,.pdf"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-navy/60">PNG, JPG, PDF up to 10MB</p>
              {fileName && <p className="text-sm text-navy font-medium mt-2">{fileName}</p>}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-navy text-cream rounded-md font-primary font-medium hover:bg-navy/90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Start the Conversation"}
          </button>
        </div>
      </div>
    </form>
  )
}
