import type React from "react";
import Head from "next/head"; // Import Head
import "./globals.css";

export const metadata = {
  title: "Burrowed - A Literary Magazine",
  description: "A quarterly literary magazine celebrating the art of storytelling.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Burrowed - A Literary Magazine</title>
        <meta
          name="description"
          content="A quarterly literary magazine celebrating the art of storytelling."
        />
      </Head>
      <body className="font-primary">{children}</body>
    </html>
  );
}
