import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const NewsSection = () => {
  const news = [
    {
      title: "ICSB Students Win International Blockchain Competition",
      excerpt:
        "Our team secured first place in the Global Blockchain Innovation Challenge, showcasing their revolutionary DeFi solution.",
      date: "March 1, 2024",
      category: "Achievement",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "New Cybersecurity Research Lab Inaugurated",
      excerpt:
        "State-of-the-art cybersecurity lab equipped with advanced penetration testing tools and threat simulation systems.",
      date: "February 28, 2024",
      category: "Infrastructure",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Industry Partnership with Tech Giants",
      excerpt:
        "ICSB announces strategic partnerships with leading technology companies for research collaboration and student internships.",
      date: "February 25, 2024",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-5xl font-bold icsb-gradient-text">Latest News</h2>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest achievements, developments, and innovations from ICSB
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <article key={index} className="glass-card rounded-3xl overflow-hidden card-hover group">
              {/* Image Header */}
              <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-400 transition-all duration-500 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{item.excerpt}</p>
                <button className="text-purple-600 hover:text-orange-400 font-semibold inline-flex items-center group transition-colors duration-300">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news" className="btn-secondary inline-flex items-center group text-lg">
            View All News
            <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
