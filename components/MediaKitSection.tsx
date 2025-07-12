// components/MediaKitSection.tsx
"use client";

import { Download } from "lucide-react";

export default function MediaKitSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-cream/80 text-3xl md:text-4xl font-bold mb-6">
            Download Our Media Kit
          </h2>
          <p className="font-primary text-lg text-cream/80 mb-8">
            Get the details, designs, and sample ad slots.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 rounded-md bg-cream/50 text-navy/70 font-primary font-medium shadow-sm cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}