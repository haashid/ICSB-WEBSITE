import { Shield, Wifi, Blocks, Brain, Database, Globe } from "lucide-react"

const Specializations = () => {
  const specializations = [
    {
      icon: Wifi,
      title: "Internet of Things (IoT)",
      description:
        "Smart devices, sensor networks, and connected systems for the future of automation and intelligent environments.",
      features: ["Smart Home Systems", "Industrial IoT", "Wearable Technology", "Edge Computing"],
      color: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protecting digital assets and ensuring secure communication in an increasingly connected digital world.",
      features: ["Network Security", "Ethical Hacking", "Digital Forensics", "Cryptography"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: Blocks,
      title: "Blockchain Technology",
      description:
        "Decentralized systems, smart contracts, and the revolutionary future of digital transactions and trust.",
      features: ["Smart Contracts", "DeFi Applications", "NFT Development", "Cryptocurrency"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine learning, deep learning, and intelligent systems that are reshaping every industry.",
      features: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Robotics"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Big data analytics, data mining, and business intelligence solutions for data-driven decision making.",
      features: ["Data Analytics", "Big Data Processing", "Data Visualization", "Predictive Modeling"],
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: Globe,
      title: "Cloud Computing",
      description:
        "Scalable cloud solutions, distributed systems, and modern infrastructure for next-generation applications.",
      features: ["Cloud Architecture", "DevOps", "Microservices", "Container Technologies"],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-50",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold icsb-gradient-text mb-6">Our Specializations</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge programs designed to prepare students for the future of technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specializations.map((spec, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 card-hover group relative overflow-hidden">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${spec.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 transition-transform duration-500 shadow-lg`}
                  >
                    <spec.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-400 transition-all duration-500">
                    {spec.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{spec.description}</p>

                <div className="space-y-3">
                  {spec.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${spec.color} rounded-full mr-4 shadow-sm`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specializations
