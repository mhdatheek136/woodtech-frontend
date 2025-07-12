// components/issue-grid.tsx
"use client";

import React, { useEffect, useState } from "react";
import { IssueCard, type IssueCardProps } from "./issue-card";

interface MagazineAPIResponse {
  id: number;
  title: string;
  publish_date: string;       // "YYYY-MM-DD"
  year: number;          // Replaced volume_number
  season: string;        // Replaced season_number (values: 'Winter','Spring','Summer','Fall')
  cover_image: string;        // absolute URL
  page_images: string[];      // absolute URLs
  pdf_file: string;           // absolute URL
}

export function IssueGrid() {
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    async function fetchMagazines() {
      try {
        const res = await fetch(`${API_BASE_URL}/magazines/`);
        if (!res.ok) throw new Error("Failed to fetch magazines");
        const data = (await res.json()) as unknown;

        // Handle both: array OR { results: [...] }
        let rawList: MagazineAPIResponse[] = [];
        if (Array.isArray(data)) {
          rawList = data;
        } else if (data && typeof data === "object" && "results" in (data as any)) {
          rawList = (data as any).results;
        } else {
          console.warn("Unexpected API shape for /magazines/:", data);
          rawList = [];
        }

        // Map API response into IssueCardProps
        const mapped: IssueCardProps[] = rawList.map((mag) => {
          // Format publish_date to "Month YYYY"
          const dateObj = new Date(mag.publish_date);
          const formattedDate = dateObj.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });

          return {
            id: mag.id.toString(),
            title: mag.title,
            date: formattedDate,
            year: mag.year,
            season: mag.season,
            coverImage: mag.cover_image,
            tags: [],                  // No tags from API; leave empty
            pageImages: mag.page_images,
            pdfFile: mag.pdf_file,
          };
        });

        setIssues(mapped);
      } catch (err) {
        console.error("Error fetching magazines:", err);
        setIssues([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMagazines();
  }, [API_BASE_URL]);

  if (loading) {
    return (
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-secondary text-2xl font-bold text-navy">
            All Issues
          </h2>
          <p className="text-navy/60 font-primary">Loading issues…</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-secondary text-2xl font-bold text-navy">
          All Issues
        </h2>
        <p className="text-navy/60 font-primary">Showing {issues.length} issues</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} {...issue} />
        ))}
      </div>
    </section>
  );
}
