import { Target, Eye, Award, Users, Lightbulb, Globe } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge research in emerging technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with industry and academic institutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in education and research.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to technological advancement on a global scale.",
    },
  ]

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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            About Our Department
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
            Leading the future of technology through excellence in education, research, and innovation
          </p>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide world-class education in computer science and engineering, with specialized focus on Internet
                of Things, Cybersecurity, and Blockchain Technology. We aim to develop skilled professionals who can
                drive technological innovation and solve complex real-world problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold gradient-text">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a globally recognized center of excellence in computer science education and research, fostering
                innovation in emerging technologies and producing leaders who will shape the future of the digital
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Department Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established with a vision to lead technological advancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Excellence in Education</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our department was established in 2010 with the goal of providing cutting-edge education in computer
                science and engineering. We have consistently evolved our curriculum to stay ahead of technological
                trends, with particular emphasis on emerging fields like IoT, Cybersecurity, and Blockchain.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With state-of-the-art laboratories, experienced faculty, and strong industry partnerships, we provide
                our students with both theoretical knowledge and practical skills needed to excel in their careers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold gradient-text">25+</div>
                  <div className="text-sm text-gray-600">Faculty</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-4">2010</div>
                <div className="text-xl">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to education and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading research and education in cutting-edge technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold gradient-text mb-4">Internet of Things (IoT)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive programs covering smart devices, sensor networks, edge computing, and IoT security. Our
                students work on real-world projects involving smart cities, industrial automation, and connected
                healthcare systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Smart Device Development</li>
                <li>• Sensor Network Design</li>
                <li>• Edge Computing Solutions</li>
                <li>• IoT Security Protocols</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold gradient-text mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced cybersecurity education covering ethical hacking, digital forensics, network security, and
                cryptography. Our graduates are well-prepared for careers in information security and cyber defense.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ethical Hacking & Penetration Testing</li>
                <li>• Digital Forensics</li>
                <li>• Network Security</li>
                <li>• Cryptography & Encryption</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold gradient-text mb-4">Blockchain Technology</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cutting-edge blockchain education including smart contract development, decentralized applications,
                cryptocurrency systems, and distributed ledger technologies for various industry applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Smart Contract Development</li>
                <li>• DeFi Applications</li>
                <li>• Cryptocurrency Systems</li>
                <li>• Distributed Ledger Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
