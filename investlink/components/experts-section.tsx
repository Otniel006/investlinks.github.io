"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ClipboardList, Construction, FileStack, LineChart, Scale, Map } from "lucide-react"

export default function ExpertsSection() {
  return (
    <section id="experts" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez les professionnels talentueux qui apportent leur expertise et leur passion à chaque projet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-center-4 gap-8 mb-12">
          {[
            {
              icon: LineChart,
              title: "Experts en finance et économie",
              description: "Modèles financiers sur-mesure pour des investissements durables.",
            },
            {
              icon: Construction,
              title: "Ingénieurs en génie civil",
              description: "Conception et exécution de projets d'infrastructures clés.",
            },
            {
              icon: FileStack,
              title: "Spécialistes en montage de projets",
              description: "Transformer vos idées en dossiers d'investissement attractifs.",
            },
            {
              icon: Scale,
              title: "Juristes d'affaires",
              description: "Sécurisation juridique de vos opérations et partenariats.",
            },
            {
              icon: Map,
              title: "Consultants en développement territorial",
              description: "Exécution fluide, qualité et délais maîtrisés.",
            },
            {
              icon: ClipboardList,
              title: "Chargés de missions sectorielles",
              description: "Interlocuteurs dédiés par secteur pour un suivi sur mesure.",
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
              <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
