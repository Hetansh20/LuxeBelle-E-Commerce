"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"

interface Order {
  id: number
  status: string
  trackingNumber: string | null
  createdAt: string
  total: number
}

export default function OrderTracking() {
  const { data: session } = useSession()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)

  const fetchOrders = async () => {
    if (!session) return

    setLoading(true)
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error("Error fetching orders:", error)
    }
    setLoading(false)
  }

  if (!session) {
    return <p>Please sign in to track your orders.</p>
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
        <button
          onClick={fetchOrders}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors mb-4"
        >
          {loading ? "Loading..." : "Fetch My Orders"}
        </button>
        {orders.length > 0 ? (
          <div className="grid gap-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
                <p className="mb-1">
                  <strong>Status:</strong> {order.status}
                </p>
                <p className="mb-1">
                  <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className="mb-1">
                  <strong>Total:</strong> ${order.total.toFixed(2)}
                </p>
                {order.trackingNumber && (
                  <p className="mb-1">
                    <strong>Tracking Number:</strong> {order.trackingNumber}
                  </p>
                )}
                <Link
                  href={`/order-confirmation/${order.id}`}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found. Click the button above to fetch your orders.</p>
        )}
      </div>
    </div>
  )
}

