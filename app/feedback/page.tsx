"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"

export default function Feedback() {
  const [feedback, setFeedback] = useState("")
  const { data: session } = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: feedback }),
    })
    if (response.ok) {
      setFeedback("")
      alert("Thank you for your feedback!")
    }
  }

  if (!session) {
    return <p>Please sign in to leave feedback.</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Feedback</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full h-32 p-2 border rounded-md mb-4"
          placeholder="Enter your feedback here..."
          required
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

