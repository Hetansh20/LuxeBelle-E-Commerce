import { motion } from "framer-motion"

export default function Shipping() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Shipping Information
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">Domestic Shipping</h2>
          <p className="mb-6">
            We offer free standard shipping on all orders over $50 within the United States. For orders under $50, a
            flat rate of $5.99 will be applied. Express shipping is available for an additional fee.
          </p>

          <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
          <p className="mb-6">
            We ship to most countries worldwide. International shipping rates are calculated based on the destination
            country and the weight of the package. Please note that customers are responsible for any customs fees or
            import taxes that may apply.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Shipping Times</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Domestic Standard Shipping: 3-5 business days</li>
            <li>Domestic Express Shipping: 1-2 business days</li>
            <li>International Shipping: 7-14 business days</li>
          </ul>

          <p>For any questions regarding shipping, please contact our customer service team.</p>
        </motion.div>
      </div>
    </div>
  )
}

