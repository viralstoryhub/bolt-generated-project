import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Platform */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">AI Trading Bot</a></li>
              <li><a href="#" className="hover:text-white transition">Rug-Pull Detection</a></li>
              <li><a href="#" className="hover:text-white transition">Crypto Card</a></li>
              <li><a href="#" className="hover:text-white transition">SolAIra Platform</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Discord</a></li>
              <li><a href="#" className="hover:text-white transition">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="#" className="hover:text-white transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin className="w-6 h-6" />
          </a>
           <a href="#" className="hover:text-white transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">© 2024 SolAIra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
