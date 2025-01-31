import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About LuxeBelle
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg mb-6">
            LuxeBelle is a premier destination for luxury cosmetics and beauty products. We curate the finest selection
            of skincare, makeup, and fragrances from around the world to bring you a truly exceptional beauty
            experience.
          </p>
          <p className="text-lg mb-6">
            Our mission is to empower individuals to express their unique beauty through high-quality products and
            expert advice. We believe that everyone deserves to feel confident and beautiful in their own skin.
          </p>
          <p className="text-lg">
            At LuxeBelle, we are committed to sustainability and ethical practices. We carefully select brands that
            share our values and prioritize eco-friendly packaging and cruelty-free formulations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

