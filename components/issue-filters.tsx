"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

export function IssueFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedVolume, setSelectedVolume] = useState<string>("all")

  const years = ["all", "2023", "2022", "2021", "2020"]
  const volumes = ["all", "1", "2", "3", "4", "5"]

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-navy/40" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search issues by title or content..."
            className="pl-10 pr-4 py-3 w-full rounded-md border border-navy/20 bg-white focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-navy/20 bg-white hover:bg-cream/50 transition-colors font-primary"
        >
          <Filter className="h-5 w-5 text-navy/60" />
          <span>Filters</span>
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-6 rounded-md border border-navy/10 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-navy/70 mb-2 font-primary">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy/70 mb-2 font-primary">Volume</label>
            <select
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary"
            >
              {volumes.map((volume) => (
                <option key={volume} value={volume}>
                  {volume === "all" ? "All Volumes" : `Volume ${volume}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy/70 mb-2 font-primary">Sort By</label>
            <select className="w-full px-3 py-2 rounded-md border border-navy/20 focus:outline-none focus:ring-2 focus:ring-navy/30 font-primary">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="a-z">Title (A-Z)</option>
              <option value="z-a">Title (Z-A)</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors font-primary">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
