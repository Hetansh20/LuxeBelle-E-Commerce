"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function NewArrivals() {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 pt-12"
      >
        New Arrivals
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image src="/anti-aging-cream.jpg" alt="Product 1" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Product 1</h2>
              <p className="text-gray-600 mb-2">$99.99</p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image src="/eau-de-parfum.avif" alt="Product 2" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Product 2</h2>
              <p className="text-gray-600 mb-2">$79.99</p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image src="/matte-lipstick.jpg" alt="Product 3" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Product 3</h2>
              <p className="text-gray-600 mb-2">$89.99</p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Product 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image src="/hydrating-serum.jpg" alt="Product 4" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Product 4</h2>
              <p className="text-gray-600 mb-2">$69.99</p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
