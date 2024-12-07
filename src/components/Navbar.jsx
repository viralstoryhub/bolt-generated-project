import { useState } from 'react';
import { FaWallet, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#community", label: "Community" }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#FF85B3] text-transparent bg-clip-text">
                ValenRizz
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-600 hover:text-[#FF4D4D] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#FF4D4D] text-white px-4 py-2 rounded-full hover:bg-[#FF85B3] transition-colors flex items-center space-x-2">
              <FaWallet />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#FF4D4D] focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 text-gray-600 hover:text-[#FF4D4D] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-2 bg-[#FF4D4D] text-white px-3 py-2 rounded-full hover:bg-[#FF85B3] transition-colors flex items-center justify-center space-x-2">
              <FaWallet />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
