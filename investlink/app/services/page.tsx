"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Palette, BarChart, Shield, Cloud, Smartphone, Puzzle, Globe, FileText, BarChart4, HardHat, ShieldCheck, RefreshCw} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Des solutions complètes conçues pour répondre aux besoins de votre 
              entreprise et stimuler la croissance dans le paysage numérique actuel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-center-2 gap-12">
            {[
              {
                icon: Puzzle,
                title: "Structuration de projets complexes",
                description:
                  "Nous transformons les idées en projets d'investissement viables grâce à une analyse multidimensionnelle (technique, économique, financière et institutionnelle) pour garantir leur bancabilité et alignement avec les attentes des bailleurs.",
                features: ["Analyse de faisabilité", "Modélisation financière", "Adéquation bailleurs", "Bancabilité"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: Globe,
                title: "Recherche et négociation de financements",
                description:
                  "Nous connectons les porteurs de projets avec un réseau international de financeurs (banques, investisseurs, bailleurs) et négocions les meilleures conditions financières, incluant la mobilisation de fonds publics/privés.",
                features: ["Réseau financier", "Argumentaire sur mesure", "Négociation", "Mix de financement"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: FileText,
              title: "Montage de dossiers techniques et financiers",
                description:
                  "Nous produisons des dossiers d'investissement complets (business plans, études techniques, prévisionnels) répondant aux standards internationaux pour maximiser les chances de levée de fonds.",
                features: ["Business plan", "Étude de marché", "Prévisionnels", "Dossier bailleur"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: BarChart4,
                title: "Suivi-évaluation de projets",
                description: "Nous assurons un monitoring rigoureux via des indicateurs de performance, évaluations périodiques et rapports d'impact pour une gestion transparente et axée résultats.",
                features: ["KPI", "Audit", "Rapport d'impact", "Optimisation"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: HardHat,
                title: "Pilotage de chantiers de construction",
                description:
                  "Nous gérons l'intégralité des chantiers (planification, exécution, livraison) en garantissant qualité, sécurité, respect des délais/budgets et conformité réglementaire.",
                features: ["Planning", "Contrôle qualité", "Sécurité", "Livraison clés en main"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: ShieldCheck,
                title: "Assistance à maîtrise d’ouvrage (AMO)",
                description: "Nous conseillons les maîtres d'ouvrage sur l'ensemble du cycle de vie des projets pour défendre leurs intérêts (qualité/coût/délais) et sécuriser les livrables.",
                features: ["Conseil indépendant", "Arbitrage", "Garantie résultat", "Réception"],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: RefreshCw,
                title: "Conduite du changement et appui institutionnel",
                description: "Nous accompagnons la modernisation des organisations via la refonte des processus, formation des équipes et renforcement des capacités pour des transformations durables.",
                features: ["Réorganisation", "Digitalisation", "Formation", "Pérennisation"],
                image: "/placeholder.svg?height=400&width=500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre démarche</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée qui garantit la réussite du projet et la satisfaction du client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Découverte",
                description: "Nous commençons par comprendre les objectifs, les défis et les besoins de votre entreprise.",
              },
              {
                step: "02",
                title: "Stratégie",
                description: "Nous élaborons une stratégie globale et une feuille de route adaptées à vos besoins.",
              },
              {
                step: "03",
                title: "Exécution",
                description: "Notre équipe d'experts met en œuvre la solution avec précision et souci du détail.",
              },
              {
                step: "04",
                title: "Livraison",
                description: "Nous livrons le produit final et assurons un soutien et une maintenance continus.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discutons de la manière dont nos services peuvent vous aider à transformer votre entreprise et à atteindre vos objectifs.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                Contactez-nous dès aujourd'hui
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
