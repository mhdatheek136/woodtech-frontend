import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
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
              <Link
                href="https://twitter.com"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
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
                href="https://youtube.com"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
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
                  href="/submission-guidelines"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                >
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
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
                  href="/privacy-policy"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-accent text-sm font-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="text-white/60 hover:text-accent text-sm font-primary transition-colors"
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
            <div className="mt-4 md:mt-0">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full sm:w-auto rounded-l-2xl border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-r-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
