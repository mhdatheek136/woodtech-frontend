import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Burrowed - A Literary Magazine",
  description: "A quarterly literary magazine celebrating the art of storytelling.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-primary">{children}</body>
    </html>
  )
}
