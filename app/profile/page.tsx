"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()
  const [bio, setBio] = useState("")

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("/api/profile")
      if (response.ok) {
        const data = await response.json()
        setBio(data.bio || "")
      }
    }
    fetchProfile()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bio }),
    })
    if (response.ok) {
      alert("Profile updated successfully!")
    }
  }

  if (!session) {
    return <p>Please sign in to view your profile.</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" value={session.user.name} disabled className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" value={session.user.email} disabled className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full h-32 p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Update Profile
        </button>
      </form>
    </div>
  )
}

