import { motion } from 'framer-motion'
import Button from "../common/Button"
import SocialLinks from "../common/SocialLinks"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
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

  return (
    <section className="min-h-screen flex items-center justify-center bg-white w-full py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-800"
          >
            Hi, I'm <span className="text-indigo-400">Venkat</span>
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
          
          <motion.div
            variants={itemVariants}
          >
            <SocialLinks className="text-gray-600 hover:text-indigo-400 transition-colors" />
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          variants={imageVariants}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
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
          
          {/* Enhanced Decorative Elements */}
          <motion.div
            className="absolute -z-10 w-72 h-72 bg-gradient-to-br from-indigo-50 to-white rounded-full -top-10 -right-10"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute -z-10 w-48 h-48 bg-gradient-to-tr from-blue-50 to-white rounded-full -bottom-10 -left-10"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -5, 0],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Additional floating elements */}
          <motion.div
            className="absolute w-4 h-4 bg-indigo-400 rounded-full top-10 right-10 opacity-40"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-blue-400 rounded-full bottom-20 left-10 opacity-40"
            animate={{
              y: [10, -10, 10],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 