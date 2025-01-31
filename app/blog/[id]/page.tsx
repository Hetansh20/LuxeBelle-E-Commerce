"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Art of Skincare: Building Your Perfect Routine",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/blogs/skincare_tips.png",
    date: "May 15, 2023",
    author: "Emma Beauty",
  },
  {
    id: 2,
    title: "Summer Makeup Trends: Bold Colors and Glowing Skin",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "blogs/makeup_trends.jpg",
    date: "June 2, 2023",
    author: "Sophia Glow",
  },
  {
    id: 3,
    title: "Summer Makeup Trends: Bold Colors and Glowing Skin",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "blogs/hair_care_routine.jpg",
    date: "June 2, 2023",
    author: "Sophia Glow",
  },
  {
    id: 4,
    title: "Summer Makeup Trends: Bold Colors and Glowing Skin",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "blogs/skincare_tips.png",
    date: "June 2, 2023",
    author: "Sophia Glow",
  }
]

export default function BlogPost() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Blog post not found</div>
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">{post.title}</h1>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span>By {post.author}</span>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700">{post.content}</p>
            </div>
            <Link
              href="/blog"
              className="mt-6 inline-block bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  )
}

