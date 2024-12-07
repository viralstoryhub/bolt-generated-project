import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaReddit } from 'react-icons/fa';

export default function Community() {
  const socials = [
    { icon: FaTwitter, name: "Twitter", link: "#", color: "bg-blue-400" },
    { icon: FaTelegram, name: "Telegram", link: "#", color: "bg-blue-500" },
    { icon: FaDiscord, name: "Discord", link: "#", color: "bg-indigo-500" },
    { icon: FaReddit, name: "Reddit", link: "#", color: "bg-orange-500" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text"
        >
          Join Our Community
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <social.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">{social.name}</h3>
              <p className="text-gray-600">Join our {social.name} community</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:border-[#FF4D4D]"
              />
              <button className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#FF85B3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
