"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingBag, Search, Menu, X, User, Lock } from "lucide-react"
import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import Image from "next/image"

const navItems = [
  { name: "Skincare", href: "/skincare" },
  { name: "Makeup", href: "/makeup" },
  { name: "Fragrance", href: "/fragrance" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "Special Offers", href: "/special-offers" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="LuxeBelle Logo" width={80} height={40} />
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="font-sans text-pink-600 hover:text-secondary transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-pink-600 hover:text-secondary"
            >
              <Search size={20} />
            </motion.button>
            <Link href="/cart" className="text-pink-600 hover:text-secondary relative">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-pink-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <Link href="/account" className="text-pink-600 hover:text-secondary">
              <User size={20} />
            </Link>
            <Link href="/admin/login" className="text-pink-600 hover:text-secondary">
              <Lock size={20} />
            </Link>
            <button className="md:hidden text-pink-600 hover:text-secondary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-pink-600 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

