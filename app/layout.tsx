import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ICSB - Department of Computer Science and Engineering",
  description:
    "ICSB Department specializing in IoT, Cybersecurity, and Blockchain Technology - Leading innovation in emerging technologies",
  keywords: "ICSB, Computer Science, IoT, Cybersecurity, Blockchain, Engineering, Technology",
  generator: "Haashid"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
