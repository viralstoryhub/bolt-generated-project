import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PlatformOverview from './components/sections/PlatformOverview';
import AITradingBot from './components/sections/AITradingBot';
import Roadmap from './components/sections/Roadmap';
import RugPullDetection from './components/sections/RugPullDetection';
import Features from './components/sections/Features';
import Community from './components/sections/Community';
import CryptoCard from './components/sections/CryptoCard';
import Footer from './components/layout/Footer';
import TrustedBy from './components/sections/TrustedBy';
import SolAIraPlatform from './components/sections/SolAIraPlatform';
import Blog from './components/sections/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PlatformOverview />
              <TrustedBy />
              <SolAIraPlatform />
              <AITradingBot />
              <Roadmap />
              <Blog />
              <RugPullDetection />
              <Features />
              <Community />
              <CryptoCard />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
