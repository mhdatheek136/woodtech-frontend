// components/issue-card.tsx
"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Calendar, BookOpen, Download, ArrowRight, Sun } from "lucide-react";
import FlipBookReader from "./FlipBookReader";

export interface IssueCardProps {
  id: string;
  title: string;
  date: string;              // e.g. "May 2022"
  year: number;          // Replaced volume_number
  season: string;        // Replaced season_number (values: 'Winter','Spring','Summer','Fall')
  coverImage: string;
  tags?: string[];
  pageImages?: string[];     // array of absolute URLs for flipbook pages
  pdfFile?: string;          // absolute URL for PDF download
}

export function IssueCard({
  id,
  title,
  date,
  year,
  season,
  coverImage,
  tags = [],
  pageImages = [],
  pdfFile,
}: IssueCardProps) {
  const [openPages, setOpenPages] = useState<string[] | null>(null);

  // Render overlay via React portal so it isn't clipped inside the card
  const overlay = openPages ? (
    typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <FlipBookReader
              pages={openPages}
              downloadUrl={pdfFile} 
              onClose={() => setOpenPages(null)}
            />
          </div>,
          document.body
        )
      : null
  ) : null;

  return (
    <>
      <div className="bg-white overflow-hidden shadow-card border border-primary/5 transition-transform hover:shadow-soft hover:-translate-y-1">
        {/* Cover Image */}
        <div className="relative w-full aspect-[1275/1650] overflow-hidden">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`${title} Cover`}
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 border border-gray-200"></div>
        </div>

        {/* Text Content */}
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-2 text-primary/60 mb-2 font-primary text-xs">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
            <span className="mx-1">•</span>
            <BookOpen className="h-3 w-3" />
<span className="inline-flex items-center font-medium">
  Year {year - 2024}, 
  <Sun className="w-4 h-4 mx-1 text-amber-500" />
  <span>{season}</span>
</span>
          </div>

          <h3 className="font-secondary text-xl font-bold text-primary mb-3 line-clamp-2">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-primary"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-primary">
                +{tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {pageImages.length > 0 ? (
              <button
                onClick={() => setOpenPages(pageImages)}
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-accent text-white font-primary text-sm font-medium hover:bg-accent/90 transition-colors shadow-soft"
              >
                Read Issue
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <Link
                href={`/issues/${id}`}
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-accent text-white font-primary text-sm font-medium hover:bg-accent/90 transition-colors shadow-soft"
              >
                Read Issue
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            {pdfFile ? (
              <Link
                href={pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-primary/20 text-primary font-primary text-sm font-medium hover:bg-secondary/50 transition-colors shadow-card"
              >
                <Download className="mr-1 h-3 w-3" />
                Download
              </Link>
            ) : (
              <Link
                href={`/issues/${id}/download`}
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-primary/20 text-primary font-primary text-sm font-medium hover:bg-secondary/50 transition-colors shadow-card"
              >
                <Download className="mr-1 h-3 w-3" />
                Download
              </Link>
            )}
          </div>
        </div>
      </div>

      {overlay}
    </>
  );
}
