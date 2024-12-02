import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import LiveChat from './components/LiveChat'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <LiveChat />
        <Footer />
      </div>
    </div>
  )
}

export default App
