"use client"

import { useEffect, useState } from "react"
import { Users, Award, BookOpen, Briefcase, Trophy, Globe } from "lucide-react"

const Stats = () => {
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    events: 0,
    projects: 0,
    certificates: 0,
    courses: 0,
  })

  const finalStats = {
    students: 59,
    faculty: 5,
    events: 10,
    projects: 20,
    certificates: 100,
    courses: 50,
  }

  useEffect(() => {
    const duration = 2500
    const steps = 80
    const stepDuration = duration / steps

    const intervals = Object.keys(finalStats).map((key) => {
      const finalValue = finalStats[key as keyof typeof finalStats]
      const increment = finalValue / steps
      let currentValue = 0

      return setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValue) {
          currentValue = finalValue
          clearInterval(intervals.find((interval) => interval === intervals[Object.keys(finalStats).indexOf(key)]))
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }))
      }, stepDuration)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    {
      icon: Users,
      value: counters.students,
      label: "Active Students",
      suffix: "",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: counters.faculty,
      label: "Expert Faculty",
      suffix: "",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: BookOpen,
      value: counters.events,
      label: "Events / Workshops Conducted",
      suffix: "+",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Briefcase,
      value: counters.projects,
      label: "Students Project Completed",
      suffix: "+",
      color: "from-yellow-500 to-green-500",
    },
    {
      icon: Trophy,
      value: counters.certificates,
      label: "Certifications Earned",
      suffix: "+",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Globe,
      value: counters.courses,
      label: "Skill based Courses Taken",
      suffix: "+",
      color: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-orange-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Our Impact</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Driving excellence in education, research, and innovation across emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 text-center card-hover group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg`}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold icsb-gradient-text mb-3">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
