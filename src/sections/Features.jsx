import { motion } from 'framer-motion'
import { FaGamepad, FaCoins, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaGamepad className="w-8 h-8" />,
    title: "P2E Gaming",
    description: "Earn rewards while playing our exciting blockchain-based games"
  },
  {
    icon: <FaCoins className="w-8 h-8" />,
    title: "Staking Rewards",
    description: "Stake your tokens and earn passive income with competitive APY"
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Community Driven",
    description: "Join our active community and help shape the future of BTFD"
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Key Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes BTFD Coin unique and valuable for our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
