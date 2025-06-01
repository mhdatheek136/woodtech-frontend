import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-secondary text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Two-column content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Main story */}
            <div className="prose prose-lg max-w-none">
              <p className="text-primary/80 font-primary text-xl leading-relaxed mb-8 font-light">
                Burrowed began as a simple idea: to create a space where literature could breathe, where stories could
                unfold without the pressure of trends or the noise of the digital age.
              </p>

              <p className="text-primary/70 font-primary text-lg leading-relaxed mb-6">
                Founded by <span className="text-accent font-medium">Woodland Publishing</span>, we believe in the
                transformative power of words that don't shout but whisper, stories that don't demand attention but earn
                it through their quiet brilliance.
              </p>

              <p className="text-primary/70 font-primary text-lg leading-relaxed mb-6">
                Each month, we curate a collection of poetry, prose, and visual narratives that celebrate the subtle art
                of storytelling. Our pages are home to emerging voices alongside established authors, all united by a
                commitment to authentic expression.
              </p>

              <p className="text-primary/70 font-primary text-lg leading-relaxed">
                We're not just a magazine; we're a community of readers, writers, and dreamers who understand that the
                most profound truths often come wrapped in the gentlest words.
              </p>
            </div>

            {/* Right column - Mission & values */}
            <div className="space-y-8">
              {/* Mission card */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="font-secondary text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-primary/80 font-primary leading-relaxed">
                  To spotlight subtle, soulful writing and celebrate voices that linger in the mind long after the last
                  page is turned. We champion literature that moves quietly but powerfully through the world.
                </p>
              </div>

              {/* Vision card */}
              <div className="bg-white rounded-3xl p-8 border border-primary/10 shadow-card">
                <h3 className="font-secondary text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-primary/80 font-primary leading-relaxed">
                  A literary landscape where thoughtful expression thrives, where readers discover new perspectives, and
                  where writers find their authentic voice in a supportive, creative community.
                </p>
              </div>

              {/* Publisher highlight */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/woodland-publishing-logo.png"
                    alt="Woodland Publishing"
                    width={100}
                    height={35}
                    className="opacity-90"
                  />
                </div>
                <p className="text-primary/70 font-primary text-sm leading-relaxed">
                  Published by Woodland Publishing, a house dedicated to nurturing literary excellence and fostering
                  meaningful connections between writers and readers across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
