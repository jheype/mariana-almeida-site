import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

  title: {
    default: "Mariana Almeida",
    template: "%s | Mariana Almeida",
  },

  description:
    "International criminal lawyer with experience at the International Criminal Court, specialising in public law and global legal systems.",

  openGraph: {
    title: "Mariana Almeida",
    description: "International criminal lawyer and academic",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Mariana Almeida",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mariana Almeida",
    description: "International criminal lawyer and academic",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}