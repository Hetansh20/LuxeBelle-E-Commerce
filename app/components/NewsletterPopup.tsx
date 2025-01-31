"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup")
      if (!hasSeenPopup) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenNewsletterPopup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription logic
    console.log("Subscribing email:", email)
    handleClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-4">Stay updated with our latest products and exclusive offers!</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="border rounded-md px-3 py-2"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

