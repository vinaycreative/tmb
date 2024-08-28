import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TheMovieBase - Where Movie Lovers Unite",
  description:
    "Welcome to TheMovieBase, your ultimate destination for movies, TV shows, and more. Explore a vast collection of films, discover new releases, and dive into a world of cinematic wonders. Get detailed information, reviews, and ratings to help you make the perfect viewing choices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
