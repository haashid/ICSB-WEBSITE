"use client"

import { motion } from "framer-motion"
import * as Tabs from "@radix-ui/react-tabs"
import { ArrowRight } from "lucide-react"

const electives = {
  "IoT": [
    {
      name: "IoT Security",
      description: "Learn about securing IoT devices, networks, and data in connected environments.",
      credits: 4,
    },
    {
      name: "Edge Computing",
      description: "Explore computing at the edge of the network for IoT applications.",
      credits: 4,
    },
    {
      name: "Smart City Technologies",
      description: "Study IoT applications in urban infrastructure and services.",
      credits: 4,
    },
  ],
  "Cybersecurity": [
    {
      name: "Advanced Cryptography",
      description: "Deep dive into cryptographic algorithms and their applications.",
      credits: 4,
    },
    {
      name: "Digital Forensics",
      description: "Learn techniques for investigating and analyzing digital evidence.",
      credits: 4,
    },
    {
      name: "Cloud Security",
      description: "Study security challenges and solutions in cloud environments.",
      credits: 4,
    },
  ],
  "Blockchain": [
    {
      name: "DeFi Applications",
      description: "Explore decentralized finance systems and smart contracts.",
      credits: 4,
    },
    {
      name: "Blockchain Security",
      description: "Learn about securing blockchain networks and applications.",
      credits: 4,
    },
    {
      name: "Web3 Development",
      description: "Build decentralized applications using modern web3 technologies.",
      credits: 4,
    },
  ],
}

export function ElectivesSection() {
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
          <h2 className="text-4xl font-bold mb-4 icsb-gradient-text">Elective Courses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of specialized courses to tailor your education to your interests and career goals.
          </p>
        </motion.div>

        <Tabs.Root defaultValue="IoT" className="space-y-8">
          <Tabs.List className="flex space-x-4 border-b border-gray-200">
            {Object.keys(electives).map((domain) => (
              <Tabs.Trigger
                key={domain}
                value={domain}
                className="px-4 py-2 text-lg font-medium text-gray-600 hover:text-[#6C1FB5] data-[state=active]:text-[#6C1FB5] data-[state=active]:border-b-2 data-[state=active]:border-[#6C1FB5] transition-colors"
              >
                {domain}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.entries(electives).map(([domain, courses]) => (
            <Tabs.Content key={domain} value={domain} className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 card-hover"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <span className="text-sm text-[#6C1FB5] font-medium">{course.credits} Credits</span>
                    </div>
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
} 