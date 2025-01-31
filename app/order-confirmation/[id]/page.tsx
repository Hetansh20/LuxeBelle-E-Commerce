"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import Link from "next/link"

interface OrderItem {
  id: number
  name: string
  quantity: number
  price: number
}

interface Order {
  id: number
  status: string
  total: number
  trackingNumber: string | null
  createdAt: string
  orderItems: OrderItem[]
}

export default function OrderConfirmation() {
  const { data: session } = useSession()
  const params = useParams()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (session) {
      fetch(`/api/orders/${params.id}`)
        .then((res) => res.json())
        .then((data) => setOrder(data))
    }
  }, [session, params.id])

  if (!session) {
    return <p>Please sign in to view your order.</p>
  }

  if (!order) {
    return <p>Loading order details...</p>
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order #{order.id}</h2>
          <p className="mb-2">
            <strong>Status:</strong> {order.status}
          </p>
          <p className="mb-2">
            <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-4">
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </p>
          {order.trackingNumber && (
            <p className="mb-4">
              <strong>Tracking Number:</strong> {order.trackingNumber}
            </p>
          )}
          <h3 className="text-xl font-semibold mb-2">Order Items</h3>
          <ul className="mb-4">
            {order.orderItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/order-tracking"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            Track Your Order
          </Link>
        </div>
      </div>
    </div>
  )
}

