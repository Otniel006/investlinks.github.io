"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Award, Globe, BadgeCheck, Gem, Zap, HandHeart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">À propos de notre entreprise</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous sommes une entreprise tournée vers l'avenir qui se consacre à la fourniture de 
              solutions exceptionnelles qui stimulent l'innovation et créent une valeur durable pour 
              nos clients dans le monde entier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Notre histoire</h2>
              <p className="text-gray-600 dark:text-white mb-6 leading-relaxed">
                Nous sommes un groupe de professionnels multidisciplinaires unis par une vision commune : 
                connecter les idées aux opportunités et transformer les projets en réalités tangibles. 
                Fort de notre réseau local et international, INVEST LINKS s’appuie sur une approche rigoureuse 
                et orientée résultats. 
                Notre expertise repose sur des années d’expérience cumulée, une approche méthodique et un 
                engagement ferme envers la qualité et la durabilité.
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
                alt="Our team working together"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces principes fondamentaux guident tout ce que nous faisons et façonnent notre culture d'entreprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-center-4 gap-8">
            {[
              {
                icon: BadgeCheck,
                title: "Professionnalisme",
                description:
                  "Excellence opérationnelle et respect des engagements.",
              },
              {
                icon: Gem,
                title: "Intégrité",
                description:
                  "Transparence absolue et éthique irréprochable.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "Solutions créatives pour des défis complexes.",
              },
              {
                icon: HandHeart,
                title: "Engagement",
                description: "Implication totale jusqu'à la réussite du projet.",
              },
              {
                icon: TrendingUp,
                title: "Culture du Résultat",
                description: "Performance mesurable et impact durable.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Équipe de direction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les dirigeants visionnaires qui font avancer notre entreprise avec passion et expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Chief Operations Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Chief Operations Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
