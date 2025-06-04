"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Shield, Wifi, Blocks } from "lucide-react"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Leading Innovation in Technology",
      subtitle: "IoT • Cybersecurity • Blockchain",
      description:
        "Empowering the next generation of tech leaders through cutting-edge education and research in emerging technologies.",
      Icon: Wifi,
    },
    {
      title: "Cybersecurity Excellence",
      subtitle: "Protecting Digital Futures",
      description:
        "Advanced cybersecurity programs preparing students to defend against evolving digital threats and secure tomorrow's technology.",
      Icon: Shield,
    },
    {
      title: "Blockchain Innovation",
      subtitle: "Decentralized Solutions",
      description:
        "Pioneering blockchain education and research, creating the architects of decentralized systems and smart contracts.",
      Icon: Blocks,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const CurrentIcon = slides[currentSlide].Icon

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 icsb-gradient">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full floating-animation blur-sm"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full floating-animation blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full floating-animation blur-sm"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full floating-animation blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Tech Icons Floating */}
        <div className="absolute top-32 right-32 text-white/20 floating-animation">
          <CurrentIcon size={48} />
        </div>
        <div className="absolute bottom-32 left-32 text-white/20 floating-animation" style={{ animationDelay: "3s" }}>
          <CurrentIcon size={56} />
        </div>
        <div className="absolute top-1/2 right-16 text-white/20 floating-animation" style={{ animationDelay: "5s" }}>
          <CurrentIcon size={40} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div key={currentSlide} className="animate-fadeInOutText">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="glass-card-dark p-6 rounded-3xl pulse-glow">
              <CurrentIcon className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">{slides[currentSlide].title}</h1>
          <p className="text-2xl md:text-3xl mb-6 text-yellow-200 font-semibold">{slides[currentSlide].subtitle}</p>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/academics" className="btn-primary inline-flex items-center group">
              Explore Programs
              <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            <Link href="/research" className="btn-secondary inline-flex items-center group">
              <Play className="mr-3 w-6 h-6" />
              Research Projects
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
