import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional Business Solutions | InvestLink",
  description:
    "Transform your business with InvestLink's innovative solutions and expert services. We deliver cutting-edge solutions that drive growth and create lasting value.",
  keywords: "business solutions, web development, digital marketing, consulting, innovation, InvestLink",
  authors: [{ name: "InvestLink Team" }],
  creator: "InvestLink",
  publisher: "InvestLink",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://investlink.com",
    title: "Professional Business Solutions | InvestLink",
    description: "Transform your business with InvestLink's innovative solutions and expert services.",
    siteName: "InvestLink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Business Solutions | InvestLink",
    description: "Transform your business with InvestLink's innovative solutions and expert services.",
    creator: "@investlink",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
