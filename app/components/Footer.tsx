"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Beauty Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Shipping Information", href: "/shipping" },
  { name: "Returns & Exchanges", href: "/returns" },
]

const categories = [
  { name: "Skincare", href: "/skincare" },
  { name: "Makeup", href: "/makeup" },
  { name: "Fragrance", href: "/fragrance" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "Special Offers", href: "/special-offers" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold font-serif mb-6">Quick Links</h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-pink-200 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold font-serif mb-6">Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="font-sans text-pink-200 hover:text-secondary transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold font-serif mb-6">Newsletter</h2>
            <p className="font-sans text-pink-200 mb-4">
              Subscribe to our newsletter for exclusive offers and beauty tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-sans flex-1 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="font-sans px-6 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

