"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const skincareCategories = [
  { name: "Cleansers", image: "/skincare/clensers.webp" },
  { name: "Moisturizers", image: "/skincare/moisturizers.webp" },
  { name: "Serums", image: "/skincare/serums.webp" },
  { name: "Masks", image: "/skincare/masks.jpg" },
  { name: "Sunscreens", image: "/skincare/sunscreens.webp" },
  { name: "Eye Care", image: "/skincare/eye_care.webp" },
]

export default function Skincare() {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-1 pt-12"
      >
        Skincare
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skincareCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600">Discover our range of {category.name.toLowerCase()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

