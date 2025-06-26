"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Heart, Leaf, Rocket, Network, Puzzle, FileSearch, MapPin, ClipboardCheck, Construction, Crown } from "lucide-react"

export default function MissionsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Notre mission et notre vision</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous sommes à l'origine d'un changement positif grâce à l'innovation, à la durabilité et à 
              un impact significatif dans tout ce que nous entreprenons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Notre mission est de faciliter l’accès au financement et d’accompagner les porteurs de projets, 
les particuliers, entreprises et institutions dans chaque étape, la conception, la planification et 
la réalisation de leurs projets de construction, en leur offrant des solutions innovantes, efficaces 
et respectueuses des normes techniques et environnementales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                 L’idée à la concrétisation, en passant par l’ingénierie financière, le suivi et la réalisation technique.
                 Nous agissons comme un levier de croissance pour nos clients en Afrique et ailleurs 
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Mission illustration"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Vision illustration"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Être le leader mondial des solutions de transformation qui façonnent l'avenir des entreprises et de la société,
                en créant un monde où l'innovation est au service de l'humanité et où la durabilité est au cœur du progrès.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous envisageons un avenir où nos contributions aideront à bâtir des communautés plus fortes, des entreprises plus efficaces,
                et une planète plus durable pour tous.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Domaines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous intervenons sur 7 axes principalements a savoir:            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-center-4 gap-8">
            {[
              {
                icon: Network,
                title: "Intermédiation financière",
                description:
                  "Mise en relation stratégique avec banques, investisseurs et bailleurs de fonds locaux/internationaux.",
              },
              {
                icon: Puzzle,
                title: "Structuration de projets",
                description: "Transformation des concepts en projets bancables grâce à l'ingénierie financière.",
              },
              {
                icon: Crown,
                title: "Conseil stratégique",
                description:
                  "Accompagnement sur mesure pour entreprises et institutions dans leur développement.",
              },
              {
                icon: FileSearch,
                title: "Études techniques",
                description: "Analyses économiques, financières et environnementales pour réduire les risques.",
              },
              {
                icon: MapPin,
                title: "Appui aux territoires",
                description:
                  "Appui technique et renforcement des capacités pour les collectivités locales.",
              },
              {
                icon: ClipboardCheck,
                title: "Gestion de projets",
                description: "Pilotage complet de A à Z avec contrôle des délais, coûts et qualité.",
              },
              {
                icon: Construction,
                title: "Génie civil",
                description:
                  "Réalisation d'infrastructures et aménagements aux normes internationales.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <pillar.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our 2025 Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambitious targets that drive us forward and measure our progress toward our vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "50%",
                title: "Carbon Footprint Reduction",
                description:
                  "Achieve a 50% reduction in our carbon footprint through sustainable practices and green technologies.",
              },
              {
                number: "1M+",
                title: "Lives Impacted",
                description:
                  "Positively impact over 1 million lives through our products, services, and community initiatives.",
              },
              {
                number: "100%",
                title: "Renewable Energy",
                description: "Transition to 100% renewable energy across all our operations and facilities worldwide.",
              },
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">{goal.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
