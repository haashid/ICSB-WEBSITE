import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Specializations from "@/components/Specializations"
import UpcomingEvents from "@/components/UpcomingEvents"
import PastEvents from "@/components/PastEvents"
import NewsSection from "@/components/NewsSection"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Stats />
      <Specializations />
      <PastEvents />
      <UpcomingEvents />
      <NewsSection />
      <Testimonials />
    </div>
  )
}
