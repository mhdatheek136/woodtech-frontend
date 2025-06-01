import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { LatestIssue } from "@/components/latest-issue"
import { SubmissionCallout } from "@/components/submission-callout"
import { FeaturedNewsletter } from "@/components/featured-newsletter"
import { SponsorCollaborate } from "@/components/sponsor-collaborate"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <LatestIssue />
        <SubmissionCallout />
        <FeaturedNewsletter />
        <SponsorCollaborate />
      </main>
      <Footer />
    </div>
  )
}
