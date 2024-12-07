import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaChartLine, FaHandHoldingHeart } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: FaHeart,
      title: "Community First",
      description: "Built by the community, for the community. Every holder is part of our growing family."
    },
    {
      icon: FaUsers,
      title: "Transparent Team",
      description: "Fully doxxed team with proven track record in crypto and community building."
    },
    {
      icon: FaChartLine,
      title: "Sustainable Growth",
      description: "Strategic tokenomics designed for long-term stability and community rewards."
    },
    {
      icon: FaHandHoldingHeart,
      title: "Charitable Giving",
      description: "A portion of all transactions goes to supporting love-related charitable causes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
            About ValenRizz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ValenRizz is more than just a meme coin - it's a movement that celebrates love, community, and the future of decentralized finance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="text-[#FF4D4D] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <p className="text-gray-600 mb-6 text-lg">
              At ValenRizz, we envision a future where cryptocurrency isn't just about trading - it's about building meaningful connections and spreading love throughout the blockchain community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-bold text-[#FF4D4D] text-lg mb-2">Community</h3>
                <p className="text-gray-600">Building strong, lasting relationships</p>
              </div>
              <div>
                <h3 className="font-bold text-[#FF4D4D] text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing the boundaries of DeFi</p>
              </div>
              <div>
                <h3 className="font-bold text-[#FF4D4D] text-lg mb-2">Impact</h3>
                <p className="text-gray-600">Making a difference globally</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FF4D4D] to-[#FF85B3] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Team Member {member}</h3>
                <p className="text-[#FF4D4D] mb-2">Position</p>
                <p className="text-gray-600">Experienced in blockchain development and community building.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
