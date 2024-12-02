import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useScrollToSection from '../hooks/useScrollToSection'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrollToSection = useScrollToSection()
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'P2E Game', id: 'game' },
    { name: 'Staking', id: 'staking' },
    { name: 'Community', id: 'community' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return

      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    } else {
      scrollToSection(id)
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-bold gradient-text"
          >
            BTFD Coin
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-white hover:text-primary transition-colors relative ${
                  activeSection === item.id && location.pathname === '/' ? 'text-primary' : ''
                }`}
              >
                {item.name}
                {activeSection === item.id && location.pathname === '/' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('presale')}
              className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Presale
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-white hover:text-primary transition-colors ${
                  activeSection === item.id && location.pathname === '/' ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('presale')}
              className="block w-full px-3 py-2 text-center bg-primary text-black rounded-lg hover:bg-primary/80 transition-colors"
            >
              Presale
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
