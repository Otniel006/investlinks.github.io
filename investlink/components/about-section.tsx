"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">A propos</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Une équipe pluridisciplinaire alliant expertise technique et vision stratégique pour accompagner chaque étape de vos projets,
              de la conception financière à la réalisation concrète, avec rigueur et innovation.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-white">Clients</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-white">Awards</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-white">Pays</div>
              </div>
            </div>
            <Link href="/about">
              <Button variant="outline" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
                En savoir plus
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="About us"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
