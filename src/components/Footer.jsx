import { FaTwitter, FaTelegram, FaDiscord, FaReddit, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white">
      {/* Scroll to top button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text mb-4">
              ValenRizz
            </h3>
            <p className="text-gray-600 mb-4">
              The Valentine's Day meme coin that brings love and crypto together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF4D4D] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF4D4D] transition-colors">
                <FaTelegram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF4D4D] transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF4D4D] transition-colors">
                <FaReddit size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">About</a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Tokenomics</a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Community</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Smart Contract</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Audit Report</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-[#FF4D4D]"
              />
              <button className="w-full bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2024 ValenRizz. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="flex items-center text-gray-600 text-sm">
              <span>Made with</span>
              <FaHeart className="text-[#FF4D4D] mx-1" />
              <span>by the ValenRizz Team</span>
            </div>

            {/* Legal links */}
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
