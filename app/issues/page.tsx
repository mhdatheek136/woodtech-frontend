import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IssueFilters } from "@/components/issue-filters"
import { FeaturedIssue } from "@/components/featured-issue"
import { IssueGrid } from "@/components/issue-grid"

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-secondary text-4xl md:text-5xl font-bold text-navy mb-8 text-center">
            Burrowed Magazine Issues
          </h1>
          <IssueFilters />
          <FeaturedIssue />
          <IssueGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
