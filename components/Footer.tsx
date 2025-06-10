import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 icsb-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Department Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/icsb-logo.png"
                alt="ICSB Logo"
                width={120}
                height={100}
                className="brightness-0 invert"
              />
              <div>
                <span className="font-bold text-2xl text-white">CSE</span>
                <p className="text-white/80 text-sm">(IoT & Cyber Security including Blockchain Technology)</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Leading innovation in IoT, Cybersecurity, and Blockchain Technology through excellence in education and
              cutting-edge research.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Twitter className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Instagram className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Linkedin className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Youtube className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Academics", "Faculty", "Students", "Research", "Events"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Our Focus Areas</h3>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Computer Science
              </li>
              <li className="text-white/80 text-sm flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                Internet of Things (IoT)
              </li>
              <li className="text-white/80 text-sm flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                Cybersecurity
              </li>
              <li className="text-white/80 text-sm flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                Blockchain Technology
              </li>
             
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  ICSB Department
                  <br />
                  P.A. College of Engineering
                  Nadupadav, Montepadav Post
                  Kairangala, Mangalore - 574153
                  Karnataka, INDIA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-white/80 text-sm">0824-2284704</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-white/80 text-sm">icsb@pace.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} CSE(ICSB) Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
