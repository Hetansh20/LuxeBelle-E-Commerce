import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Emma S.",
    text: "LuxeBelle products have transformed my skincare routine. My skin has never looked better!",
    avatar: "/placeholder.svg?height=60&width=60&text=ES",
  },
  {
    id: 2,
    name: "Sophia L.",
    text: "The quality of LuxeBelle makeup is unmatched. I feel confident and beautiful every day.",
    avatar: "/placeholder.svg?height=60&width=60&text=SL",
  },
  {
    id: 3,
    name: "Olivia R.",
    text: "LuxeBelle fragrances are my go-to for special occasions. They make me feel elegant and sophisticated.",
    avatar: "/placeholder.svg?height=60&width=60&text=OR",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center font-serif mb-12 text-pink-500"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

