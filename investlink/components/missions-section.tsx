"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, DollarSign, Handshake } from "lucide-react"

export default function MissionsSection() {
  return (
    <section id="missions" className="py-20 bg-gray-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structurer, financer et exécuter vos projets avec rigueur – parce que chaque ambition mérite une réalisation sans compromis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: DollarSign,
              title: "Faciliter l'accès au financement",
              description: "Solutions d'ingénierie financière sur mesure pour projets publics et privés.",
            },
            {
              icon: Handshake,
              title: "Accompagner de A à Z",
              description: "conception, planification et réalisation technique de vos projets de construction.",
            },
            {
              icon: Lightbulb,
              title: "Innover dans le respect des normes",
              description: "Méthodologies efficaces alliant performance, qualité technique et responsabilité environnementale.",
            },
          ].map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <mission.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/missions">
            <Button variant="outline" className="bg-white text-green-600 border-green-600 hover:bg-green-50">
              En savoir plus
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
