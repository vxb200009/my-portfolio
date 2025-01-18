import { motion } from 'framer-motion'
import Button from "../common/Button"
import SocialLinks from "../common/SocialLinks"
import profilePic from '../../assets/ProfilePic.jpeg'

const Hero = () => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        when: "beforeChildren"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const companyVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.1
      }
    })
  }

  const name = "Venkat".split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center w-full py-20 overflow-hidden">
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-20 h-20 border-4 border-pink-200 rotate-45" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-yellow-100/50" />
        <div className="absolute top-1/3 right-1/3 w-14 h-14 border-4 border-purple-200 rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-indigo-200 rotate-12" />
        <div className="absolute top-1/2 left-20 w-10 h-10 bg-indigo-100/50 rotate-45" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-800"
            >
              Hi, I'm{" "}
              <span className="inline-block">
                {name.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-indigo-400 hover:text-indigo-600 transition-colors cursor-default"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [-5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600"
            >
              Full Stack Developer | Cloud Solutions Architect | Problem Solver
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="prose prose-lg text-gray-600 max-w-none"
            >
              <p>
                Passionate about creating seamless user experiences and robust applications. 
                With expertise in modern web technologies and a keen eye for design, 
                I bring ideas to life through clean, efficient code.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50/50 border border-indigo-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></div>
                <p className="text-gray-600">
                  Building amazing things @ <span className="font-semibold text-indigo-600">MetaJungle</span>
                  <span className="ml-2 text-sm text-gray-500">as Founding Engineer</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <Button href="/projects">View My Work</Button>
              <Button href="/contact" variant="secondary">Get in Touch</Button>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SocialLinks className="text-gray-600 hover:text-indigo-400 transition-colors" />
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            className="relative order-first lg:order-last w-full max-w-md mx-auto"
          >
            <div className="relative aspect-square">
              {/* Dynamic Background Elements */}
              <div className="absolute inset-0 -z-10">
                {/* Morphing Orbs */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.2, 0.9, 1],
                      opacity: [0.3, 0.6, 0.3],
                      y: [0, -30, 20, 0],
                      x: [0, 20, -20, 0],
                    }}
                    transition={{
                      duration: 8,
                      delay: i * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute w-40 h-40 rounded-full blur-2xl
                      ${i === 0 ? 'bg-indigo-400/30 top-0 right-0' : 
                        i === 1 ? 'bg-purple-400/30 bottom-10 left-10' : 
                          'bg-pink-400/30 top-20 left-20'}`}
                  />
                ))}

                {/* Pulsing Rings */}
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotate: i * 45, scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 1,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 0.9, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 15,
                          delay: i * 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-full h-full border-2 border-indigo-200/30 rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Image Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative z-10 rounded-2xl overflow-hidden"
              >
                {/* Hexagonal Mask */}
                <div className="clip-hex relative">
                  {/* Image with Hover Effect */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                    className="relative"
                  >
                    <img
                      src={profilePic}
                      alt="Venkat Profile"
                      className="w-full h-full object-cover"
                    />

                    {/* Dynamic Gradient Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        background: [
                          'linear-gradient(45deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                          'linear-gradient(45deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)',
                          'linear-gradient(45deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)'
                        ]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0"
                    />
                  </motion.div>

                  {/* Animated Corner Accents */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: 1,
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        delay: 0.5 + (i * 0.1),
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute w-6 h-6"
                      style={{
                        top: i < 2 ? '0' : 'auto',
                        bottom: i >= 2 ? '0' : 'auto',
                        left: i % 2 === 0 ? '0' : 'auto',
                        right: i % 2 === 1 ? '0' : 'auto',
                      }}
                    >
                      <div className="w-full h-full border-2 border-white/30" 
                           style={{
                             borderRadius: i === 0 ? '0 100% 0 0' : 
                                      i === 1 ? '100% 0 0 0' :
                                      i === 2 ? '0 0 0 100%' : '0 0 100% 0'
                           }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 z-20"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      delay: i * 0.2,
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-3 h-3"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-160px)`,
                      transformOrigin: 'center center'
                    }}
                  >
                    <motion.div 
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(255,255,255,0.5)',
                          '0 0 20px rgba(255,255,255,0.8)',
                          '0 0 10px rgba(255,255,255,0.5)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full h-full bg-white rounded-full"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Animation Styles */}
            <style>{`
              .clip-hex {
                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
              }

              @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
                100% { transform: translateY(0px) rotate(0deg); }
              }

              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </motion.div>
        </div>
      </motion.div>

      {/* Add this to your CSS */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero 