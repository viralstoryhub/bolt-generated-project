import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
    >
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-primary"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="relative">
        <FaQuoteLeft className="text-primary/20 text-4xl absolute -left-2 -top-2" />
        <p className="text-gray-400 italic relative z-10 pl-6">{quote}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
