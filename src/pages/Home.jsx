import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import Game from '../sections/Game'
import Staking from '../sections/Staking'
import Community from '../sections/Community'
import Whitepaper from '../sections/Whitepaper'
import Roadmap from '../sections/Roadmap'
import Presale from '../sections/Presale'

const Home = () => {
  return (
    <div className="relative">
      <section id="home">
        <Hero />
      </section>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="about" className="relative z-10">
          <About />
        </section>
        <section id="features" className="relative z-10">
          <Features />
        </section>
        <section id="game" className="relative z-10">
          <Game />
        </section>
        <section id="staking" className="relative z-10">
          <Staking />
        </section>
        <section id="whitepaper" className="relative z-10">
          <Whitepaper />
        </section>
        <section id="roadmap" className="relative z-10">
          <Roadmap />
        </section>
        <section id="community" className="relative z-10">
          <Community />
        </section>
        <section id="presale" className="relative z-10">
          <Presale />
        </section>
      </motion.div>
    </div>
  )
}

export default Home
