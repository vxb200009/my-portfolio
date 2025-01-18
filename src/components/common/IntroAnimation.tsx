import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './Logo';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 1000); // Call onComplete after doors finish opening
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const logoPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Left Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 1,
              ease: [0.8, 0.1, 0.2, 0.9],
              delay: 1.5
            }}
            className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 z-30"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-right"
            >
              <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Welcome
              </h2>
            </motion.div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{
              duration: 1,
              ease: [0.8, 0.1, 0.2, 0.9],
              delay: 1.5
            }}
            className="absolute right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 via-gray-800 to-gray-700 z-30"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-8 top-1/2 -translate-y-1/2"
            >
              <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                to My Portfolio
              </h2>
            </motion.div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6"
            >
              <Logo 
                className="w-full h-full" 
                pathVariants={logoPathVariants}
                tooltipPlacement="right"
              />
            </motion.div>
          </motion.div>

          {/* Background Pattern */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
