"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, BookOpen, Sun } from "lucide-react";
import FlipBookReader from "./FlipBookReader";

interface Magazine {
  id: number;
  title: string;
  publish_date: string;    // from serializer (YYYY-MM-DD)
  description: string;
  cover_image: string;     // absolute URL
  issue_number: string;
  year: number;          // Replaced volume_number
  season: string;        // Replaced season_number (values: 'Winter','Spring','Summer','Fall')
  pdf_file: string;
  is_published: boolean;
  page_images: string[];   // array of absolute URLs
}

export function LatestIssue() {
  const [latestMagazine, setLatestMagazine] = useState<Magazine | null>(null);
  const [openMag, setOpenMag] = useState<Magazine | null>(null);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    async function fetchLatest() {
      try {
const version = latestMagazine?.publish_date ?? "";
const res = await fetch(
  `${API_BASE_URL}/magazines/latest?v=${encodeURIComponent(version)}`
);
if (!res.ok) {
  throw new Error("Failed to fetch latest magazine");
}
const data = (await res.json()) as Magazine;
setLatestMagazine(data);

      } catch (err) {
        console.error("Error fetching latest magazine:", err);
      }
    }
    fetchLatest();
  }, [API_BASE_URL]);

  // Helper to format “May 2025” from publish_date = "2025-05-10"
  function formatPublishDate(dateString: string) {
    const d = new Date(dateString);
    return d.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Left Column – Issue Information (60% width) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {/* Issue Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-primary/60 mb-4 font-primary text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {latestMagazine
                      ? formatPublishDate(latestMagazine.publish_date)
                      : "Loading Date..."}
                  </span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4" />
                <span className="inline-flex items-center">
                  {latestMagazine ? (
                    <>
                      Year {latestMagazine.year}, 
                      <Sun className="w-4 h-4 mx-1 text-amber-500" />
                      {latestMagazine.season}
                    </>
                  ) : (
                    "Year • Season"
                  )}
                </span>
                </div>

                <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                  {latestMagazine
                    ? `Current Issue · Year ${latestMagazine.year - 2024} - ${new Date(
                        latestMagazine.publish_date
                      ).getFullYear()} · ${latestMagazine.season} – ${new Date(
                        latestMagazine.publish_date
                      ).toLocaleString("default", { month: "long" })}`
                    : "Loading Latest Issue..."}
                </h2>

                {latestMagazine && (
                  <div className="mb-6">
                    <span className="font-secondary text-2xl md:text-3xl text-accent italic">
                      {latestMagazine.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Issue Description */}
              <div className="mb-8 md:mb-10">
                {latestMagazine ? (
                  <p className="text-primary/80 font-primary text-lg md:text-xl leading-relaxed mb-6">
                    {latestMagazine.description}
                  </p>
                ) : (
                  <p className="text-primary/80 font-primary text-lg md:text-xl leading-relaxed mb-6">
                    Loading description...
                  </p>
                )}
              </div>

              {/* Featured Content Highlights */}
              <div className="mb-8 md:mb-10">
                <h3 className="font-secondary text-xl font-semibold text-primary mb-4">
                  In This Issue
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">
                        Poetry of Resistance
                      </h4>
                      <p className="text-primary/60 text-sm">
                        Gentle verses that challenge and inspire
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">
                        Quiet Manifestos
                      </h4>
                      <p className="text-primary/60 text-sm">
                        Essays on the power of understated change
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">
                        Visual Narratives
                      </h4>
                      <p className="text-primary/60 text-sm">
                        Art that speaks in whispers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-primary font-medium text-primary">
                        Emerging Voices
                      </h4>
                      <p className="text-primary/60 text-sm">
                        New writers exploring soft rebellion
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {latestMagazine ? (
                  <>
                    <button
                      onClick={() => setOpenMag(latestMagazine)}
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent text-white font-primary font-semibold hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-xl group text-sm sm:text-base justify-center"
                    >
                      Read This Issue
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <Link
                      href="/issues"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-semibold hover:bg-secondary/50 transition-all duration-300 shadow-card hover:shadow-soft group text-sm sm:text-base justify-center"
                    >
                      Browse Past Issues
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-accent/70 text-white font-primary font-semibold opacity-60 cursor-not-allowed text-sm sm:text-base justify-center"
                    >
                      Loading…
                    </button>
                    <button
                      disabled
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white/70 border border-primary/20 text-primary font-primary font-semibold opacity-60 cursor-not-allowed text-sm sm:text-base justify-center"
                    >
                      Loading…
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Right Column – Magazine Cover (40% width) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="relative w-full aspect-[1275/1650] overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] shadow-magazine-edge">
                  {latestMagazine ? (
<Image
  src={`${latestMagazine.cover_image}?v=${encodeURIComponent(
    latestMagazine.publish_date
  )}`}
  alt={`Cover of ${latestMagazine.title}`}
  fill
  className="object-cover"
  priority
/>


                  ) : (
                    <div className="bg-gray-200 w-full h-full" />
                  )}

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>

                  {/* Issue badge */}
{/* Issue badge with enhanced hover effect */}
{latestMagazine && (
  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 px-3 py-1 rounded-full flex items-center shadow-sm backdrop-blur-[2px]
                 border border-amber-200/50 transition-all duration-300 ease-in-out
                 hover:from-amber-100 hover:to-yellow-100 hover:border-amber-300 hover:shadow-md hover:scale-[1.02]">
    <Sun className="w-4 h-4 mr-1 text-amber-600 transition-colors duration-300 hover:text-amber-700" />
    <span className="text-amber-800 font-primary text-xs font-bold">
      Season {latestMagazine.season} – {formatPublishDate(latestMagazine.publish_date)}
    </span>
  </div>
)}

                  {/* Magazine edge effect */}
                  <div className="absolute inset-0 border border-gray-200"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"></div>

                {/* Publisher credit */}
                {latestMagazine && (
                  <div className="mt-6 text-center">
                    <p className="text-primary/60 font-primary text-sm mb-2">
                      Published by
                    </p>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FlipBookReader Overlay */}
      {openMag && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <FlipBookReader
            pages={openMag.page_images}
            downloadUrl={openMag.pdf_file}
            onClose={() => setOpenMag(null)}
          />
        </div>
      )}
    </section>
  );
}
