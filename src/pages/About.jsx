import { motion } from 'framer-motion'

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF4D4D] mb-6">
          About ValenRizz
        </h1>
        <div className="prose prose-lg">
          <p className="mb-4">
            At ValenRizz, we believe in the power of love and community. Born from a passion for crypto and the joy of giving, we've created a platform where every transaction is a gesture of affection.
          </p>
          <p>
            Whether you're sending virtual gifts, trading memes, or contributing to a cause, you're part of something bigger.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
