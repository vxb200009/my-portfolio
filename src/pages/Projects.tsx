import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one and its key features.",
    image: "/path-to-image1.jpg",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://project-one.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "An innovative solution with cutting-edge technologies.",
    image: "/path-to-image2.jpg",
    tech: ["Next.js", "GraphQL", "Node.js"],
    link: "https://project-two.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A scalable and performant application for enterprise needs.",
    image: "/path-to-image3.jpg",
    tech: ["React", "AWS", "MongoDB"],
    link: "https://project-three.com"
  },
  {
    id: 4,
    title: "Project Four",
    description: "Modern e-commerce solution with advanced features.",
    image: "/path-to-image4.jpg",
    tech: ["Vue.js", "Firebase", "Stripe"],
    link: "https://project-four.com"
  },
  {
    id: 5,
    title: "Project Five",
    description: "Real-time collaboration platform for remote teams.",
    image: "/path-to-image5.jpg",
    tech: ["Socket.io", "Redis", "Express"],
    link: "https://project-five.com"
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-gray-100/30">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
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
          {/* Title Section remains the same */}
{/* Section Title */}
<div className="relative max-w-7xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
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
        {/* Projects Grid */}
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevPage}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl
                         text-gray-800 hover:text-indigo-600 transition-all"
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextPage}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl
                         text-gray-800 hover:text-indigo-600 transition-all"
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Projects Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -1000, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects
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
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-indigo-600 w-6'
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
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="group relative"
    >
      <motion.div
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100
        }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100"
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                      group-hover:bg-white/20 transition-all duration-300" />

        {/* Project Image */}
        <div className="relative h-1/2 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-2"
            whileHover={{ x: 10 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-sm bg-indigo-100/50 text-indigo-600 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Link Button */}
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            View Project
            <motion.svg
              className="ml-2 w-5 h-5"
              whileHover={{ x: 5 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.a>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                     border-2 border-transparent group-hover:border-indigo-500/20
                     transition-all duration-300"
          whileHover={{
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects; 