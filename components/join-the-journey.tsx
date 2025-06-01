import Link from "next/link"
import { ArrowRight, Feather } from "lucide-react"

export function JoinTheJourney() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8">
            <Feather className="h-10 w-10 text-accent" />
          </div>

          {/* Main heading */}
          <h2 className="font-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Join the{" "}
            <span className="text-accent italic relative">
              Journey
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path
                  d="M0,10 Q25,3 50,8 T100,6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-accent/40"
                />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="text-primary/80 font-primary text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Whether you're a writer seeking a home for your words, a reader hungry for authentic stories, or simply
            someone who believes in the power of literature to transform lives — you belong here.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Link
              href="/submit"
              className="inline-flex items-center px-8 py-4 sm:px-12 sm:py-5 rounded-2xl bg-accent text-white font-primary font-bold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group transform hover:scale-[1.02]"
            >
              Explore Our Vision
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Supporting links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary/70 font-primary">
            <Link href="/submit" className="hover:text-accent transition-colors">
              Submit Your Work
            </Link>
            <span className="hidden sm:inline text-primary/40">•</span>
            <Link href="/issues" className="hover:text-accent transition-colors">
              Read Our Issues
            </Link>
            <span className="hidden sm:inline text-primary/40">•</span>
            <Link href="/collaborate" className="hover:text-accent transition-colors">
              Partner With Us
            </Link>
          </div>

          {/* Final quote */}
          <div className="mt-12 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card">
            <blockquote className="text-primary/80 font-primary text-lg italic leading-relaxed">
              "In every story we publish, in every poem we share, we're building a bridge between hearts and minds.
              Come, be part of this quiet revolution."
            </blockquote>
            <p className="text-primary/60 font-primary text-sm mt-4">— The Burrowed Editorial Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
