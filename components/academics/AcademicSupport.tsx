"use client"

import { motion } from "framer-motion"
import { Users, RefreshCw, Layers } from "lucide-react"

const support = [
  {
    title: "Mentorship",
    description: "Personalized academic and career guidance from experienced faculty and industry mentors.",
    icon: Users,
  },
  {
    title: "Remedial Classes",
    description: "Extra support for students needing help in core subjects, ensuring no one is left behind.",
    icon: RefreshCw,
  },
  {
    title: "Bridge Courses",
    description: "Introductory courses to help students from diverse backgrounds get up to speed.",
    icon: Layers,
  },
]

export function AcademicSupport() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6C1FB5] via-[#D726A4] to-[#FF7632] text-transparent bg-clip-text">
            Student Academic Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to supporting every student's academic journey with dedicated programs and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {support.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FFD93D] to-[#FF7632] flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#6C1FB5]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 