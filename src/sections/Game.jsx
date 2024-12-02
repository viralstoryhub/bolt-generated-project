import { motion } from 'framer-motion'

const Game = () => {
  return (
    <section id="game" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Play to Earn</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter the world of blockchain gaming and earn rewards while having fun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">How to Play</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-2">1.</span>
                Connect your wallet and get your character
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">2.</span>
                Complete missions and challenges
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">3.</span>
                Earn BTFD tokens as rewards
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">4.</span>
                Level up and increase your earning potential
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-black p-8 rounded-2xl border border-primary/20"
          >
            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Game Preview Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Game
