import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaChartLine, FaHandHoldingHeart, FaChartPie, FaExchangeAlt, FaLock, FaRocket, FaTwitter, FaTelegram, FaDiscord, FaReddit } from 'react-icons/fa';
import AnimatedHero from './AnimatedHero';

export default function Home() {
  // ... rest of the code remains the same ...

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Rest of the sections remain the same */}
      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        {/* ... */}
      </section>

      {/* Other sections ... */}
    </div>
  );
}
