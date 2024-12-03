import { motion } from 'framer-motion'
import { FaGamepad, FaTrophy, FaCoins } from 'react-icons/fa'
import useContent from '../hooks/useContent'

const iconMap = {
  FaGamepad,
  FaTrophy,
  FaCoins
}

const Game = () => {
  const { content, loading } = useContent('game')

  if (loading || !content) return null

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{content.title}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Game Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-primary/20 bg-black/50 backdrop-blur-sm">
              {/* Game Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Game Character */}
                  <motion.div
                    className="absolute w-12 h-12 bg-primary rounded-lg"
                    animate={{
                      x: [0, 100, 200, 100, 0],
                      y: [0, -50, 0, -50, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Coins */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 text-primary"
                      initial={{ x: i * 50 + 50, y: 50, opacity: 1 }}
                      animate={{
                        y: [50, 20, 50],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      <FaCoins className="w-full h-full" />
                    </motion.div>
                  ))}

                  {/* Obstacles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-red-500/50 rounded"
                      initial={{ x: (i + 1) * 80 + 50, y: 80 }}
                      animate={{
                        x: [(i + 1) * 80 + 50, (i + 1) * 80, (i + 1) * 80 + 50],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{content.status}</h3>
                  <p className="text-gray-400">Get ready for the ultimate P2E experience</p>
                </div>
              </div>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                <FaTrophy className="text-primary mb-2" />
                <div className="text-sm text-gray-400">Total Rewards</div>
                <div className="text-xl font-bold text-primary">{content.rewards.total}</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                <FaCoins className="text-primary mb-2" />
                <div className="text-sm text-gray-400">Daily Earnings</div>
                <div className="text-xl font-bold text-primary">{content.rewards.daily}</div>
              </div>
            </div>
          </motion.div>

          {/* Game Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Game Features</h3>
            
            <div className="space-y-6">
              {content.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon]
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <IconComponent className="text-primary text-xl" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-black rounded-xl font-semibold hover:bg-primary/80 transition-colors"
              >
                {content.ctaText}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Game
