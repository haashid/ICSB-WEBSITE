"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Download, X } from "lucide-react"

const labs = [
  {
    name: "IoT Lab",
    description: "State-of-the-art facility for IoT development and testing, equipped with various sensors, actuators, and development boards.",
    equipment: [
      "Raspberry Pi and Arduino boards",
      "Various sensors (temperature, humidity, motion, etc.)",
      "IoT gateways and edge devices",
      "Network analyzers and protocol testers",
    ],
    image: "/labs/iot-lab.jpg",
  },
  {
    name: "Cybersecurity Lab",
    description: "Dedicated space for cybersecurity training and research, featuring isolated networks and advanced security tools.",
    equipment: [
      "Virtualized network environments",
      "Penetration testing tools",
      "Security information and event management (SIEM) systems",
      "Digital forensics workstations",
    ],
    image: "/labs/cyber-lab.jpg",
  },
  {
    name: "Blockchain Lab",
    description: "Specialized facility for blockchain development and research, with high-performance computing resources.",
    equipment: [
      "Blockchain development workstations",
      "Mining rigs for cryptocurrency research",
      "Smart contract development environments",
      "Distributed ledger testing platforms",
    ],
    image: "/labs/blockchain-lab.jpg",
  },
]

export function LabInfrastructure() {
  const [selectedLab, setSelectedLab] = useState<typeof labs[0] | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 icsb-gradient-text">Lab Infrastructure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge laboratories equipped with the latest technology for hands-on learning and research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 card-hover"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{lab.name}</h3>
              <p className="text-gray-600 mb-6">{lab.description}</p>
              <button
                onClick={() => setSelectedLab(lab)}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        <Dialog.Root open={!!selectedLab} onOpenChange={() => setSelectedLab(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-xl">
              {selectedLab && (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <Dialog.Title className="text-2xl font-bold text-gray-800">
                      {selectedLab.name}
                    </Dialog.Title>
                    <Dialog.Close className="text-gray-500 hover:text-gray-700">
                      <X className="w-6 h-6" />
                    </Dialog.Close>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedLab.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Equipment</h4>
                    <ul className="space-y-2">
                      {selectedLab.equipment.map((item) => (
                        <li key={item} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#6C1FB5] rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Lab Manual
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity">
                      <Download className="w-4 h-4 mr-2" />
                      Equipment List
                    </button>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
} 