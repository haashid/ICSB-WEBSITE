"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Blockchain Developer at ConsenSys",
      year: "Class of 2023",
      content:
        "The ICSB blockchain program gave me hands-on experience with smart contracts and DeFi protocols. The faculty's industry connections and cutting-edge curriculum prepared me perfectly for my role at ConsenSys.",
      rating: 5,
      company: "ConsenSys",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Michael Chen",
      role: "Cybersecurity Analyst at Microsoft",
      year: "Class of 2022",
      content:
        "The cybersecurity program at ICSB is world-class. The hands-on labs, ethical hacking courses, and real-world projects gave me the skills to excel in cybersecurity. The faculty are industry experts who truly care about student success.",
      rating: 5,
      company: "Microsoft",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Scientist & Faculty",
      year: "Faculty Member",
      content:
        "Working at ICSB has been incredibly rewarding. The department's focus on emerging technologies and collaborative research environment allows us to push the boundaries of IoT and AI research while mentoring brilliant students.",
      rating: 5,
      company: "ICSB Faculty",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Alex Kumar",
      role: "IoT Solutions Architect",
      year: "Class of 2023",
      content:
        "The IoT program at ICSB provided me with comprehensive knowledge of sensor networks, edge computing, and smart systems. The practical projects and industry partnerships helped me land my dream job in IoT architecture.",
      rating: 5,
      company: "Siemens",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-green-500 to-emerald-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 icsb-gradient opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold icsb-gradient-text mb-6">What Our Community Says</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear from our students, alumni, and faculty about their transformative experiences at ICSB
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-5`}
            ></div>

            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-purple-200 opacity-50" />

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12 font-medium text-center">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full mr-6 flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-2xl">
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800 text-xl mb-1">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-600 font-semibold text-lg">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-500">{testimonials[currentTestimonial].year}</div>
                  <div className="text-sm text-gray-400 mt-1">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-4 rounded-full hover:bg-white/30 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-4 rounded-full hover:bg-white/30 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentTestimonial
                    ? `bg-gradient-to-r ${testimonials[index].color} scale-125 shadow-lg`
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
