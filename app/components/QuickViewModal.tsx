"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface QuickViewModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-xl font-semibold text-primary mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-6">{product.category}</p>
                <div className="flex items-center mb-4">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                    className="border rounded-md px-2 py-1 w-16"
                  />
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
                >
                  <ShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

