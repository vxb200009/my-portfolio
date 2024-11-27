import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

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