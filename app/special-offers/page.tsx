"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SpecialOffers() {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 pt-12"
      >
        Special Offers
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Offer 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <Image src="/offers/summer-glow-kit.jpg" alt="Summer Glow Kit" width={300} height={300} layout="responsive" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">38% OFF</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Summer Glow Kit</h2>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through">$129.99</span>
                  <span className="text-xl font-bold text-pink-600 ml-2">$79.99</span>
                </div>
                <Link href="/product/1" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                  View Deal
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Offer 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <Image src="/offers/luxury-lipstick-set.jpg" alt="Luxury Lipstick Set" width={300} height={300} layout="responsive" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">44% OFF</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Luxury Lipstick Set</h2>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through">$89.99</span>
                  <span className="text-xl font-bold text-pink-600 ml-2">$49.99</span>
                </div>
                <Link href="/product/2" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                  View Deal
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Offer 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <Image src="/offers/anti-aging-serum.jpg" alt="Anti-Aging Serum" width={300} height={300} layout="responsive" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">40% OFF</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Anti-Aging Serum</h2>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through">$99.99</span>
                  <span className="text-xl font-bold text-pink-600 ml-2">$59.99</span>
                </div>
                <Link href="/product/3" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                  View Deal
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Offer 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <Image src="/offers/perfume-collection.jpg" alt="Perfume Collection" width={300} height={300} layout="responsive" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">35% OFF</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Perfume Collection</h2>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through">$199.99</span>
                  <span className="text-xl font-bold text-pink-600 ml-2">$129.99</span>
                </div>
                <Link href="/product/4" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                  View Deal
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
