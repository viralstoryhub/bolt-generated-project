import { Link } from 'react-router-dom'
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa'
import useScrollToSection from '../hooks/useScrollToSection'

const Footer = () => {
  const scrollToSection = useScrollToSection()

  return (
    <footer className="bg-black/90 border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">BTFD Coin</h3>
            <p className="text-gray-400">Buy The Dip, Reap the Rewards!</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-primary"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-primary"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('staking')}
                  className="text-gray-400 hover:text-primary"
                >
                  Staking
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Telegram Group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-black border border-primary/20 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><FaTelegram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><FaDiscord size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><FaGithub size={24} /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BTFD Coin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
