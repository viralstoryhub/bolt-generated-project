import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About BTFD Coin</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            BTFD Coin is more than just another meme token. We're building a comprehensive ecosystem that combines the fun of meme culture with real utility and sustainable rewards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To create a community-driven platform that rewards holders through innovative P2E mechanics and staking opportunities, while maintaining the fun and excitement of meme culture.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To become the leading meme token that bridges the gap between entertainment and practical cryptocurrency utility, creating real value for our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-black p-8 rounded-2xl border border-primary/20"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Community First</h4>
                <p className="text-gray-400">Built by the community, for the community</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Real Utility</h4>
                <p className="text-gray-400">P2E gaming and staking rewards</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Transparency</h4>
                <p className="text-gray-400">Open and honest communication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
