import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function AnimatedHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Hearts */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-200 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            rotate: [-10, 10],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <FaHeart />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-4"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 text-[#FF4D4D] font-medium">
            🚀 Welcome to the Future of Love & Crypto
          </div>
        </motion.div>

        {/* Valentine Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-[#FF4D4D]"
            >
              <span className="text-[#FF4D4D] font-medium">
                This Valentine with Steph 💝
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text"
        >
          Spread the Love with ValenRizz!
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600"
        >
          Join the crypto love story! ValenRizz (VRZ) is the Valentine's Day meme coin that brings love, laughter, and crypto together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-x-4"
        >
          <button className="bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg">
            Buy VRZ Now
          </button>
          <button className="border-2 border-[#FF4D4D] text-[#FF4D4D] px-8 py-4 rounded-full text-lg hover:bg-[#FF4D4D] hover:text-white transition-colors shadow-lg">
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16"
        >
          {[
            { label: "Community Members", value: "1M+" },
            { label: "Market Cap", value: "$2M+" },
            { label: "Holders", value: "50K+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <div className="text-2xl font-bold text-[#FF4D4D]">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 pointer-events-none"></div>
    </div>
  );
}
