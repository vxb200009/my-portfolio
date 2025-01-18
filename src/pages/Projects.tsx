import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProjectDetails from '../components/ProjectDetails'
import { projectsData } from '../data/projectContents';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-gray-100/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full border-[2px] border-indigo-400/20 rounded-full"
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
            className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[2px] border-pink-400/20 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="relative max-w-7xl mx-auto text-center mt-8 sm:mt-0 mb-12 sm:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Featured Projects
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4"
            />
          </div>

          {/* Projects Carousel */}
          <div className="relative px-4 sm:px-8 md:px-12">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-2 sm:-left-8 md:-left-12 transform -translate-y-1/2 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevPage}
                className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl
                         text-gray-800 hover:text-indigo-600 transition-all"
              >
                <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-8 md:-right-12 transform -translate-y-1/2 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextPage}
                className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl
                         text-gray-800 hover:text-indigo-600 transition-all"
              >
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            {/* Projects Grid */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -1000, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                  {projectsData
                    .slice(
                      currentPage * projectsPerPage,
                      (currentPage + 1) * projectsPerPage
                    )
                    .map((project, index) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index} 
                      />
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-1.5 sm:gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-indigo-600 w-4 sm:w-6'
                      : 'bg-gray-300 hover:bg-indigo-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        className="relative"
      >
        <motion.div
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
          className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 
                   bg-white backdrop-blur-sm"
        >
          {/* Project Image */}
          <div className="relative h-2/5 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover p-4 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative p-4 sm:p-5 md:p-6 h-3/5 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-4 text-sm flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-medium bg-indigo-50 
                         text-indigo-600 rounded-full border border-indigo-100/50"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 text-xs text-gray-500">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>

            {/* View Details Button */}
            <motion.button
              onClick={() => setIsDetailsOpen(true)}
              whileTap={{ scale: 0.98 }}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white rounded-xl font-medium shadow-md text-sm"
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <ProjectDetails 
        project={project}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </>
  );
};

export default Projects;