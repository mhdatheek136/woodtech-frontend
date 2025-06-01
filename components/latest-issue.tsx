import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, BookOpen } from "lucide-react"

export function LatestIssue() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Left Column - Issue Information (60% width) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {/* Issue Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-primary/60 mb-4 font-primary text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>May 2025</span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4" />
                  <span>Season 1, Volume 5</span>
                </div>

                <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                  Current Issue · Season 1 - 2025 · Vol. 5 – May
                </h2>

                <div className="mb-6">
                  <span className="font-secondary text-2xl md:text-3xl text-accent italic">"Soft Revolution"</span>
                </div>
              </div>

              {/* Issue Description */}
              <div className="mb-8 md:mb-10">
                <p className="text-primary/80 font-primary text-lg md:text-xl leading-relaxed mb-6">
                  This month's issue explores softness as resistance — gentle defiance, quiet revolutions, and the
                  unspoken strength of emotion in art and literature.
                </p>

                <p className="text-primary/70 font-primary text-base md:text-lg leading-relaxed">
                  From whispered protests to tender manifestos, we celebrate the power of gentleness in a world that
                  often demands loudness. Discover how softness becomes a form of rebellion, and how quiet voices can
                  spark the most profound changes.
                </p>
              </div>

              {/* Featured Content Highlights */}
              <div className="mb-8 md:mb-10">
                <h3 className="font-secondary text-xl font-semibold text-primary mb-4">In This Issue</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">Poetry of Resistance</h4>
                      <p className="text-primary/60 text-sm">Gentle verses that challenge and inspire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">Quiet Manifestos</h4>
                      <p className="text-primary/60 text-sm">Essays on the power of understated change</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">Visual Narratives</h4>
                      <p className="text-primary/60 text-sm">Art that speaks in whispers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">Emerging Voices</h4>
                      <p className="text-primary/60 text-sm">New writers exploring soft rebellion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/issues/current"
                  className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base justify-center"
                >
                  Read This Issue
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/issues"
                  className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-semibold hover:bg-secondary/50 transition-all duration-300 shadow-card hover:shadow-soft group text-sm sm:text-base justify-center"
                >
                  Browse Past Issues
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column - Magazine Cover (40% width) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Magazine Cover - A4 Proportions with real magazine edges */}
                <div className="relative w-full aspect-[210/297] overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] shadow-magazine-edge">
                  <Image
                    src="/images/burrowed-cover.png"
                    alt="Burrowed Magazine - Soft Revolution Issue Cover"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>

                  {/* Issue badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-primary font-primary text-xs font-medium">Vol. 5 - May 2025</span>
                  </div>

                  {/* Magazine edge effect */}
                  <div className="absolute inset-0 border border-gray-200"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"></div>

                {/* Publisher credit */}
                <div className="mt-6 text-center">
                  <p className="text-primary/60 font-primary text-sm mb-2">Published by</p>
                  <div className="inline-flex items-center justify-center">
                    <Image
                      src="/images/woodland-publishing-logo.png"
                      alt="Woodland Publishing"
                      width={120}
                      height={40}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
