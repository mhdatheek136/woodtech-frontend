"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-logo text-2xl font-bold text-primary">BURROWED</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className={`font-primary font-medium transition-colors ${
                  isActive("/") ? "text-accent" : "text-primary/80 hover:text-accent"
                }`}
              >
                Home
              </Link>
              <Link
                href="/issues"
                className={`font-primary font-medium transition-colors ${
                  isActive("/issues") ? "text-accent" : "text-primary/80 hover:text-accent"
                }`}
              >
                Issues
              </Link>
              <Link
                href="/about"
                className={`font-primary font-medium transition-colors ${
                  isActive("/about") ? "text-accent" : "text-primary/80 hover:text-accent"
                }`}
              >
                About
              </Link>
              <Link
                href="/collaborate"
                className={`font-primary font-medium transition-colors ${
                  isActive("/collaborate") ? "text-accent" : "text-primary/80 hover:text-accent"
                }`}
              >
                Collaborate
              </Link>
              <Link
                href="/submit"
                className="px-6 py-2 rounded-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft"
              >
                Submit Your Work
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-2xl text-primary/80 hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 shadow-soft">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-2xl text-base font-primary font-medium transition-colors ${
                isActive("/") ? "bg-accent/10 text-accent" : "text-primary/80 hover:text-accent hover:bg-secondary/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/issues"
              className={`block px-4 py-3 rounded-2xl text-base font-primary font-medium transition-colors ${
                isActive("/issues")
                  ? "bg-accent/10 text-accent"
                  : "text-primary/80 hover:text-accent hover:bg-secondary/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Issues
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 rounded-2xl text-base font-primary font-medium transition-colors ${
                isActive("/about")
                  ? "bg-accent/10 text-accent"
                  : "text-primary/80 hover:text-accent hover:bg-secondary/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/collaborate"
              className={`block px-4 py-3 rounded-2xl text-base font-primary font-medium transition-colors ${
                isActive("/collaborate")
                  ? "bg-accent/10 text-accent"
                  : "text-primary/80 hover:text-accent hover:bg-secondary/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborate
            </Link>
            <Link
              href="/submit"
              className="block px-4 py-3 rounded-2xl text-base font-primary font-medium bg-accent text-white hover:bg-accent/90 transition-colors mx-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Your Work
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
