import Link from "next/link"
import Image from "next/image"
import { Calendar, BookOpen, Download } from "lucide-react"

export function FeaturedIssue() {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="font-secondary text-2xl font-bold text-primary mb-6">Latest Issue</h2>
      <div className="bg-white overflow-hidden shadow-card border border-primary/5">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div className="relative h-[400px] md:h-auto">
            {/* Magazine with real edges */}
            <div className="relative w-full h-full shadow-magazine-edge">
              <Image
                src="/images/burrowed-cover.png"
                alt="Burrowed Magazine Issue 01 Cover"
                fill
                className="object-cover"
              />

              {/* Magazine edge effect */}
              <div className="absolute inset-0 border border-gray-200"></div>

              {/* Green inner shadow */}
              <div className="absolute inset-0 shadow-magazine-inner"></div>
            </div>
          </div>
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary/60 mb-4 font-primary text-sm">
              <Calendar className="h-4 w-4" />
              <span>May 2023</span>
              <span className="mx-2">•</span>
              <BookOpen className="h-4 w-4" />
              <span>Volume 1, Edition 1</span>
            </div>
            <h3 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">
              Pioneering the New Literary Revolution
            </h3>
            <p className="text-primary/80 mb-6 font-primary leading-relaxed">
              Woodland Publishing is setting the literary world on fire with a spellbinding Hogwarts-style
              experience—where readers duel with words, houses battle for glory, and a vibrant fellowship of book lovers
              brings stories to life like never before. This isn't just publishing—it's a reading revolution!
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-primary">Fiction</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-primary">Poetry</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-primary">Essays</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-primary">
                House Championships
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/issues/01"
                className="inline-flex items-center px-6 py-3 rounded-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft"
              >
                Read This Issue
              </Link>
              <Link
                href="/issues/01/download"
                className="inline-flex items-center px-6 py-3 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-medium hover:bg-secondary/50 transition-colors shadow-card"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
