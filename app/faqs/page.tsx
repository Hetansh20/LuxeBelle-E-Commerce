import { motion } from "framer-motion"

export default function FAQs() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused and unopened products.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary.",
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes, all of our products are cruelty-free and not tested on animals.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email.",
    },
    {
      question: "Do you offer samples?",
      answer: "We offer samples with purchases over $50. You can select up to 3 samples at checkout.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

