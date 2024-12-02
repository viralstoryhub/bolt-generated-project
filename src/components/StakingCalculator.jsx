import { useState } from 'react'
import { motion } from 'framer-motion'

const StakingCalculator = () => {
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState('flexible')
  
  const getAPY = () => {
    switch(duration) {
      case 'flexible': return 12
      case 'locked': return 24
      case 'premium': return 36
      default: return 12
    }
  }

  const calculateRewards = () => {
    const apy = getAPY()
    const rewards = (parseFloat(amount) || 0) * (apy / 100)
    return rewards.toFixed(2)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
    >
      <h3 className="text-xl font-bold mb-4">Staking Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Amount of BTFD</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Staking Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
          >
            <option value="flexible">Flexible (12% APY)</option>
            <option value="locked">3 Months Locked (24% APY)</option>
            <option value="premium">6 Months Locked (36% APY)</option>
          </select>
        </div>
        <div className="bg-black/30 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Estimated Annual Rewards</p>
          <p className="text-2xl font-bold text-primary">{calculateRewards()} BTFD</p>
        </div>
      </div>
    </motion.div>
  )
}

export default StakingCalculator
