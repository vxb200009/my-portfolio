import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { BsFire } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset launching state after animation
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  const rocketVariants = {
    initial: { 
      scale: 0,
      opacity: 0 
    },
    animate: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    launch: {
      y: -1000,
      x: [0, -20, 20, -10, 10, 0],
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0,
      opacity: 0
    }
  };

  const fireVariants = {
    initial: { 
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 0.3,
        repeat: Infinity
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={rocketVariants}
        >
          <motion.div
            onClick={scrollToTop}
            className="relative cursor-pointer"
            whileHover={isLaunching ? undefined : "hover"}
            variants={rocketVariants}
          >
            {/* Rocket */}
            <motion.div
              className="relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg 
                       hover:shadow-indigo-500/30 hover:shadow-xl transition-shadow duration-300"
              animate={isLaunching ? "launch" : "animate"}
            >
              <FaRocket className="text-2xl" />
            </motion.div>

            {/* Fire Effect */}
            {isLaunching && (
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-500"
                variants={fireVariants}
                initial="initial"
                animate="animate"
              >
                <BsFire className="text-3xl" />
              </motion.div>
            )}
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
