import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import Game from '../sections/Game'
import Staking from '../sections/Staking'
import Community from '../sections/Community'
import Presale from '../sections/Presale'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="game">
        <Game />
      </section>
      <section id="staking">
        <Staking />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="presale">
        <Presale />
      </section>
    </motion.div>
  )
}

export default Home
