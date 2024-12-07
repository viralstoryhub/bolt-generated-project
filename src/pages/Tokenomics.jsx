import { motion } from 'framer-motion'

function Tokenomics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF4D4D] mb-6">
          Tokenomics
        </h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Token Distribution</h2>
            <ul className="space-y-2">
              <li>Public Sale and Liquidity Pool: 80%</li>
              <li>Marketing and Development: 8%</li>
              <li>Team Tokens: 5% (Locked for 6 months)</li>
              <li>Community Rewards: 5%</li>
              <li>Charity Wallet: 2%</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Transaction Fees</h2>
            <ul className="space-y-2">
              <li>2% Redistributed to Holders</li>
              <li>1% Added to Liquidity Pool</li>
              <li>1% Marketing Wallet</li>
              <li>1% Charity Wallet</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Tokenomics
