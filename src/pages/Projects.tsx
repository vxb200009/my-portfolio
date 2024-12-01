import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
    image: "/path-to-image1.jpg", // Update with your image path
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://project-one.com"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Creative Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-blue-500/30"
            />
          </motion.h2>
          
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -right-8 -top-8 text-blue-500/20"
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
        >
          A collection of my recent work and personal projects
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative h-[400px] rounded-2xl overflow-hidden"
    >
      {/* Full-size image background */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay and content at bottom */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-20 pb-6 px-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          href={project.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          View Project
          <svg
            className="ml-2 w-5 h-5"
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
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects; 