import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
// import { MeetTheTeam } from "@/components/meet-the-team"
import { WhatWeValue } from "@/components/what-we-value"
import { JoinTheJourney } from "@/components/join-the-journey"
import { ContactUs } from "@/components/contact-us"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <ContactUs />
        <WhatWeValue />
        <JoinTheJourney />
      </main>
      <Footer />
    </div>
  )
}
