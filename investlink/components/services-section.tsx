"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Puzzle, Globe, FileText, BarChart4, HardHat, ShieldCheck, RefreshCw } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes conçues pour répondre aux besoins de votre entreprise et stimuler la croissance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-center-4 gap-8 mb-12">
          {[
            {
              icon: Puzzle,
              title: "Structuration de projets complexes",
              description: "De l'idée à un modèle bancable.",
            },
            {
              icon: Globe,
              title: "Recherche et négociation de financements",
              description: "Réseau et expertise pour des financements optimisés.",
            },
            {
              icon: FileText,
              title: "Montage de dossiers techniques et financiers",
              description: "Des dossiers convaincants pour séduire les investisseurs.",
            },
            {
              icon: BarChart4,
              title: "Suivi-évaluation de projets",
              description: "Une traçabilité rigoureuse pour des résultats tangibles.",
            },
            {
              icon: HardHat,
              title: "Pilotage de chantiers de construction",
              description: "Exécution fluide, qualité et délais maîtrisés.",
            },
            {
              icon: ShieldCheck,
              title: "Assistance à maîtrise d’ouvrage (AMO)",
              description: "Vos intérêts défendus à chaque étape clé.",
            },
            {
              icon: RefreshCw,
              title: "Conduite du changement et appui institutionnel",
              description: "Transformer les organisations avec agilité.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
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
          <Link href="/services">
            <Button variant="outline" className="bg-white text-purple-600 border-purple-600 hover:bg-purple-50">
              En savoir plus
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
