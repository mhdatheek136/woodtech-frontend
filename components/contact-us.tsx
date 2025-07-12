import Link from "next/link"
import { ArrowRight } from "lucide-react"

/** Small “Contact Us” call-out used at the bottom of the About page */
export const ContactUs = () => {
  return (
    <div className="text-center py-16">
      <p className="font-primary text-primary/80 mb-6">
        Have questions or want to work with us? We’d love to hear from you.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl bg-accent text-white font-primary font-bold text-xs sm:text-sm md:text-base hover:bg-accent/90 transition-all duration-300 shadow-soft whitespace-nowrap group"
      >
        Contact&nbsp;Us
        <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
