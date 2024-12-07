import { motion } from 'framer-motion';

export default function NFT() {
  const nfts = [
    { id: 1, name: "Love Bird #1", price: "0.5 ETH" },
    { id: 2, name: "Cupid's Arrow #2", price: "0.7 ETH" },
    { id: 3, name: "Heart of Gold #3", price: "0.6 ETH" },
    { id: 4, name: "Valentine's Special #4", price: "0.8 ETH" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text"
        >
          NFT Collection
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-[#FF4D4D] to-[#FF85B3]"></div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{nft.name}</h3>
                <p className="text-gray-600">{nft.price}</p>
                <button className="mt-4 w-full bg-[#FF4D4D] text-white px-4 py-2 rounded-full hover:bg-[#FF85B3] transition-colors">
                  Mint Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
