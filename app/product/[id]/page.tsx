"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useCart } from "../../contexts/CartContext"
import { Star, ShoppingCart } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    description: "A deeply hydrating serum that plumps and nourishes the skin.",
    price: 49.99,
    image: "/images/products/hydrating-serum.jpg",
    category: "Skincare",
    averageRating: 4.5,
    reviewCount: 128,
  },
  // Add more mock products here
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(product.averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
            <p className="mb-6">{product.description}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-2 py-1 w-16"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
              >
                <ShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>

        {/* You can add more sections here, such as product details, related products, etc. */}
      </div>
    </div>
  )
}

