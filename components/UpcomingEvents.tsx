"use client"

import { Calendar, MapPin, Users, ArrowRight, Clock, Star, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getUpcomingEvents, type Event } from "@/lib/eventsService"

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getUpcomingEvents()
        setEvents(fetchedEvents)
      } catch (error) {
        console.error("Error loading upcoming events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const getGradientColor = (index: number): string => {
    const colors = [
      "from-purple-500 to-pink-500",
      "from-red-500 to-orange-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500",
      "from-violet-500 to-indigo-500",
      "from-amber-500 to-yellow-500",
    ]
    return colors[index % colors.length]
  }

  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Upcoming Events</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Loading upcoming events...</p>
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 icsb-gradient opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Upcoming Events</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join us for exciting workshops, conferences, and competitions that shape the future of technology
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No upcoming events found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`glass-card rounded-3xl overflow-hidden card-hover group relative ${
                  event.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${getGradientColor(index)} relative overflow-hidden`}>
                  {event.poster && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.poster})` }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {event.category}
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-400 transition-all duration-500">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{event.description}</p>

                  <div className="space-y-3 mb-8">
                    {event.time && (
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-5 h-5 mr-3 text-purple-500" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                    )}
                    {event.venue && (
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                        <span className="font-medium">{event.venue}</span>
                      </div>
                    )}
                    {event.resourcePerson && (
                      <div className="flex items-center text-gray-500">
                        <User className="w-5 h-5 mr-3 text-pink-500" />
                        <span className="font-medium">{event.resourcePerson}</span>
                      </div>
                    )}
                    {event.attendees && (
                      <div className="flex items-center text-gray-500">
                        <Users className="w-5 h-5 mr-3 text-pink-500" />
                        <span className="font-medium">{event.attendees} expected attendees</span>
                      </div>
                    )}
                  </div>

                  <button className="btn-primary inline-flex items-center group">
                    Register Now
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/events" className="btn-secondary inline-flex items-center group text-lg">
            View All Events
            <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
