"use client"

import { motion } from "framer-motion"
import { BookOpen, Link2, Github } from "lucide-react"

const resources = [
  {
    title: "Recommended Books",
    icon: BookOpen,
    items: [
      { name: "IoT: A Systems Approach", link: "https://example.com/iot-book" },
      { name: "Cryptography & Network Security", link: "https://example.com/crypto-book" },
      { name: "Mastering Blockchain", link: "https://example.com/blockchain-book" },
    ],
  },
  {
    title: "NPTEL Courses",
    icon: Link2,
    items: [
      { name: "Introduction to IoT", link: "https://nptel.ac.in/courses/106105166" },
      { name: "Blockchain Architecture Design", link: "https://nptel.ac.in/courses/106105184" },
      { name: "Cyber Security", link: "https://nptel.ac.in/courses/106105217" },
    ],
  },
  {
    title: "GitHub & Tech Blogs",
    icon: Github,
    items: [
      { name: "ICSB GitHub", link: "https://github.com/example/icsb" },
      { name: "IoT Tech Blog", link: "https://iotblog.example.com" },
      { name: "Blockchain Insights", link: "https://blockchaininsights.example.com" },
    ],
  },
]

export function StudyResources() {
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
            Study Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore curated resources to support your academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] flex items-center justify-center mb-6">
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{resource.title}</h3>
              <ul className="space-y-2">
                {resource.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C1FB5] hover:underline text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 