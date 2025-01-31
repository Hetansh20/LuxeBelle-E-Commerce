import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blogs/fragrance.png",
    author: { name: "Author 1" },
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blogs/hair_care_routine.jpg",
    author: { name: "Author 2" },
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blogs/skincare_tips.png",
    author: { name: "Author 3" },
  },
  {
    id: 4,
    title: "Fourth Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blogs/makeup_trends.jpg",
    author: { name: "Author 4" },
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">LuxeBelle Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {post.image && (
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {post.author.name}</span>
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
