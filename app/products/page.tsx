"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const products = [
  { id: 1, name: "Hydrating Serum", price: 49.99, image: "/images/products/hydrating-serum.jpg", category: "Skincare" },
  { id: 2, name: "Matte Lipstick", price: 24.99, image: "/images/products/matte-lipstick.jpg", category: "Makeup" },
  { id: 3, name: "Eau de Parfum", price: 89.99, image: "/images/products/eau-de-parfum.jpg", category: "Fragrance" },
  {
    id: 4,
    name: "Anti-Aging Cream",
    price: 79.99,
    image: "/images/products/anti-aging-cream.jpg",
    category: "Skincare",
  },
  {
    id: 5,
    name: "Eyeshadow Palette",
    price: 39.99,
    image: "/images/products/eyeshadow-palette.jpg",
    category: "Makeup",
  },
  { id: 6, name: "Body Mist", price: 19.99, image: "/images/products/body-mist.jpg", category: "Fragrance" },
]

const categories = ["All", "Skincare", "Makeup", "Fragrance"]

export default function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory),
  )

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h1>
        <div className="flex justify-between mb-8">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-48">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

