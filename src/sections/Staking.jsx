import { motion } from 'framer-motion'
import StakingCalculator from '../components/StakingCalculator'

const Staking = () => {
  return (
    <section id="staking" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Staking Rewards</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Earn passive income by staking your BTFD tokens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4">Flexible Staking</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-primary">12% APY</p>
                <p className="text-gray-400">No lock-up period</p>
              </div>
              <button className="w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
                Stake Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4">Locked Staking</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-primary">24% APY</p>
                <p className="text-gray-400">3 months lock-up</p>
              </div>
              <button className="w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
                Stake Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4">Premium Staking</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-primary">36% APY</p>
                <p className="text-gray-400">6 months lock-up</p>
              </div>
              <button className="w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
                Stake Now
              </button>
            </motion.div>
          </div>

          <div>
            <StakingCalculator />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Staking
