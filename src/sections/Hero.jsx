import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Buy The Dip,<br />Reap the Rewards!</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join the revolution in meme cryptocurrency with real utility
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#presale" 
              className="group flex items-center px-8 py-4 bg-primary text-black rounded-full text-lg font-semibold hover:bg-primary/80 transition-all transform hover:scale-105"
            >
              <FaRocket className="mr-2 transform group-hover:rotate-45 transition-transform" />
              Join Presale Now
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-sm text-gray-400">Total Holders</div>
                <div className="text-xl font-bold text-primary">50,000+</div>
              </div>
              <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-sm text-gray-400">Market Cap</div>
                <div className="text-xl font-bold text-primary">$10M+</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Coins Animation */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full opacity-75" />
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-primary rounded-full opacity-75" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />
    </div>
  )
}

export default Hero
