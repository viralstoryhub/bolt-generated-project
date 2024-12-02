import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'
import TestimonialCard from '../components/TestimonialCard'
import SocialShare from '../components/SocialShare'

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Early Investor",
    quote: "BTFD Coin's staking rewards have been incredible. The community is super active and supportive!",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Sarah Chen",
    role: "P2E Gamer",
    quote: "The P2E game is addictive and actually rewards skilled players. Can't wait for more features!",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Mike Rodriguez",
    role: "Community Moderator",
    quote: "Being part of the Bulls Squad has been amazing. We're building something special here.",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Mike"
  }
]

const Community = () => {
  return (
    <section id="community" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Join Our Community</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Be part of the Bulls Squad and help shape the future of BTFD Coin
          </p>
          <div className="flex justify-center mb-8">
            <SocialShare />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors text-center group"
          >
            <FaTwitter className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Twitter</h3>
            <p className="text-gray-400">Follow us for the latest updates</p>
            <div className="mt-4 text-sm text-primary">50K+ Followers</div>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors text-center group"
          >
            <FaTelegram className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Telegram</h3>
            <p className="text-gray-400">Join our active community chat</p>
            <div className="mt-4 text-sm text-primary">25K+ Members</div>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors text-center group"
          >
            <FaDiscord className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Discord</h3>
            <p className="text-gray-400">Connect with fellow BTFD holders</p>
            <div className="mt-4 text-sm text-primary">30K+ Members</div>
          </motion.a>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">What Our Community Says</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
