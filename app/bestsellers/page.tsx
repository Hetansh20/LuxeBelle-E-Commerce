"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Bestsellers() {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 pt-12"
      >
        Our Bestsellers
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="bestseller/serum.webp" alt="Miracle Serum" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Miracle Serum</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$89.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.9 (1205 reviews)</span>
                </div>
              </div>
              <Link href="/product/1" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="/bestseller/foundation.jpg" alt="Perfect Coverage Foundation" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Perfect Coverage Foundation</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$39.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.8 (982 reviews)</span>
                </div>
              </div>
              <Link href="/product/2" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="/bestseller/facemask.jpg" alt="Hydrating Face Mask" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Hydrating Face Mask</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$29.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.7 (756 reviews)</span>
                </div>
              </div>
              <Link href="/product/3" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

          {/* Product 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="/bestseller/mascara.jpg" alt="Volumizing Mascara" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Volumizing Mascara</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$24.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.9 (1489 reviews)</span>
                </div>
              </div>
              <Link href="/product/4" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

          {/* Product 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="/bestseller/night-cream.jpg" alt="Rejuvenating Night Cream" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Rejuvenating Night Cream</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$59.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.8 (631 reviews)</span>
                </div>
              </div>
              <Link href="/product/5" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

          {/* Product 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image src="/bestseller/lipstick.jpg" alt="Long-lasting Lipstick" width={300} height={300} layout="responsive" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Long-lasting Lipstick</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-pink-600">$19.99</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>4.7 (1023 reviews)</span>
                </div>
              </div>
              <Link href="/product/6" className="block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                View Product
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
