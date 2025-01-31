"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"

// Mock cart data
// const initialCartItems = [
//   { id: 1, name: "Luxury Face Cream", price: 89.99, quantity: 1 },
//   { id: 2, name: "Volumizing Mascara", price: 24.99, quantity: 2 },
// ]

export default function Cart() {
  // const [cartItems, setCartItems] = useState(initialCartItems)
  const { cart, updateQuantity, removeFromCart } = useCart()

  // const updateQuantity = (id: number, newQuantity: number) => {
  //   setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  // }

  // const removeItem = (id: number) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id))
  // }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Your Cart
      </motion.h1>
      <div className="container mx-auto px-4">
        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between border-b py-4 last:border-b-0"
                >
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=${item.name}`}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                      className="border rounded-md px-2 py-1 w-16 mr-4"
                    />
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Total:</h2>
              <p className="text-2xl font-bold text-pink-600">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-end">
              <Link
                href="/checkout"
                className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

