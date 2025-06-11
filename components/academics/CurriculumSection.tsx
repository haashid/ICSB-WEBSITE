"use client"

import { motion } from "framer-motion"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown, Download } from "lucide-react"

const curriculum = {
  "Year 1": {
    "Semester 1": [
      { name: "Introduction to Programming", credits: 4 },
      { name: "Digital Logic Design", credits: 4 },
      { name: "Mathematics I", credits: 4 },
      { name: "Physics", credits: 4 },
    ],
    "Semester 2": [
      { name: "Data Structures", credits: 4 },
      { name: "Computer Organization", credits: 4 },
      { name: "Mathematics II", credits: 4 },
      { name: "Communication Skills", credits: 2 },
    ],
  },
  "Year 2": {
    "Semester 3": [
      { name: "Object-Oriented Programming", credits: 4 },
      { name: "Database Management Systems", credits: 4 },
      { name: "Operating Systems", credits: 4 },
      { name: "Computer Networks", credits: 4 },
    ],
    "Semester 4": [
      { name: "Software Engineering", credits: 4 },
      { name: "Web Technologies", credits: 4 },
      { name: "IoT Fundamentals", credits: 4 },
      { name: "Cybersecurity Basics", credits: 4 },
    ],
  },
  "Year 3": {
    "Semester 5": [
      { name: "Advanced IoT", credits: 4 },
      { name: "Network Security", credits: 4 },
      { name: "Blockchain Technology", credits: 4 },
      { name: "Machine Learning", credits: 4 },
    ],
    "Semester 6": [
      { name: "Cloud Computing", credits: 4 },
      { name: "Mobile Application Development", credits: 4 },
      { name: "Ethical Hacking", credits: 4 },
      { name: "Smart Contract Development", credits: 4 },
    ],
  },
  "Year 4": {
    "Semester 7": [
      { name: "Advanced Cybersecurity", credits: 4 },
      { name: "Distributed Systems", credits: 4 },
      { name: "Big Data Analytics", credits: 4 },
      { name: "Professional Elective I", credits: 4 },
    ],
    "Semester 8": [
      { name: "Capstone Project", credits: 8 },
      { name: "Professional Elective II", credits: 4 },
      { name: "Professional Elective III", credits: 4 },
    ],
  },
}

export function CurriculumSection() {
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
          <h2 className="text-4xl font-bold mb-4 icsb-gradient-text">Curriculum</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive curriculum designed to provide both theoretical knowledge and practical skills in emerging technologies.
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {Object.entries(curriculum).map(([year, semesters]) => (
            <Accordion.Item
              key={year}
              value={year}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden"
            >
              <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between text-xl font-semibold text-gray-800 hover:text-[#6C1FB5] transition-colors">
                {year}
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 pb-4">
                {Object.entries(semesters).map(([semester, subjects]) => (
                  <div key={semester} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-medium text-[#6C1FB5] mb-3">{semester}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subjects.map((subject) => (
                        <div
                          key={subject.name}
                          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-800">{subject.name}</span>
                            <span className="text-sm text-gray-500">{subject.credits} Credits</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Syllabus
          </button>
        </div>
      </div>
    </section>
  )
} 