import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Logo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-14 h-12"
    >
      <Link to="/" className="block">
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
            variants={pathVariants}
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
            variants={pathVariants}
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
            variants={pathVariants}
          />
        </motion.svg>
      </Link>
    </motion.div>
  )
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                }`}
              >
                {label}
                {isActive(path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg' : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                isActive(path)
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;