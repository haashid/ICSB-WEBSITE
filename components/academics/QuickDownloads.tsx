"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const downloads = [
  { label: "Curriculum PDF", file: "/downloads/curriculum.pdf" },
  { label: "Lab Manuals", file: "/downloads/lab-manuals.pdf" },
  { label: "Electives Guide", file: "/downloads/electives-guide.pdf" },
  { label: "Academic Calendar", file: "/downloads/academic-calendar.pdf" },
  { label: "Capstone Guide", file: "/downloads/capstone-guide.pdf" },
]

export function QuickDownloads() {
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
            Quick Downloads
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all important academic documents and guides in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {downloads.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.file}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg font-medium w-full justify-center"
            >
              <Download className="w-5 h-5 mr-3" />
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 