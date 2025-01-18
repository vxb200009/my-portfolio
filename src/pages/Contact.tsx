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
      icon: <FiMail className="w-6 sm:w-8 h-6 sm:h-8" />,
      label: 'Email',
      value: 'venkatbommali2024@gmail.com',
      link: 'mailto:venkatbommali2024@gmail.com',
      color: 'from-violet-500 to-purple-500',
      description: 'Drop me a line anytime! I typically respond within 24 hours.',
      hoverText: 'Send an email'
    },
    {
      id: 'linkedin',
      icon: <FiLinkedin className="w-6 sm:w-8 h-6 sm:h-8" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkat-bommali',
      link: 'https://linkedin.com/in/venkat-bommali',
      color: 'from-blue-500 to-indigo-500',
      description: 'Let\'s connect professionally and grow our network.',
      hoverText: 'Connect on LinkedIn'
    },
    {
      id: 'location',
      icon: <FiMapPin className="w-6 sm:w-8 h-6 sm:h-8" />,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating circles */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border-[2px] 
                   border-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[2px]
                   border-purple-400/20 rounded-full"
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-[20%] w-16 h-16 border-[2px] border-indigo-400/20"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-[40%] right-[15%] w-12 h-12 border-[2px] border-purple-400/20"
          style={{
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-[30%] left-[15%] w-14 h-14 border-[2px] border-pink-400/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-indigo-400/20"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-300/20 rounded-full filter blur-3xl" />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              <div className={`
                ${i % 3 === 0 ? 'w-8 sm:w-12 h-8 sm:h-12 border-2 border-indigo-200/30 rotate-45' : 
                  i % 3 === 1 ? 'w-8 sm:w-12 h-8 sm:h-12 border-2 border-purple-200/30 rounded-full' :
                  'w-8 sm:w-12 h-8 sm:h-12 border-2 border-pink-200/30'} 
                transform backdrop-blur-sm
              `} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 p-4 sm:p-8 pt-16 sm:pt-8">
        {/* Left Side - Greeting */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left mt-8 sm:mt-0"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 
                         to-pink-500 bg-clip-text text-transparent">
              {techGreetings[greetingIndex].text}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {techGreetings[greetingIndex].subtext}
            </p>
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer crafting digital experiences with a passion for clean code and innovative solutions.
          </motion.p>

          <motion.button
            onClick={downloadResume}
            className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r 
                     from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg 
                     hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Right Side - Contact Cards */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {contactInfo.filter(info => info.id !== 'location').map((info, index) => (
              <motion.a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg 
                         hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${info.color} 
                             text-white shadow-lg mb-3 sm:mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                  {info.label}
                </h3>
                <p className="text-sm text-gray-600 mb-1 sm:mb-2">
                  {info.value}
                </p>
                <p className="text-xs text-gray-500">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location Card */}
          {contactInfo.filter(info => info.id === 'location').map((info) => (
            <motion.div
              key={info.id}
              className="block bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg 
                       hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {info.value}
                    </h3>
                    <p className="text-sm text-gray-500">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;