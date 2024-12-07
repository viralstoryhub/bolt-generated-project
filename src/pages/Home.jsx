import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF4D4D] mb-6">
          Spread the Love with ValenRizz!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the crypto love story! ValenRizz (VRZ) is the Valentine's Day meme coin that brings love, laughter, and crypto together.
        </p>
        <button className="bg-[#FF4D4D] text-white px-8 py-3 rounded-full text-lg hover:bg-[#FF85B3] transition-colors">
          Buy VRZ Now
        </button>
      </motion.div>
    </div>
  )
}

export default Home
