"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertTriangle } from "lucide-react"

const evaluation = [
  {
    title: "Internal Assessment",
    description: "Assignments, quizzes, and mid-semester exams contribute 40% to the final grade.",
    icon: CheckCircle,
  },
  {
    title: "External Assessment",
    description: "End-semester university exams contribute 60% to the final grade.",
    icon: CheckCircle,
  },
  {
    title: "Attendance Requirement",
    description: "Minimum 75% attendance is mandatory to appear for final exams.",
    icon: AlertTriangle,
  },
]

export function EvaluationSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6C1FB5] via-[#D726A4] to-[#FF7632] text-transparent bg-clip-text">
            Evaluation & Attendance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the evaluation process and attendance requirements for academic success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {evaluation.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${index === 2 ? 'bg-yellow-100' : 'bg-green-100'}`}>
                <item.icon className={`w-8 h-8 ${index === 2 ? 'text-yellow-500' : 'text-green-600'}`} />
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