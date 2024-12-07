import { motion } from 'framer-motion';

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      items: [
        "Website Launch",
        "Community Building",
        "Smart Contract Development",
        "Initial Marketing Campaign"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth",
      items: [
        "Token Launch",
        "Exchange Listings",
        "Partnership Development",
        "Community Expansion"
      ]
    },
    {
      phase: "Phase 3",
      title: "Innovation",
      items: [
        "NFT Collection Launch",
        "Platform Development",
        "Major Exchange Listings",
        "Global Marketing Push"
      ]
    },
    {
      phase: "Phase 4",
      title: "Expansion",
      items: [
        "Mobile App Launch",
        "Cross-chain Integration",
        "Strategic Partnerships",
        "Community Governance"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text"
        >
          Roadmap
        </motion.h1>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-[#FF4D4D] font-bold text-xl">{phase.phase}</span>
                <div className="h-0.5 bg-[#FF4D4D] flex-grow ml-4"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
