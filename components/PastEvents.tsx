"use client"

import { Calendar, ArrowRight, CheckCircle, FileText, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getPastEvents, type Event } from "@/lib/eventsService"
import Image from "next/image"

const PastEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getPastEvents()
        setEvents(fetchedEvents)
      } catch (error) {
        console.error("Error loading events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const getEventCategory = (title: string): string => {
    if (title.toLowerCase().includes("workshop")) return "Workshop"
    if (title.toLowerCase().includes("hackathon")) return "Competition"
    if (title.toLowerCase().includes("conference")) return "Conference"
    if (title.toLowerCase().includes("summit")) return "Summit"
    return "Event"
  }

  const getGradientColor = (index: number): string => {
    const colors = [
      "from-emerald-500 to-teal-500",
      "from-blue-600 to-indigo-600",
      "from-cyan-500 to-blue-500",
      "from-violet-500 to-purple-500",
      "from-pink-500 to-rose-500",
      "from-orange-500 to-red-500",
    ]
    return colors[index % colors.length]
  }

  const formatDate = (dateString: string): string => {
    // Handle date ranges like "07/10/24 - 10/10/24"
    if (dateString.includes(" - ")) {
      const [startDate, endDate] = dateString.split(" - ")
      return `${startDate} - ${endDate}`
    }
    return dateString
  }

  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden bg-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Past Events Gallery</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Loading events...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden h-96 animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-8 space-y-4">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gray-100">
      {/* Background */}
      <div className="absolute inset-0 icsb-gradient opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Past Events Gallery</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our successful past events that have contributed to innovation and knowledge sharing in technology
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No past events found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {events.map((event, index) => (
                <div key={event.id} className="glass-card rounded-3xl overflow-hidden card-hover group relative">
                  {/* Highlight Badge for first few events */}
                  {index < 2 && (
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Highlight
                      </div>
                    </div>
                  )}

                  {/* Header with gradient and image */}
                  <div className={`h-48 bg-gradient-to-br ${getGradientColor(index)} relative overflow-hidden`}>
                    {event.imageUrl && event.imageUrl.length > 0 && (
                      <Image
                        src={event.imageUrl[0] || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {getEventCategory(event.title)}
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{formatDate(event.date)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-400 transition-all duration-500">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-3">{event.description}</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-5 h-5 mr-3 text-purple-500" />
                        <span className="font-medium">{formatDate(event.date)}</span>
                      </div>
                      {event.resourcePerson && (
                        <div className="flex items-center text-gray-500">
                          <User className="w-5 h-5 mr-3 text-orange-500" />
                          <span className="font-medium">{event.resourcePerson}</span>
                        </div>
                      )}
                      {event.imageUrl && event.imageUrl.length > 1 && (
                        <div className="flex items-center text-gray-500">
                          <FileText className="w-5 h-5 mr-3 text-pink-500" />
                          <span className="font-medium">{event.imageUrl.length} photos available</span>
                        </div>
                      )}
                    </div>

                    <button className="w-full btn-secondary text-lg group">
                      View Event Details
                      <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/events/archive" className="btn-secondary inline-flex items-center group text-lg">
                Browse Event Archive
                <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default PastEvents
