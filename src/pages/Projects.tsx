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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
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
      className="group relative h-[400px] perspective-1000"
    >
      <div className="relative h-full rounded-2xl overflow-hidden transform-style-3d transition-all duration-500 group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm bg-white/10 text-white rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="h-full flex flex-col items-center justify-center p-6 text-white">
            <p className="text-center mb-6 text-lg">{project.description}</p>
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/button relative"
            >
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200 animate-gradient-xy"></div>
              
              {/* Button Content */}
              <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
                <span className="text-gray-100 group-hover/button:text-white transition duration-200">
                  Explore Project
                </span>
                <svg
                  className="ml-2 w-5 h-5 transform group-hover/button:translate-x-1 transition-transform"
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
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 