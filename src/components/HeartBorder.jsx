import { motion } from 'framer-motion';

export default function HeartBorder({ children }) {
  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full border-2 border-[#FF4D4D] rounded-full opacity-50" />
      </motion.div>
      {children}
    </div>
  );
}
