"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function AdminPanel() {
  const { data: session } = useSession()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products")
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      }
    }
    fetchProducts()
  }, [])

  if (!session || session.user.role !== "ADMIN") {
    return <p>Access denied. You must be an admin to view this page.</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <Link href="/admin/products/new" className="bg-primary text-white px-4 py-2 rounded-md mb-4 inline-block">
        Add New Product
      </Link>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">Category</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category}</td>
              <td>
                <Link href={`/admin/products/${product.id}/edit`} className="text-blue-500 hover:underline mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

