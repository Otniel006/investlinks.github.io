'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandBand() {
  const brands = [
    { name: "Microsoft", logo: "/afristat.jpeg?height=60&width=120&text=Microsoft" },
    { name: "Google", logo: "/afritac.png?height=60&width=120&text=Google" },
    { name: "Apple", logo: "/allemand.jpeg?height=60&width=120&text=Apple" },
    { name: "Amazon", logo: "/aml.png?height=60&width=120&text=Amazon" },
    { name: "Meta", logo: "/bceao.jpeg?height=60&width=120&text=Meta" },
    { name: "Tesla", logo: "/biic.png?height=60&width=120&text=Tesla" },
    { name: "Netflix", logo: "/bouygues.png?height=60&width=120&text=Netflix" },
    { name: "Spotify", logo: "/care.png?height=60&width=120&text=Spotify" },
  ]

  const brandWidth = 120 + 48 // largeur totale par élément (logo + gap)
  const totalWidth = brands.length * brandWidth

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Nos Partenaires
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Des centaines d'entreprises nous confient déjà leur succès
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          style={{ display: 'flex', width: totalWidth * 2 }}
          animate={{ x: [-totalWidth, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: (brands.length * 1.5), // adapte la vitesse
              ease: 'linear',
            },
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: 120, marginRight: 48 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
