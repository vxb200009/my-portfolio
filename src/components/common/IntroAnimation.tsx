import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useMemo, useCallback } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showText, setShowText] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimationControls();

  // Generate initial particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: `hsl(${Math.random() * 60 + 250}, 70%, 50%)`
    }));
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-50 overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />

        {/* Interactive particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [
                `${particle.x}%`,
                `${particle.x + (mousePosition.x - 50) / 5}%`
              ],
              y: [
                `${particle.y}%`,
                `${particle.y + (mousePosition.y - 50) / 5}%`
              ],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
            animate={{
              d: [
                "M0 100 Q 250 50 500 100 T 1000 100",
                "M0 100 Q 250 150 500 100 T 1000 100",
                "M0 100 Q 250 50 500 100 T 1000 100"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Converging Bubbles */}
      <div className="relative">
        {particles.map((particle, i) => (
          <motion.div
            key={`bubble-${i}`}
            initial={{
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: Math.random() * window.innerHeight - window.innerHeight / 2,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              ease: "easeOut",
            }}
            style={{
              position: 'absolute',
              width: particle.size * 2,
              height: particle.size * 2,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${particle.color}, transparent)`,
              willChange: 'transform',
            }}
          />
        ))}

        {/* Portfolio Text */}
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text whitespace-nowrap"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(168, 85, 247))',
                  backgroundSize: '200% 100%',
                  animation: 'gradientFlow 2s linear infinite',
                }}
              >
                Welcome to my Portfolio
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default IntroAnimation;
