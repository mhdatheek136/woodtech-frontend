"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "who-can-submit",
    question: "Who can submit to Burrowed?",
    answer:
      "Anyone can submit to Burrowed! We welcome submissions from writers of all experience levels, from first-time authors to established voices. Whether you're a student, emerging writer, or seasoned professional, if you have a story to tell, we want to read it. We accept work in English, Urdu, Sinhala, and Tamil.",
  },
  {
    id: "submission-fee",
    question: "Is there a submission fee?",
    answer:
      "No, there is absolutely no submission fee. We believe that financial barriers should never prevent talented writers from sharing their work. Submitting to Burrowed is completely free, and we're committed to keeping it that way.",
  },
  {
    id: "genres-accepted",
    question: "What genres do you accept?",
    answer:
      "We publish a wide range of literary work including poetry (free verse, spoken word, narrative), short fiction, creative nonfiction, personal essays, letters, reflections, and hybrid forms. We're particularly interested in work that explores quiet brilliance and thoughtful expression. We also welcome visual narratives and experimental pieces that push the boundaries of traditional literary forms.",
  },
  {
    id: "selection-process",
    question: "How do I know if my piece is selected?",
    answer:
      "We review submissions on a rolling basis and aim to respond within 2-3 weeks. You'll receive an email notification regardless of our decision. If your piece is selected, we'll provide details about publication timeline and any editing process. If not selected, we encourage you to submit again in the future as our needs and themes evolve with each issue.",
  },
  {
    id: "submission-guidelines",
    question: "What are the submission guidelines?",
    answer:
      "Please submit one piece per submission (maximum 3 pages for prose, 2 poems maximum). Work must be original and unpublished. Include a short author bio of 50-80 words. We prefer PDF format or Google Docs links. We accept simultaneous submissions but ask that you notify us immediately if your work is accepted elsewhere.",
  },
  {
    id: "publication-frequency",
    question: "How often is Burrowed published?",
    answer:
      "Burrowed is published monthly by Woodland Publishing. Each issue features a curated selection of poetry, prose, and visual narratives around different themes. We aim to create a consistent rhythm for our readers while allowing enough time to thoughtfully curate each issue.",
  },
  {
    id: "payment-compensation",
    question: "Do you pay contributors?",
    answer:
      "While we're currently a passion project and don't offer monetary compensation, we provide contributors with digital copies of the issue, author spotlights on our social media, and inclusion in our growing literary community. We're working toward offering payment to contributors as we grow and secure more funding.",
  },
  {
    id: "word-limits",
    question: "Are there word limits for submissions?",
    answer:
      "For prose pieces (fiction, essays, creative nonfiction), we prefer submissions under 3,000 words, though exceptional longer pieces may be considered. For poetry, we accept up to 2 poems per submission. We value quality over quantity and encourage writers to submit their strongest, most polished work.",
  },
  {
    id: "editing-process",
    question: "What is your editing process?",
    answer:
      "If your piece is accepted, our editorial team will work collaboratively with you on any necessary edits. We respect the author's voice and vision while ensuring clarity and consistency. You'll have the opportunity to review and approve all changes before publication. Our goal is to enhance your work while maintaining its authentic voice.",
  },
  {
    id: "resubmission-policy",
    question: "Can I resubmit if my work isn't accepted?",
    answer:
      "We encourage resubmission. Literary tastes and needs change with each issue, and a piece that doesn't fit one theme might be perfect for another. We recommend waiting at least one issue cycle before resubmitting the same piece, or feel free to submit new work at any time.",
  },
  {
    id: "international-submissions",
    question: "Do you accept international submissions?",
    answer:
      "Yes! We welcome submissions from writers around the world. Burrowed celebrates diverse voices and perspectives from all corners of the globe. We accept work in English, Urdu, Sinhala, and Tamil, and we're particularly interested in stories that reflect different cultural experiences and viewpoints.",
  },
  {
    id: "previously-published",
    question: "Can I submit previously published work?",
    answer:
      "We only accept original, unpublished work. This includes pieces that have appeared in other magazines, blogs, social media, or any other publication format. However, if you've shared a brief excerpt (under 100 words) on social media, that's generally acceptable. When in doubt, please mention any previous publication in your submission.",
  },
]

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-primary/10 shadow-card overflow-hidden transition-all duration-300 hover:shadow-soft"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-inset"
            aria-expanded={openItems.has(item.id)}
            aria-controls={`faq-answer-${item.id}`}
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <span className="font-primary font-bold text-accent text-sm">{index + 1}</span>
              </div>
              <h3 className="font-secondary text-lg md:text-xl font-semibold text-primary leading-tight pr-4">
                {item.question}
              </h3>
            </div>
            <div className="flex-shrink-0 ml-4">
              {openItems.has(item.id) ? (
                <ChevronUp className="h-5 w-5 text-primary/60 transition-transform duration-200" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary/60 transition-transform duration-200" />
              )}
            </div>
          </button>

          <div
            id={`faq-answer-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-5 md:px-8 md:pb-6">
              <div className="pl-12">
                <div className="w-full h-px bg-primary/10 mb-4"></div>
                <p className="font-primary text-primary/80 leading-relaxed text-base md:text-lg">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
