"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white">
              Votre partenaire pour des projets 
              <span className="text-blue-600"> Réussis </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-300">
              Expertise multidisciplinaire pour des solutions financières, techniques et stratégiques sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                  Lancez-vous
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/hero1.jpg?height=600&width=700"
              alt="Hero illustration"
              width={700}
              height={600}
              className="rounded-lg shadow-2xl mt-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
