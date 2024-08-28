import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TheMovieBase - Where Movie Lovers Unite",
  description:
    "Welcome to TheMovieBase, your ultimate destination for movies, TV shows, and more. Explore a vast collection of films, discover new releases, and dive into a world of cinematic wonders. Get detailed information, reviews, and ratings to help you make the perfect viewing choices.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
