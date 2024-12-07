import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingHearts = Array(5).fill(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Floating Hearts */}
      {floatingHearts.map((_, index) => (
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
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        >
          <FaHeart />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 text-[#FF4D4D] font-medium">
            🚀 Welcome to the Future of Love & Crypto
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text"
        >
          Spread the Love with ValenRizz!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600"
        >
          Join the crypto love story! ValenRizz (VRZ) is the Valentine's Day meme coin that brings love, laughter, and crypto together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Buy VRZ Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#FF4D4D] text-[#FF4D4D] px-8 py-4 rounded-full text-lg hover:bg-[#FF4D4D] hover:text-white transition-colors shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16"
        >
          {[
            { label: "Community Members", value: "1M+" },
            { label: "Market Cap", value: "$2M+" },
            { label: "Holders", value: "50K+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <div className="text-2xl font-bold text-[#FF4D4D]">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 pointer-events-none"></div>
    </div>
  );
}
