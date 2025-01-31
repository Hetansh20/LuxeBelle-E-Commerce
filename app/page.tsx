"use client"

import { motion } from "framer-motion"
import Background from "./components/Background3D"
import ProductCard from "./components/ProductCard"
import Testimonials from "./components/Testimonials"

const featuredProducts = [
  { id: 1, name: "Hydrating Serum", price: 49.99, image: "hydrating-serum.jpg", category: "Skincare" },
  { id: 2, name: "Matte Lipstick", price: 24.99, image: "/matte-lipstick.jpg", category: "Makeup" },
  { id: 3, name: "Eau de Parfum", price: 89.99, image: "/eau-de-parfum.avif", category: "Fragrance" },
  {
    id: 4,
    name: "Anti-Aging Cream",
    price: 79.99,
    image: "/anti-aging-cream.webp",
    category: "Skincare",
  },
]

// Category-to-image mapping
const categoryImages = {
  Skincare: "/skincare_logo.jpeg",
  Makeup: "/makeup_logo.jpeg",
  Fragrance: "/fragrance_logo.png",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Background />

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-background.png")' }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white font-serif mb-6"
          >
            Discover Your Beauty with LuxeBelle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white font-sans mb-8"
          >
            Luxury cosmetics for the modern woman
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-pink-100 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center font-serif mb-12 text-pink-500"
          >
            Featured Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Skincare", "Makeup", "Fragrance"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <a href={`/${category.toLowerCase()}`} className="block">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={categoryImages[category]}  // Use category-specific image
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-pink-200 font-serif">{category}</h3>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center font-serif mb-12 text-pink-500"
          >
            New Arrivals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Beauty Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center font-serif mb-12 text-pink-500"
          >
            Beauty Blog
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => {
              const images = [
                '/blogs/fragrance.png',
                '/blogs/hair_care_routine.jpg',
                '/blogs/skincare_tips.png',
              ];

              return (
                <motion.article
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <img
                      src={images[item - 1]}
                      alt={`Blog ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-serif mb-2 text-pink-700">
                      Blog Post Title {item}
                    </h3>
                    <p className="text-pink-600 font-sans mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <a href={`/blog/${item}`} className="text-primary hover:text-secondary font-semibold">
                      Read More →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
