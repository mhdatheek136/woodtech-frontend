"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Upload, AlertCircle, CheckCircle } from "lucide-react"
import { fetchWithCsrf } from "../lib/csrf"
import ReCAPTCHA from "react-google-recaptcha" // Added import

interface FormErrors {
  name?: string
  email?: string
  organization?: string
  extra_message?: string
  file?: string
  recaptcha?: string // Added error type
  non_field_errors?: string
}

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
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null) // Added state
  const recaptchaRef = useRef<ReCAPTCHA>(null) // Added ref

  // Create refs for each field
  const nonFieldErrorRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const organizationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLDivElement>(null);

  // Scroll to first error when errors change
  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    
    // Create a small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      if (errors.non_field_errors && nonFieldErrorRef.current) {
        nonFieldErrorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } 
      else if (errors.name && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } 
      else if (errors.email && emailRef.current) {
        emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } 
      else if (errors.organization && organizationRef.current) {
        organizationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } 
      else if (errors.extra_message && messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } 
      else if (errors.file && fileRef.current) {
        fileRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      else if (errors.recaptcha && recaptchaRef.current) { // Added case
        recaptchaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [errors]);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required"
    }
    
    if (!formData.message.trim()) {
      newErrors.extra_message = "Message is required"
    } else if (formData.message.trim().length < 20) {
      newErrors.extra_message = "Message should be at least 20 characters"
    }
    
    if (formData.file) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]
      const maxSize = 10 * 1024 * 1024 // 10MB
      
      if (!allowedTypes.includes(formData.file.type)) {
        newErrors.file = "Only JPG, PNG, or PDF files allowed"
      } else if (formData.file.size > maxSize) {
        newErrors.file = "File size must be under 10MB"
      }
    }
    
    // Added reCAPTCHA validation
    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification"
    }
    
    return newErrors
  }

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: undefined }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
    
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      setFormData(prev => ({ ...prev, file }))
      setFileName(file.name)
      
      // Clear file error when new file selected
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: undefined }))
      }
      
      setTouched(prev => ({ ...prev, file: true }))
    }
  }

const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    // Mark all fields as touched
    const allFields = ["name", "email", "organization", "message", "file"];
    const newTouched = allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {});
    setTouched(newTouched);
    
    // Client-side validation
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }
    
  
  try {
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("brand_or_organization", formData.organization);
    formPayload.append("message", formData.message);
    if (formData.file) formPayload.append("logo_or_sample", formData.file);
    formPayload.append("recaptcha_token", recaptchaToken || ""); // Added token

    // Construct API endpoint with environment variable
    const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/collaborate/`;

    const response = await fetchWithCsrf(apiEndpoint, {
      method: "POST",
      body: formPayload,
      // Note: No Content-Type header - browser sets it automatically with boundary
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      // Reset recaptcha on error
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      
      if (errorData.email) {
        setErrors({ email: Array.isArray(errorData.email) ? errorData.email[0] : errorData.email });
      } else if (errorData.non_field_errors) {
        setErrors({ non_field_errors: Array.isArray(errorData.non_field_errors) ? errorData.non_field_errors[0] : errorData.non_field_errors });
      } else if (errorData.recaptcha_token) { // Handle recaptcha errors
        setErrors({ recaptcha: Array.isArray(errorData.recaptcha_token) 
          ? errorData.recaptcha_token[0] 
          : errorData.recaptcha_token
        });
      } else {
        // Handle field-specific errors from backend
        const backendErrors: FormErrors = {};
        Object.keys(errorData).forEach(field => {
          backendErrors[field as keyof FormErrors] = Array.isArray(errorData[field]) 
            ? errorData[field].join(" ") 
            : errorData[field];
        });
        setErrors(backendErrors);
      }
      return;
    }

    // Success handling
    setIsSuccess(true);
    setFormData({ name: "", email: "", organization: "", message: "", file: null });
    setFileName("");
    
    // Reset recaptcha on success
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
    
    // Reset success after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  } catch (err) {
    setErrors({ non_field_errors: "Network error. Please try again." });
  } finally {
    setIsSubmitting(false);
  }
}

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-navy/10 shadow-sm">
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-navy" />
        </div>
        <h3 className="font-secondary text-2xl font-bold text-navy mb-4">Message Sent!</h3>
        <p className="font-primary text-navy/80 mb-6">
          Thank you for your interest in collaborating with Burrowed. 
          We'll review your message and get back to you soon.
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
      {errors.non_field_errors && (
        <div 
          ref={nonFieldErrorRef}
          className="mb-6 p-4 bg-red-50 rounded-md flex items-start gap-3"
        >
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 font-primary">{errors.non_field_errors}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Name *
          </label>
          <input
            ref={nameRef}
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
            ref={emailRef}
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
          <label htmlFor="organization" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Brand/Organization *
          </label>
          <input
            ref={organizationRef}
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.organization && touched.organization 
                ? "border-red-500 focus:ring-red-500" 
                : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="Your company or organization"
          />
          {errors.organization && touched.organization && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.organization}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            Message / Proposal Brief *
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.extra_message && touched.message 
                ? "border-red-500 focus:ring-red-500" 
                : "border-navy/20 focus:ring-navy/30"
            } focus:outline-none focus:ring-2 font-primary`}
            placeholder="Tell us about your collaboration idea or proposal..."
          ></textarea>
          {errors.extra_message && touched.message && (
            <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.extra_message}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-navy/70 mb-1 font-primary">
            (Optional) Upload logo or sample idea
          </label>
          <div 
            ref={fileRef}
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
              errors.file && touched.file ? "border-red-500" : "border-navy/20"
            }`}
          >
            <div className="space-y-1 text-center">
              <Upload className={`mx-auto h-12 w-12 ${
                errors.file && touched.file ? "text-red-400" : "text-navy/30"
              }`} />
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
        
        {/* Added reCAPTCHA */}
        <div className="flex flex-col items-center py-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
          />
          {errors.recaptcha && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.recaptcha}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center h-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full max-w-[304px] mx-auto px-6 py-3 bg-navy text-cream rounded-md font-primary font-medium hover:bg-navy/90 transition-colors disabled:opacity-70"
      >
            {isSubmitting ? "Sending..." : "Start the Conversation"}
          </button>
        </div>
      </div>
    </form>
  )
}