"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">InvestLinks</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              Transformer les entreprises grâce à des solutions innovantes et un service exceptionnel.
            </p>
            <div className="flex space-x-4">
              <Link href="/" >
                <Facebook className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 cursor-pointer transition-colors" />
              </Link>
              {/* <Link href="/" >
                <Twitter className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 cursor-pointer transition-colors" />
              </Link> */}
              <Link href="/" >
                <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 cursor-pointer transition-colors" />
              </Link>
              <Link href="/" >
                <Instagram className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Acces rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 dark:text-gray-500">Connexion</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Bancabilité</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Pilotage</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Viabilité</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Territorialisation</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Maîtrise</span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">Réalisation</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Ivoirienne, République de la cote d’Ivoire</li>
              {/* <li>Suite 100</li> */}
              {/* <li>New York, NY 10001</li> */}
              <li>+225 07 03 53 23 59</li>
              <li>contact@investlinks.bj</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} InvestLinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
