"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const events = [
  {
    month: "August",
    events: [
      {
        date: "1-7",
        title: "Orientation Week",
        description: "Welcome program for new students",
      },
      {
        date: "10",
        title: "Classes Begin",
        description: "Start of Fall Semester",
      },
    ],
  },
  {
    month: "September",
    events: [
      {
        date: "15-20",
        title: "Mid-Semester Examinations",
        description: "First round of assessments",
      },
    ],
  },
  {
    month: "October",
    events: [
      {
        date: "1-5",
        title: "Project Week",
        description: "Hands-on project development",
      },
      {
        date: "20-25",
        title: "Industry Workshop",
        description: "Guest lectures and workshops",
      },
    ],
  },
  {
    month: "November",
    events: [
      {
        date: "10-15",
        title: "Final Examinations",
        description: "End of semester assessments",
      },
      {
        date: "20",
        title: "Results Declaration",
        description: "Semester results published",
      },
    ],
  },
]

export function AcademicCalendar() {
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
            Academic Calendar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with important academic dates, events, and deadlines throughout the semester.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6C1FB5] via-[#D726A4] to-[#FF7632]" />

          <div className="space-y-12">
            {events.map((monthData, monthIndex) => (
              <motion.div
                key={monthData.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Month label */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-lg font-semibold text-[#6C1FB5]">{monthData.month}</span>
                </div>

                {/* Events */}
                <div className="mt-8 space-y-6">
                  {monthData.events.map((event, eventIndex) => (
                    <div
                      key={event.date}
                      className={`flex items-center ${
                        eventIndex % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className="w-1/2 px-8">
                        <div
                          className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                            eventIndex % 2 === 0 ? "ml-auto" : "mr-auto"
                          } max-w-md`}
                        >
                          <div className="text-sm font-medium text-[#6C1FB5] mb-2">{event.date}</div>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <div className="w-1/2" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6C1FB5] to-[#D726A4] text-white rounded-lg hover:opacity-90 transition-opacity">
            <Download className="w-5 h-5 mr-2" />
            Download Academic Calendar
          </button>
        </div>
      </div>
    </section>
  )
} 