import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiDownload, FiArrowRight, FiCoffee, FiCode } from 'react-icons/fi';
import { useState, useEffect, useCallback } from 'react';
import Resume from '../assets/resume/Resume_Venkat_Kishan_Bommali.pdf';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cursorText, setCursorText] = useState('');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Update dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const generateRandomPosition = useCallback(() => {
    return {
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height
    };
  }, [dimensions]);

  const techGreetings = [
    { text: "Hello World! 👋", subtext: "Let's debug your next opportunity together!" },
    { text: "console.log('Hi there!') 💻", subtext: "Ready to push some amazing commits to your team?" },
    { text: "import { Collaboration } from 'future' 🚀", subtext: "Let's build something extraordinary!" },
    { text: "while(true) { innovate() } ⚡", subtext: "Infinite loop of creativity and passion" },
    { text: "git commit -m 'Let's Connect!' 🤝", subtext: "Ready to merge our paths?" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % techGreetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      id: 'email',
      icon: <FiMail className="w-8 h-8" />,
      label: 'Email',
      value: 'venkatbommali2024@gmail.com',
      link: 'mailto:venkatbommali2024@gmail.com',
      color: 'from-violet-500 to-purple-500',
      description: 'Drop me a line anytime! I typically respond within 24 hours.',
      hoverText: 'Send an email'
    },
    {
      id: 'linkedin',
      icon: <FiLinkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkat-bommali',
      link: 'https://linkedin.com/in/venkat-bommali',
      color: 'from-blue-500 to-indigo-500',
      description: 'Let\'s connect professionally and grow our network.',
      hoverText: 'Connect on LinkedIn'
    },
    // {
    //   id: 'github',
    //   icon: <FiGithub className="w-8 h-8" />,
    //   label: 'GitHub',
    //   value: 'github.com/yourusername',
    //   link: 'https://github.com/yourusername',
    //   color: 'from-gray-700 to-gray-900',
    //   description: 'Check out my open-source contributions and projects.',
    //   hoverText: 'View GitHub Profile'
    // },
    {
      id: 'location',
      icon: <FiMapPin className="w-8 h-8" />,
      label: 'Location',
      value: 'Dallas, Texas',
      color: 'from-emerald-500 to-teal-500',
      description: 'Based in Dallas, open to opportunities and relocation across the US.',
      hoverText: 'View Location'
    }
  ];

  const downloadResume = () => {
    window.open(Resume, '_blank');
  };

  useEffect(() => {
    const card = contactInfo.find(info => info.id === hoveredCard);
    setCursorText(card?.hoverText || '');
  }, [hoveredCard]);

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 10,
    mass: 0.5
  };

  const smoothTransition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        {[...Array(15)].map((_, i) => {
          const pos1 = generateRandomPosition();
          const pos2 = generateRandomPosition();
          const pos3 = generateRandomPosition();

          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: pos1.x,
                y: pos1.y,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0.1,
              }}
              animate={{
                x: [pos1.x, pos2.x, pos3.x],
                y: [pos1.y, pos2.y, pos3.y],
                rotate: [0, 180, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className={`
                  ${i % 3 === 0 ? 'w-12 h-12 border-2 border-indigo-200/30 rotate-45' : 
                    i % 3 === 1 ? 'w-12 h-12 border-2 border-purple-200/30 rounded-full' :
                    'w-12 h-12 border-2 border-pink-200/30'} 
                  transform backdrop-blur-sm
                `} 
              />
            </motion.div>
          );
        })}

        {/* Moving Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-indigo-400/30 rounded-full backdrop-blur-sm"
            initial={{
              x: Math.random() * dimensions.width,
              y: -20,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: dimensions.height + 20,
              x: `${Math.random() * 100}%`,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [50, -50, 50],
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Code Symbols */}
        {[...Array(20)].map((_, i) => {
          const pos = generateRandomPosition();
          return (
            <motion.div
              key={`code-${i}`}
              className="absolute text-2xl font-mono"
              style={{
                color: `rgba(99, 102, 241, ${Math.random() * 0.2 + 0.1})`,
              }}
              initial={{
                x: pos.x,
                y: pos.y,
                scale: Math.random() * 0.5 + 0.5,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [pos.y, pos.y - 100, pos.y],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {['<>', '/>', '{}', '[]', '()', '=>', '*'][i % 7]}
            </motion.div>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d={`M 0 ${dimensions.height / 2} Q ${dimensions.width / 2} 0 ${dimensions.width} ${dimensions.height / 2}`}
            stroke="url(#gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-8">
        {/* Left Side - Greeting */}
        <motion.div 
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key={greetingIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 
                         to-pink-500 bg-clip-text text-transparent">
              {techGreetings[greetingIndex].text}
            </h1>
            <p className="text-xl text-gray-600">
              {techGreetings[greetingIndex].subtext}
            </p>
          </motion.div>

          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer crafting digital experiences with a passion for clean code and innovative solutions.
          </motion.p>

          <motion.button
            onClick={downloadResume}
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r 
                     from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg 
                     hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              transition: springTransition
            }}
            whileTap={{ 
              scale: 0.98,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0
                       transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={smoothTransition}
            />
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative z-10"
            >
              <FiDownload className="w-5 h-5" />
            </motion.div>
            <span className="relative z-10">Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Right Side - Contact Cards */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Primary Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.filter(info => info.id !== 'location').map((info, index) => (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: springTransition
                }}
                className="group perspective-1000"
              >
                <motion.a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                           transition-all duration-500 transform-gpu relative
                           hover:shadow-2xl hover:bg-white group-hover:border-transparent
                           border-2 border-transparent"
                  onHoverStart={() => setHoveredCard(info.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.color} opacity-0
                             transition-opacity duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={smoothTransition}
                  />

                  {/* Icon Container */}
                  <motion.div 
                    className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} 
                             text-white shadow-lg mb-4 group-hover:shadow-2xl`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{
                      rotate: {
                        duration: 0.5,
                        ease: "easeInOut",
                        repeat: 0
                      },
                      scale: springTransition
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      {info.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={smoothTransition}
                  >
                    <motion.h3 
                      className="text-lg font-semibold text-gray-800 mb-2"
                      initial={{ backgroundPosition: "0% 50%" }}
                      whileHover={{ backgroundPosition: "100% 50%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {info.label}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm mb-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={smoothTransition}
                    >
                      {info.value}
                    </motion.p>
                    <motion.p 
                      className="text-gray-500 text-xs"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={smoothTransition}
                    >
                      {info.description}
                    </motion.p>
                  </motion.div>

                  {/* Arrow Indicator */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={smoothTransition}
                  >
                    <FiArrowRight className="w-5 h-5 text-gray-400" />
                  </motion.div>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${info.color} rounded-b-xl`}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Location Card - Full Width */}
          {contactInfo.filter(info => info.id === 'location').map((info) => (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.01,
                transition: springTransition
              }}
              className="group col-span-full"
            >
              <div
                className="block bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                         transition-all duration-300 relative overflow-hidden
                         hover:shadow-xl hover:bg-white/80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${info.color} 
                                text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {info.value}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-4 text-gray-500">
                    <div className="text-right">
                      <p className="text-sm font-medium">Central Time (CT)</p>
                      <p className="text-xs">UTC-6</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Available for</p>
                      <p className="text-xs">Remote, On-site & Hybrid</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 
                           transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.03 }}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${info.color}`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;