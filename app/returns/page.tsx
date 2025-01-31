import { motion } from "framer-motion"

export default function Returns() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Returns & Exchanges
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Policy</h2>
          <p className="mb-6">
            We want you to be completely satisfied with your purchase. If for any reason you're not happy with your
            order, we offer a 30-day return policy for unused and unopened products.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How to Return an Item</h2>
          <ol className="list-decimal list-inside mb-6">
            <li>Contact our customer service team to initiate a return</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Include the original receipt or packing slip</li>
            <li>Ship the package to the address provided by our team</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
          <p className="mb-6">
            If you'd like to exchange an item for a different shade or product, please follow the return process and
            place a new order for the desired item.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <p className="mb-6">
            Once we receive and process your return, a refund will be issued to the original payment method within 5-10
            business days.
          </p>

          <p>
            For any questions regarding returns or exchanges, please don't hesitate to contact our customer service
            team.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

