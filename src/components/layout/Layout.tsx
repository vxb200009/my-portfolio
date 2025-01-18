import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../common/ScrollToTop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout