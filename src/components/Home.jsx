import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaChartLine, FaHandHoldingHeart, FaChartPie, FaExchangeAlt, FaLock, FaRocket, FaTwitter, FaTelegram, FaDiscord, FaReddit } from 'react-icons/fa';
import AnimatedHero from './AnimatedHero';

export default function Home() {
  const features = [
    {
      icon: FaHeart,
      title: "Community First",
      description: "Built by the community, for the community. Every holder is part of our growing family."
    },
    {
      icon: FaUsers,
      title: "Transparent Team",
      description: "Fully doxxed team with proven track record in crypto and community building."
    },
    {
      icon: FaChartLine,
      title: "Sustainable Growth",
      description: "Strategic tokenomics designed for long-term stability and community rewards."
    },
    {
      icon: FaHandHoldingHeart,
      title: "Charitable Giving",
      description: "A portion of all transactions goes to supporting love-related charitable causes."
    }
  ];

  const tokenDistribution = [
    { label: "Public Sale & Liquidity", percentage: 80, color: "bg-[#FF4D4D]" },
    { label: "Marketing & Development", percentage: 8, color: "bg-[#FF85B3]" },
    { label: "Team Tokens", percentage: 5, color: "bg-pink-400" },
    { label: "Community Rewards", percentage: 5, color: "bg-pink-300" },
    { label: "Charity Wallet", percentage: 2, color: "bg-red-300" }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      items: ["Website Launch", "Community Building", "Smart Contract Development", "Initial Marketing Campaign"]
    },
    {
      phase: "Phase 2",
      title: "Growth",
      items: ["Token Launch", "Exchange Listings", "Partnership Development", "Community Expansion"]
    },
    {
      phase: "Phase 3",
      title: "Innovation",
      items: ["NFT Collection Launch", "Platform Development", "Major Exchange Listings", "Global Marketing Push"]
    },
    {
      phase: "Phase 4",
      title: "Expansion",
      items: ["Mobile App Launch", "Cross-chain Integration", "Strategic Partnerships", "Community Governance"]
    }
  ];

  const socials = [
    { icon: FaTwitter, name: "Twitter", link: "#", color: "bg-blue-400" },
    { icon: FaTelegram, name: "Telegram", link: "#", color: "bg-blue-500" },
    { icon: FaDiscord, name: "Discord", link: "#", color: "bg-indigo-500" },
    { icon: FaReddit, name: "Reddit", link: "#", color: "bg-orange-500" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
              About ValenRizz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a meme coin - it's a movement that celebrates love, community, and the future of decentralized finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="text-[#FF4D4D] text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-gray-50" id="tokenomics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tokenomics are designed to reward holders and ensure long-term sustainability.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
            <div className="space-y-4">
              {tokenDistribution.map((item) => (
                <div key={item.label} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`${item.color} h-4 rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transaction Fee Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Transaction Fee Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-[#FF4D4D] mb-2">2%</div>
                <div className="font-medium">Holder Rewards</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
                <div className="font-medium">Liquidity Pool</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
                <div className="font-medium">Marketing</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
                <div className="font-medium">Charity</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white relative" id="roadmap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our path to revolutionize the meme coin space
            </p>
          </motion.div>

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FF4D4D] to-[#FF85B3]"></div>

            <div className="space-y-24">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-3xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
                            {phase.phase}
                          </span>
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                        </div>
                        <ul className={`space-y-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-600">
                              {index % 2 === 0 && <div className="flex-grow" />}
                              <span className="w-2 h-2 bg-[#FF4D4D] rounded-full"></span>
                              <span>{item}</span>
                              {index % 2 === 1 && <div className="flex-grow" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <div className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D4D] to-[#FF85B3] rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
              Join Our Community
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <social.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <p className="text-gray-600">Join our {social.name} community</p>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:border-[#FF4D4D]"
                />
                <button className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#FF85B3] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
