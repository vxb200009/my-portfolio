import { motion, AnimatePresence, useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { Project } from '../pages/Projects';
import { FiX, FiExternalLink, FiCode, FiLayers, FiShield, FiGithub } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { getProjectByTitle } from '../data/projectContents';
import { useEffect } from 'react';

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const AnimatedPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full border-[1px] 
                   border-indigo-200/20 rounded-full"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[1px] 
                   border-purple-200/20 rounded-full"
      />
    </div>
  );
};

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full 
                   bg-gradient-to-br from-indigo-200/20 to-purple-200/20 blur-xl"
      />
      {/* Floating squares */}
      <motion.div
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-10 w-24 h-24 
                   border border-pink-200/30 blur-sm"
      />
      {/* Wavy lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 0 50 C 150 150 350 0 500 100"
          stroke="rgba(129, 140, 248, 0.1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 0 50 C 150 150 350 0 500 100",
              "M 0 80 C 150 0 350 150 500 50",
              "M 0 50 C 150 150 350 0 500 100",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

const ScrollShapes = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ rotate, scale }}
        className="absolute -right-20 top-20 w-40 h-40 
                   border-[2px] border-indigo-200/20 rounded-full"
      />
      <motion.div
        style={{ translateY }}
        className="absolute left-10 bottom-20 w-20 h-20 
                   bg-gradient-to-br from-purple-200/10 to-pink-200/10 blur-lg"
      />
    </div>
  );
};

const ProjectDetails = ({ project, isOpen, onClose }: ProjectDetailsProps) => {
  const projectData = getProjectByTitle(project.title);
  
  // Add effect to handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the background
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!projectData) return null;

  const sections = projectData.sections;

  const containerVariants = {
    hidden: { y: '100%' },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        staggerChildren: 0.2
      }
    },
    exit: { 
      y: '100%',
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 bottom-0 h-[90vh] bg-white/95 backdrop-blur-md z-50 
                     rounded-t-[2rem] shadow-xl border-t border-gray-100"
          >
            <div className="h-full overflow-y-auto scroll-smooth scrollbar-thin 
                          scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {/* Pull indicator */}
              <div className="flex justify-center pt-4">
                <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" />
              </div>

              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 px-8 py-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <HiOutlineSparkles className="w-8 h-8 text-indigo-600 animate-pulse" />
                    <motion.h2 
                      className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-6 flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-1">
                    <p className="text-md font-semibold text-gray-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl 
                               hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 
                               text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 
                               dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Source
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="px-2 py-6">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                  <div className="space-y-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 flex flex-col md:flex-row gap-6"
                    >
                      {/* Project Image/Placeholder */}
                      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-6">
                        {project.image && project.id!==5 ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">
                            <div 
                              className="absolute inset-0" 
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundSize: '30px 30px'
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-white text-3xl font-bold mb-4">
                                  {project.title}
                                </div>
                                <div className="flex flex-wrap justify-center gap-2">
                                  {project.tech.slice(0, 4).map((tech, index) => (
                                    <span
                                      key={index}
                                      className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Project Sections */}
                    <div className="space-y-16">
                      {sections.map((section, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="relative rounded-2xl p-8 hover:shadow-lg transition-all duration-500
                                   bg-white/80 backdrop-blur-sm border border-gray-200/50
                                   hover:border-indigo-200/50 overflow-hidden group"
                        >
                          <AnimatedPattern />
                          <AnimatedShapes />
                          <ScrollShapes />
                          
                          {/* Add a subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent 
                                          group-hover:opacity-50 transition-opacity duration-500" />
                          
                          <div className="flex items-center gap-4 mb-8">
                            <motion.div 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                            >
                              {section.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800">
                              {section.title}
                            </h3>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            {section.overview}
                          </p>

                          <div className="space-y-8">
                            {section.details.map((detail, detailIdx) => (
                              <motion.div
                                key={detailIdx}
                                whileHover={{ scale: 1.01 }}
                                className={`relative bg-gradient-to-br ${detail.color} p-6 rounded-xl 
                                           shadow-sm hover:shadow-md transition-all duration-300
                                           border border-white/50 backdrop-blur-[2px]`}
                              >
                                <div className="absolute inset-0 bg-white/40 rounded-xl" />
                                <div className="relative z-10">
                                  <h4 className="text-base font-semibold text-gray-700 mb-2">
                                    {detail.subtitle}
                                  </h4>
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                    {detail.text}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                      variants={itemVariants}
                      className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8
                                border border-gray-200/50 hover:border-indigo-200/50
                                transition-all duration-500 overflow-hidden mt-16"
                    >
                      <AnimatedPattern />
                      <div className="relative z-10">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                          <FiCode className="w-6 h-6" />
                          Tech Stack
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {project.tech.map((tech, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.02 }}
                              className={`relative bg-gradient-to-br ${
                                idx % 3 === 0 ? 'from-purple-100/80 to-indigo-100/80' :
                                idx % 3 === 1 ? 'from-indigo-100/80 to-blue-100/80' :
                                'from-blue-100/80 to-cyan-100/80'
                              } p-3 rounded-xl shadow-sm hover:shadow-md 
                              transition-all duration-300 border border-white/50 
                              backdrop-blur-[2px] group`}
                            >
                              <div className="absolute inset-0 bg-white/40 rounded-xl" />
                              <div className="relative z-10">
                                <span className="text-sm font-medium text-gray-700">
                                  {tech}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails; 