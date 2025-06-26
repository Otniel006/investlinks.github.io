"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100">
      <div className="text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Something went wrong</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={reset} className="bg-red-600 hover:bg-red-700">
              <RefreshCw className="mr-2 w-4 h-4" />
              Try Again
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white text-gray-700 hover:bg-gray-50">
                <Home className="mr-2 w-4 h-4" />
                Go Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
