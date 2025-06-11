"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import * as Tabs from "@radix-ui/react-tabs"

const projects = {
  "Industry-based": [
    {
      title: "Smart Factory IoT Monitoring",
      description: "Real-time monitoring and analytics for industrial IoT systems.",
    },
    {
      title: "Enterprise Blockchain Integration",
      description: "Implementing blockchain for supply chain transparency.",
    },
  ],
  "Innovation-based": [
    {
      title: "AI-driven Cybersecurity",
      description: "Machine learning models for threat detection and response.",
    },
    {
      title: "Decentralized Voting System",
      description: "Blockchain-based secure and transparent voting platform.",
    },
  ],
  "Research-based": [
    {
      title: "Quantum-safe Cryptography",
      description: "Exploring cryptographic algorithms resistant to quantum attacks.",
    },
    {
      title: "IoT Privacy Framework",
      description: "Developing privacy-preserving protocols for IoT devices.",
    },
  ],
}

export function CapstoneSection() {
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
            Capstone & Mini Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Apply your knowledge through industry, innovation, and research-based projects.
          </p>
        </motion.div>

        <Tabs.Root defaultValue="Industry-based" className="space-y-8">
          <Tabs.List className="flex space-x-4 border-b border-gray-200">
            {Object.keys(projects).map((type) => (
              <Tabs.Trigger
                key={type}
                value={type}
                className="px-4 py-2 text-lg font-medium text-gray-600 hover:text-[#6C1FB5] data-[state=active]:text-[#6C1FB5] data-[state=active]:border-b-2 data-[state=active]:border-[#6C1FB5] transition-colors"
              >
                {type}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.entries(projects).map(([type, items]) => (
            <Tabs.Content key={type} value={type} className="space-y-6">
              {items.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity">
            <Download className="w-5 h-5 mr-2" />
            Download Capstone Guide
          </button>
        </div>
      </div>
    </section>
  )
} 