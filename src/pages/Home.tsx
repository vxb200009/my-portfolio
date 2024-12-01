import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Projects from './Projects'

import '../styles/patterns.css'
import Skills from '../components/skills/Skills'

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen overflow-x-hidden bg-gray-50/30"
    >
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-repeat pattern-grid-gray/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative">
          <Hero />
          {/* Curved Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden transform translate-y-1/2">
            <svg className="relative w-full h-24 md:h-32" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path 
                d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" 
                className="fill-gray-50/50"
              />
            </svg>
          </div>
        </div>

        {/* Projects Section */}
        <motion.div className="relative py-20">
          <Projects />
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden transform translate-y-1/2">
            <svg className="relative w-full h-24 md:h-32" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path 
                d="M0,40 C320,20 480,80 720,60 C960,40 1120,80 1440,60 L1440,100 L0,100 Z" 
                className="fill-gray-50"
              />
            </svg>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="relative py-20 bg-gray-50">
          <Skills />
          {/* Diagonal Dots Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="relative w-full h-24" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" className="fill-gray-200" />
              </pattern>
              <path d="M0,0 L100,100 L0,100 Z" fill="url(#dots)" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home 