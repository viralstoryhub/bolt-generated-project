import { motion } from 'framer-motion'
import Countdown from 'react-countdown'

const Presale = () => {
  // Set end date to 30 days from now
  const presaleEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  return (
    <section id="presale" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Presale Now Live</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't miss out on the opportunity to be an early BTFD holder
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Presale Details</h3>
              <ul className="space-y-4 text-gray-400">
                <li>Token Price: 1 BTFD = 0.001 ETH</li>
                <li>Minimum Buy: 0.1 ETH</li>
                <li>Maximum Buy: 5 ETH</li>
                <li>Soft Cap: 100 ETH</li>
                <li>Hard Cap: 500 ETH</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Time Remaining</h4>
              <Countdown
                date={presaleEnd}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">{days}</p>
                      <p className="text-sm text-gray-400">Days</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">{hours}</p>
                      <p className="text-sm text-gray-400">Hours</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">{minutes}</p>
                      <p className="text-sm text-gray-400">Minutes</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">{seconds}</p>
                      <p className="text-sm text-gray-400">Seconds</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Amount (ETH)</label>
                <input
                  type="number"
                  min="0.1"
                  max="5"
                  step="0.1"
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">You will receive</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg"
                  placeholder="0 BTFD"
                  disabled
                />
              </div>
              <button className="w-full bg-primary text-black px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-bold">
                Buy BTFD Tokens
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Presale
