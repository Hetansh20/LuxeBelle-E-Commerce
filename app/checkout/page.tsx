"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useCart } from "../contexts/CartContext"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useRouter } from "next/navigation"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm({ clientSecret, orderId }: { clientSecret: string; orderId: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const router = useRouter()
  const { clearCart } = useCart()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation/${orderId}`,
      },
    })

    if (submitError) {
      setError(submitError.message || "An error occurred")
      setProcessing(false)
    } else {
      clearCart()
      router.push(`/order-confirmation/${orderId}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="mt-4 w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  )
}

export default function Checkout() {
  const { data: session } = useSession()
  const { cart } = useCart()
  const [clientSecret, setClientSecret] = useState("")
  const [orderId, setOrderId] = useState<number | null>(null)

  useEffect(() => {
    if (session && cart.length > 0) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart,
          total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret)
          setOrderId(data.orderId)
        })
    }
  }, [session, cart])

  if (!session) {
    return <p>Please sign in to complete your purchase.</p>
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            {clientSecret && orderId && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm clientSecret={clientSecret} orderId={orderId} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

