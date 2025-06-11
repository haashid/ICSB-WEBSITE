"use client"

import { motion } from "framer-motion"
import { ChevronDown, Wifi, Shield, Blocks } from "lucide-react"

// Components will be imported here
import { OverviewSection } from "../../components/academics/OverviewSection"
import { CurriculumSection } from "../../components/academics/CurriculumSection"
import { ElectivesSection } from "../../components/academics/ElectivesSection"
import { LabInfrastructure } from "../../components/academics/LabInfrastructure"
import { AcademicCalendar } from "../../components/academics/AcademicCalendar"
import { EvaluationSection } from "../../components/academics/EvaluationSection"
import { CapstoneSection } from "../../components/academics/CapstoneSection"
import { StudyResources } from "../../components/academics/StudyResources"
import { AcademicSupport } from "../../components/academics/AcademicSupport"
import { QuickDownloads } from "../../components/academics/QuickDownloads"

export default function AcademicsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          
          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
          >
            Academics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90"
          >
            Where Innovation Meets Curriculum
          </motion.p>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-400"></div>
          </div>


        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <OverviewSection />
        <CurriculumSection />
        <ElectivesSection />
        <LabInfrastructure />
        <AcademicCalendar />
        <EvaluationSection />
        <CapstoneSection />
        <StudyResources />
        <AcademicSupport />
        <QuickDownloads />
      </div>
    </div>
  )
} 