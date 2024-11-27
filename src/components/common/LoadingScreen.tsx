import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative"
      >
        <motion.svg
          width="400"
          height="200"
          viewBox="0 0 400 200"
          className="mx-auto absolute top-0 left-0"
        >
          {/* Decorative scribbles behind the text */}
          <motion.path
            d="M50 100 C50 100, 100 50, 150 100 S250 150, 300 100 S350 50, 400 100"
            fill="transparent"
            stroke="#FFD700"
            strokeWidth="3"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M70 120 C70 120, 120 70, 170 120 S270 170, 320 120 S370 70, 420 120"
            fill="transparent"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M30 80 C30 80, 80 30, 130 80 S230 130, 280 80 S330 30, 380 80"
            fill="transparent"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
        
        {/* Text on top */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 font-sans">
            Venkat
          </h1>
        </motion.div>
        
        {/* Loading spinner */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="w-16 h-16 border-t-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto mt-8"
        />
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen 