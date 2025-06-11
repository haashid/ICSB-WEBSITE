"use client"

import { motion } from "framer-motion"
import { Rocket, Microscope, GraduationCap } from "lucide-react"

const cards = [
  {
    title: "Future Tech Ready",
    description: "Stay ahead with cutting-edge curriculum in IoT, Cybersecurity, and Blockchain technologies.",
    icon: Rocket,
    color: "from-purple-600 to-blue-500",
  },
  {
    title: "Research Driven",
    description: "Engage in groundbreaking research projects and contribute to technological advancement.",
    icon: Microscope,
    color: "from-blue-600 to-purple-500",
  },
  {
    title: "Practical Learning",
    description: "Hands-on experience with industry-standard tools and real-world projects.",
    icon: GraduationCap,
    color: "from-indigo-600 to-pink-500",
  },
]

export function OverviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 icsb-gradient-text">Academic Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our department is committed to providing cutting-edge education that prepares students for the future of technology.
            We focus on practical skills, research excellence, and industry collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 card-hover"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 