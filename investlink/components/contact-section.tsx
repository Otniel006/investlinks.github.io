"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Prendre contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui et voyons ensemble comment nous pouvons vous aider.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Addresse</h3>
                <p className="text-gray-600">Ivoirienne, République de la cote d’Ivoire</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Télephone</h3>
                <p className="text-gray-600">+225 07 03 53 23 59 </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Mail</h3>
                <p className="text-gray-600">servais0@yahoo.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
            <form className="space-y-4">
              <Input placeholder="Nom" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Objet" />
              <div className="flex gap-4">
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700">Envoyez le message</Button>
                <Link href="/contact" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-white text-orange-600 border-orange-600 hover:bg-orange-50"
                  >
                    Savoir plus
                  </Button>
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
