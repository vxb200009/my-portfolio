import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface LogoProps {
  className?: string;
  pathVariants?: any;
  showTooltip?: boolean;
  tooltipPlacement?: 'top' | 'bottom' | 'right';
}

const Logo = ({ 
  className = "w-14 h-12", 
  pathVariants,
  showTooltip = true,
  tooltipPlacement = 'bottom'
}: LogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: "easeOut"
      }
    }
  };

  const variants = pathVariants || defaultPathVariants;

  const tooltipVariants = {
    hidden: { 
      opacity: 0,
      y: tooltipPlacement === 'top' ? 10 : tooltipPlacement === 'bottom' ? -10 : 0,
      x: tooltipPlacement === 'right' ? -10 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: tooltipPlacement === 'top' ? -5 : tooltipPlacement === 'bottom' ? 5 : 0,
      x: tooltipPlacement === 'right' ? 5 : 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const tooltipPosition = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    right: 'left-full ml-2'
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      className={`relative ${className}`}
    >
      <motion.svg
        viewBox="0 0 120 100"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Main flowing line forming V and connecting to K */}
        <motion.path
          d="M20 20 
              L40 80 
              L60 20
              L60 80"
          className="stroke-indigo-500"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={variants}
        />

        {/* K's diagonal strokes flowing into B */}
        <motion.path
          d="M60 50 
              L85 20
              C95 20, 95 35, 95 35
              M60 50
              L85 80
              C95 80, 95 65, 95 65"
          className="stroke-indigo-400"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={variants}
        />

        {/* B's central curve */}
        <motion.path
          d="M95 35
             C115 35, 115 50, 95 50
             C115 50, 115 65, 95 65"
          className="stroke-indigo-400"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={variants}
        />
      </motion.svg>

      {/* Tooltip */}
      {showTooltip && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tooltipVariants}
              className={`absolute ${tooltipPosition[tooltipPlacement]} whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 z-50`}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Venkat Kishan
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Bommali
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Logo;
