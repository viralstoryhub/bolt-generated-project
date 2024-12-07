import { motion } from 'framer-motion';
import { FaChartPie, FaExchangeAlt, FaLock, FaRocket } from 'react-icons/fa';

export default function Tokenomics() {
  const tokenDistribution = [
    { label: "Public Sale & Liquidity", percentage: 80, color: "bg-[#FF4D4D]" },
    { label: "Marketing & Development", percentage: 8, color: "bg-[#FF85B3]" },
    { label: "Team Tokens", percentage: 5, color: "bg-pink-400" },
    { label: "Community Rewards", percentage: 5, color: "bg-pink-300" },
    { label: "Charity Wallet", percentage: 2, color: "bg-red-300" }
  ];

  const features = [
    {
      icon: FaChartPie,
      title: "Token Distribution",
      description: "Fair launch with majority of tokens in public sale and liquidity."
    },
    {
      icon: FaExchangeAlt,
      title: "Transaction Tax",
      description: "5% tax split between holders, liquidity, marketing, and charity."
    },
    {
      icon: FaLock,
      title: "Locked Liquidity",
      description: "Initial liquidity locked for 1 year to ensure project stability."
    },
    {
      icon: FaRocket,
      title: "Anti-Whale",
      description: "Maximum transaction limits to prevent market manipulation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
            Tokenomics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our tokenomics are designed to reward holders and ensure long-term sustainability of the project.
          </p>
        </motion.div>

        {/* Token Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Token Distribution</h2>
          <div className="space-y-4">
            {tokenDistribution.map((item) => (
              <div key={item.label} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`${item.color} h-4 rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <feature.icon className="text-[#FF4D4D] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Transaction Fee Breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Transaction Fee Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold text-[#FF4D4D] mb-2">2%</div>
              <div className="font-medium">Holder Rewards</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
              <div className="font-medium">Liquidity Pool</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
              <div className="font-medium">Marketing</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold text-[#FF4D4D] mb-2">1%</div>
              <div className="font-medium">Charity</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
