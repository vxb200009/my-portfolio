import { motion } from 'framer-motion'
import SocialLinks from '../common/SocialLinks'

const Footer = () => {
  return (<motion.footer
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
className="bg-white border-t border-gray-100"
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Brand Section */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Venkat</h3>
      <p className="text-gray-600">
        Building digital experiences with passion and precision.
      </p>
    </div>

    {/* Quick Links */}
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Quick Links</h4>
      <div className="space-y-2">
        <a href="/projects" className="block text-gray-600 hover:text-indigo-400 transition-colors">Projects</a>
        <a href="/about" className="block text-gray-600 hover:text-indigo-400 transition-colors">About</a>
        <a href="/contact" className="block text-gray-600 hover:text-indigo-400 transition-colors">Contact</a>
      </div>
    </div>

    {/* Connect Section */}
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Connect</h4>
      <SocialLinks className="text-gray-600 hover:text-indigo-400 transition-colors" />
      <p className="text-gray-600">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
    </div>
  </div>

  <div className="mt-12 pt-8 border-t border-gray-100">
    <p className="text-center text-gray-600">
      © {new Date().getFullYear()} Venkat. All rights reserved.
    </p>
  </div>
</div>
</motion.footer>
)
}

export default Footer