import { motion } from 'framer-motion'
import { FaRocket, FaGamepad, FaExchangeAlt, FaGlobe, FaCheck } from 'react-icons/fa'

const RoadmapCard = ({ phase, title, items, icon: Icon, isActive, isCompleted, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`flex w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8 relative`}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-1/2 md:left-auto md:right-1/2 top-0 bottom-0 w-px bg-primary/20 -z-10" />
      <motion.div
        className={`w-8 h-8 rounded-full bg-primary absolute left-1/2 md:left-auto md:right-1/2 
          ${isEven ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} -translate-x-1/2 top-24
          flex items-center justify-center z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      >
        {isCompleted ? <FaCheck className="text-black" /> : <div className="w-3 h-3 rounded-full bg-black" />}
      </motion.div>

      {/* Content */}
      <motion.div
        className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 h-full
          hover:border-primary/40 transition-colors group">
          {/* Phase Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                ${isCompleted ? 'bg-primary text-black' : isActive ? 'bg-primary/20 text-primary' : 'bg-gray-800/50 text-gray-400'}`}>
                <Icon className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">{phase}</h3>
                <p className="text-gray-400">{title}</p>
              </div>
            </div>
            {(isCompleted || isActive) && (
              <span className={`px-4 py-1 rounded-full text-sm font-medium
                ${isCompleted ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'}`}>
                {isCompleted ? 'Completed' : 'In Progress'}
              </span>
            )}
          </div>

          {/* Timeline Items */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-3 group"
              >
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                  ${isCompleted ? 'bg-green-400' : isActive ? 'bg-primary' : 'bg-gray-600'}`} />
                <p className={`${isCompleted ? 'text-gray-300' : 'text-gray-400'} group-hover:text-gray-300 transition-colors`}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Year/Quarter */}
      <div className={`absolute ${isEven ? 'md:right-1/2 md:translate-x-40' : 'md:left-1/2 md:-translate-x-40'} 
        top-24 hidden md:block`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20"
        >
          <span className="text-primary font-semibold">Q{index + 1} 2024</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      icon: FaRocket,
      isCompleted: true,
      items: [
        "Token smart contract development and audit",
        "Website and brand identity launch",
        "Community building initiatives",
        "Strategic partnerships establishment",
        "Presale launch and token distribution"
      ]
    },
    {
      phase: "Phase 2",
      title: "Game Development",
      icon: FaGamepad,
      isActive: true,
      items: [
        "P2E game concept and mechanics finalization",
        "Game development and testing phase",
        "Community beta testing program",
        "Game economy balancing",
        "Official game launch and tournaments"
      ]
    },
    {
      phase: "Phase 3",
      title: "Exchange Listings",
      icon: FaExchangeAlt,
      items: [
        "Major DEX listings and liquidity provision",
        "CEX partnership negotiations",
        "Market maker collaborations",
        "Trading competitions and rewards",
        "Enhanced token utility implementation"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      icon: FaGlobe,
      items: [
        "Cross-chain bridge development",
        "NFT marketplace integration",
        "Advanced game features rollout",
        "DAO governance implementation",
        "Global marketing campaign"
      ]
    }
  ]

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The roadmap to revolutionize the meme coin space with real utility and sustainable growth
          </p>
        </motion.div>

        <div className="space-y-24">
          {roadmapData.map((item, index) => (
            <RoadmapCard key={index} {...item} index={index} />
          ))}
        </div>

        {/* Future Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">More exciting updates coming soon!</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Roadmap
