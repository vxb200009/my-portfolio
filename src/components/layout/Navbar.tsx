import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Logo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-10 h-10"
    >
      <Link to="/" className="block">
        <motion.svg
          viewBox="0 0 50 50"
          className="w-full h-full"
          initial="hidden"
          animate="visible"
        >
          {/* Hexagon Background */}
          <motion.path
            d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z"
            className="fill-indigo-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* V Letter */}
          <motion.path
            d="M15 15 L25 35 L35 15"
            className="stroke-indigo-400"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={pathVariants}
          />
          
          {/* Decorative Lines */}
          <motion.path
            d="M10 25 L15 25 M35 25 L40 25"
            className="stroke-indigo-200"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.svg>
      </Link>
    </motion.div>
  )
}

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span className={`text-gray-600 hover:text-indigo-400 transition-colors ${
                  location.pathname === item.path ? 'text-indigo-400' : ''
                }`}>
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-indigo-400 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600 hover:text-indigo-400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar 