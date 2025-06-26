"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, BookOpen, Download, ArrowRight } from "lucide-react";
import FlipBookReader from "./FlipBookReader";

interface Magazine {
  id: number;
  title: string;
  publish_date: string;
  description: string;
  cover_image: string;
  issue_number: string;
  volume_number: number;
  season_number: number;
  pdf_file: string;
  is_published: boolean;
  page_images: string[];
}

export function FeaturedIssue() {
  const [latestMagazine, setLatestMagazine] = useState<Magazine | null>(null);
  const [openMag, setOpenMag] = useState<Magazine | null>(null);
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    async function fetchLatestMagazine() {
      try {
        const res = await fetch(`${API_BASE_URL}/magazines/latest`);
        if (!res.ok) {
          throw new Error("Failed to fetch latest magazine");
        }
        const data = (await res.json()) as Magazine;
        setLatestMagazine(data);
      } catch (err) {
        console.error("Error fetching latest magazine:", err);
      }
    }
    fetchLatestMagazine();
  }, [API_BASE_URL]);

  function formatPublishDate(dateString: string) {
    const d = new Date(dateString);
    return d.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="py-6 px-4 sm:px-6 mb-12 md:mb-16">
      <h2 className="font-secondary text-2xl font-bold text-primary mb-6">
        Latest Issue
      </h2>

      <div className="bg-white overflow-hidden shadow-card border border-primary/5">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Cover Image with sharp corners */}
          <div className="flex justify-center items-center p-6 md:p-8">
            <div className="relative w-full max-w-sm bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Cover with sharp corners */}
              <div className="relative w-full aspect-[210/297] overflow-hidden border border-gray-200">
                {latestMagazine ? (
                  <Image
                    src={latestMagazine.cover_image}
                    alt={`Cover of ${latestMagazine.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full animate-pulse" />
                )}
                
                {/* Subtle shadow effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.03)]"></div>
              </div>
              
              {/* Cover shadow - sharp bottom edge */}
              <div className="absolute -bottom-3 left-2 right-2 h-3 bg-gray-200/40 blur-sm z-[-1]"></div>
              
              {/* Issue badge - sharp corners */}
              {latestMagazine && (
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-gray-300">
                  <span className="text-primary font-primary text-xs font-medium">
                    Vol. {latestMagazine.volume_number} · {formatPublishDate(latestMagazine.publish_date)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Metadata & Actions */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary/60 mb-4 font-primary text-sm">
              <Calendar className="h-4 w-4" />
              <span>
                {latestMagazine
                  ? formatPublishDate(latestMagazine.publish_date)
                  : "Loading Date..."}
              </span>
              <span className="mx-2">•</span>
              <BookOpen className="h-4 w-4" />
              <span>
                {latestMagazine
                  ? `Season ${latestMagazine.season_number}, Vol. ${latestMagazine.volume_number}`
                  : "Season • Vol"}
              </span>
            </div>

            <h3 className="font-secondary text-3xl md:text-4xl font-bold text-primary mb-4">
              {latestMagazine ? latestMagazine.title : "Loading Title..."}
            </h3>

            <p className="text-primary/80 mb-6 font-primary leading-relaxed">
              {latestMagazine
                ? latestMagazine.description
                : "Loading description..."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {latestMagazine ? (
                <>
                  <button
                    onClick={() => setOpenMag(latestMagazine)}
                    className="inline-flex items-center px-6 py-3 rounded-2xl bg-accent text-white font-primary font-medium hover:bg-accent/90 transition-colors shadow-soft"
                  >
                    Read This Issue
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <Link
                    href={latestMagazine.pdf_file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-2xl bg-white border border-primary/20 text-primary font-primary font-medium hover:bg-secondary/50 transition-colors shadow-card"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="inline-flex items-center px-6 py-3 bg-accent/70 text-white font-primary font-medium opacity-60 cursor-not-allowed"
                  >
                    Loading…
                  </button>
                  <button
                    disabled
                    className="inline-flex items-center px-6 py-3 bg-white/70 border border-primary/20 text-primary font-primary font-medium opacity-60 cursor-not-allowed"
                  >
                    Loading…
                  </button>
                </>
              )}
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