import { motion } from 'framer-motion'
import { FaFileAlt, FaDownload, FaChartLine, FaShieldAlt, FaCogs, FaUsers } from 'react-icons/fa'

const Whitepaper = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Whitepaper</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the technical details and vision behind BTFD Coin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaChartLine className="text-primary text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tokenomics</h3>
                  <p className="text-gray-400">
                    Total Supply: 1,000,000,000 BTFD<br />
                    Presale: 40%<br />
                    Liquidity: 30%<br />
                    Development: 15%<br />
                    Marketing: 10%<br />
                    Team: 5%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaShieldAlt className="text-primary text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <p className="text-gray-400">
                    - Audited smart contracts<br />
                    - Locked liquidity<br />
                    - Anti-whale mechanisms<br />
                    - Multi-sig wallet implementation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaCogs className="text-primary text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technology</h3>
                  <p className="text-gray-400">
                    - ERC-20 token standard<br />
                    - Optimized smart contracts<br />
                    - Cross-chain compatibility<br />
                    - Scalable infrastructure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20 text-center">
              <FaFileAlt className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Technical Whitepaper</h3>
              <p className="text-gray-400 mb-6">
                Download our comprehensive whitepaper to learn about our technology, tokenomics, and vision for the future.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-xl font-semibold hover:bg-primary/80 transition-colors"
              >
                <FaDownload className="mr-2" />
                Download Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Whitepaper
