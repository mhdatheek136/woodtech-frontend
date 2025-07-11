"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function SponsorCollaborate() {
  // Real sponsor/partner logos - now with 5 items
  const partners = [
    {
      name: "Coffidu",
      logo: "/logo/Coffidu-Logo.png",
      website: "https://coffidu.com",
    },
    {
      name: "Flashbook",
      logo: "/logo/Flashbook-Logo-text.png",
      website: "https://flashbook.lk",
    },
    {
      name: "Halal Hearts",
      logo: "/logo/HalalHearts-logo-text.png",
      website: "https://halalhearts.lk",
    },
    {
      name: "Aquapatel Jewellery",
      logo: "/logo/aquapatel_logo.png",
      website: "",
    },
    {
      name: "KAHIR Clothing",
      logo: "/logo/KHAIR_logo.png",
      website: "https://www.instagram.com/khair.cloths?igsh=MTFpc3hjbDlra3pnNg==",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Sponsor or Collaborate
            </h2>
            <p className="text-primary/80 font-primary text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Partner with us to showcase your brand and connect with our vibrant community through meaningful sponsorships and collaborations.
            </p>
          </div>

          {/* Partners Grid - Reduced gaps */}
          <div className="mb-16">
            <h3 className="font-secondary text-xl font-semibold text-primary mb-8 text-center">
              Trusted by Our Partners
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 lg:gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative w-full max-w-[150px] sm:max-w-[170px] h-16 sm:h-20 flex items-center justify-center"
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </a>

                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-2 py-1 rounded text-xs font-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h4 className="font-secondary text-lg font-semibold text-primary mb-2">
                Brand Partnerships
              </h4>
              <p className="text-primary/70 font-primary text-sm">
                Seamless brand integrations that align with our mission and aesthetic.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-secondary text-lg font-semibold text-primary mb-2">
                Literary Events
              </h4>
              <p className="text-primary/70 font-primary text-sm">
                Collaborative readings, workshops, and gatherings that inspire.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h4 className="font-secondary text-lg font-semibold text-primary mb-2">
                Content Collaboration
              </h4>
              <p className="text-primary/70 font-primary text-sm">
                Co-created issues, contests, and special projects.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/collaborate"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base"
            >
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-primary/60 font-primary text-sm">
              Let's build something amazing together.{' '}
              <Link href="/collaborate" className="text-accent hover:text-accent/80 transition-colors">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}