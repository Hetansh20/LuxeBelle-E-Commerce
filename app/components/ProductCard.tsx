"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"
import QuickViewModal from "./QuickViewModal"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  return (
    <>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow relative">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={200}
            height={200}
            layout="responsive"
            className="rounded-lg mb-2"
          />
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-primary">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </Link>
        <button
          onClick={() => setIsQuickViewOpen(true)}
          className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition-all"
        >
          <Eye className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <QuickViewModal product={product} isOpen={isQuickViewOpen} onClose={() => setIsQuickViewOpen(false)} />
    </>
  )
}

