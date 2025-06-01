import Link from "next/link"
import Image from "next/image"
import { Calendar, BookOpen, Download } from "lucide-react"

export interface IssueCardProps {
  id: string
  title: string
  date: string
  volume: number
  edition: number
  coverImage: string
  tags: string[]
}

export function IssueCard({ id, title, date, volume, edition, coverImage, tags }: IssueCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-card border border-primary/5 transition-transform hover:shadow-soft hover:-translate-y-1">
      <div className="relative h-[280px]">
        {/* Magazine with real edges */}
        <div className="relative w-full h-full shadow-magazine-edge">
          <Image src={coverImage || "/placeholder.svg"} alt={`${title} Cover`} fill className="object-cover" />

          {/* Magazine edge effect */}
          <div className="absolute inset-0 border border-gray-200"></div>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 text-primary/60 mb-2 font-primary text-xs">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
          <span className="mx-1">•</span>
          <BookOpen className="h-3 w-3" />
          <span>
            Volume {volume}, Edition {edition}
          </span>
        </div>
        <h3 className="font-secondary text-xl font-bold text-primary mb-3 line-clamp-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-primary">
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
          <Link
            href={`/issues/${id}`}
            className="inline-flex items-center px-4 py-2 rounded-2xl bg-accent text-white font-primary text-sm font-medium hover:bg-accent/90 transition-colors shadow-soft"
          >
            Read Issue
          </Link>
          <Link
            href={`/issues/${id}/download`}
            className="inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-primary/20 text-primary font-primary text-sm font-medium hover:bg-secondary/50 transition-colors shadow-card"
          >
            <Download className="mr-1 h-3 w-3" />
            Download
          </Link>
        </div>
      </div>
    </div>
  )
}
