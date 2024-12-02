import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Buy The Dip,</span>
            <br />
            <span className="text-white">Reap the Rewards!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Join the revolution in meme cryptocurrency with real utility
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#presale" 
              className="inline-flex items-center px-8 py-3 bg-primary text-black rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors"
            >
              <FaRocket className="mr-2" />
              Join Presale Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
