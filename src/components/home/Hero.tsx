import { motion } from 'framer-motion'
import Button from "../common/Button"
import SocialLinks from "../common/SocialLinks"

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
              Full Stack Developer | UI/UX Designer | Problem Solver
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
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-700">Professional Journey</h3>
              <div className="space-y-3">
                <motion.div variants={companyVariants} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <p className="text-gray-600">Currently @ <span className="font-medium text-gray-800">Current Company</span></p>
                </motion.div>
                <motion.div variants={companyVariants} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-indigo-200 rounded-full"></div>
                  <p className="text-gray-600">Previously @ <span className="font-medium text-gray-800">Previous Company 1</span></p>
                </motion.div>
                <motion.div variants={companyVariants} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-indigo-100 rounded-full"></div>
                  <p className="text-gray-600">Started @ <span className="font-medium text-gray-800">Previous Company 2</span></p>
                </motion.div>
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
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated bubbles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-${Math.random() * 8 + 4} h-${Math.random() * 8 + 4} rounded-full bg-indigo-${100 + i * 100} opacity-40`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              {/* Multiple layered shadows for depth */}
              <div className="absolute inset-0 bg-indigo-200 rounded-full blur-2xl opacity-20 scale-110 transform rotate-12" />
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-20 scale-105 transform -rotate-6" />
              <div className="absolute inset-0 bg-indigo-50 rounded-full transform -rotate-6" />
              
              {/* Image Container */}
              <motion.div 
                className="relative rounded-full overflow-hidden border-4 border-white shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 30px rgba(79, 70, 229, 0.15)' 
                }}
                transition={{ 
                  duration: 0.2,
                  boxShadow: { duration: 0.15 }
                }}
              >
                <img
                  src="/path-to-your-photo.jpg"
                  alt="Venkat"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
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