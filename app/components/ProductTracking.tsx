"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ProductTracking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null)

  const handleTrackingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement actual tracking logic
    setTrackingStatus("Your order is currently in transit and expected to arrive within 2-3 business days.")
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Track Your Order</h2>
      <form onSubmit={handleTrackingSubmit}>
        <div className="flex">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter your tracking number"
            className="flex-grow border rounded-l-md px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition-colors"
          >
            Track
          </button>
        </div>
      </form>
      {trackingStatus && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-gray-100 rounded-md"
        >
          <p>{trackingStatus}</p>
        </motion.div>
      )}
    </div>
  )
}

