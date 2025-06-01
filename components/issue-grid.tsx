import { IssueCard, type IssueCardProps } from "./issue-card"

// Sample issue data
const issues: IssueCardProps[] = [
  {
    id: "02",
    title: "The Whispers of Winter",
    date: "December 2022",
    volume: 1,
    edition: 2,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Winter Tales", "Poetry", "Short Fiction", "Essays"],
  },
  {
    id: "03",
    title: "Spring Awakening: Rebirth & Renewal",
    date: "March 2022",
    volume: 1,
    edition: 3,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Spring", "Renewal", "Nature", "Prose"],
  },
  {
    id: "04",
    title: "Summer Solstice: Light & Shadow",
    date: "June 2022",
    volume: 1,
    edition: 4,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Summer", "Light", "Shadow", "Flash Fiction"],
  },
  {
    id: "05",
    title: "Autumn Leaves: Transitions & Change",
    date: "September 2022",
    volume: 1,
    edition: 5,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Autumn", "Change", "Transitions", "Memoir"],
  },
  {
    id: "06",
    title: "The Art of Storytelling",
    date: "January 2021",
    volume: 2,
    edition: 1,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Storytelling", "Craft", "Technique", "Interviews"],
  },
  {
    id: "07",
    title: "Voices from the Margins",
    date: "April 2021",
    volume: 2,
    edition: 2,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Diversity", "Inclusion", "Voices", "Perspectives"],
  },
  {
    id: "08",
    title: "The Future of Literature",
    date: "July 2021",
    volume: 2,
    edition: 3,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Future", "Digital", "Innovation", "Trends"],
  },
  {
    id: "09",
    title: "Classics Reimagined",
    date: "October 2021",
    volume: 2,
    edition: 4,
    coverImage: "/placeholder.svg?height=400&width=300",
    tags: ["Classics", "Reimagined", "Adaptation", "Homage"],
  },
]

export function IssueGrid() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-secondary text-2xl font-bold text-navy">All Issues</h2>
        <p className="text-navy/60 font-primary">Showing {issues.length} issues</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} {...issue} />
        ))}
      </div>
    </section>
  )
}
