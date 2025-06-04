import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Specializations from "@/components/Specializations"
import UpcomingEvents from "@/components/UpcomingEvents"
import Testimonials from "@/components/Testimonials"
import NewsSection from "@/components/NewsSection"

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Stats />
      <Specializations />
      <UpcomingEvents />
      <NewsSection />
      <Testimonials />
    </div>
  )
}
