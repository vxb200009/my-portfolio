import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaServer,
  FaGitAlt,
  FaAws,
  FaPython,
  FaJava,
  FaHtml5,
  FaGithub,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiExpress,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiNextdotjs,
  SiRedux,
  SiSpringboot,
  SiFlask,
  SiOracle,
  SiMysql,
  SiApachekafka,
  SiRedis,
  SiGo,
  SiCplusplus,
  SiC,
  SiAngular,

} from 'react-icons/si';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Brand colors
const brandColors = {
  react: '#61DAFB',
  next: '#000000',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  redux: '#764ABC',
  tailwind: '#06B6D4',
  nodejs: '#339933',
  express: '#000000',
  python: '#3776AB',
  java: '#007396',
  mongodb: '#47A248',
  postgresql: '#4169E1',
  docker: '#2496ED',
  kubernetes: '#326CE5',
  terraform: '#7B42BC',
  aws: '#FF9900',
  git: '#F05032',
  jenkins: '#D24939',
  springboot: '#6DB33F',
  flask: '#000000',
  oracle: '#F80000',
  mysql: '#4479A1',
  kafka: '#231F20',
  redis: '#DC382D',
  golang: '#00ADD8',
  cpp: '#00599C',
  c: '#A8B9CC',
  html5: '#E34F26',
  spark: '#E25A1C',
  github: '#181717',
  angular: '#DD1B16'
};

// Define the type for a skill item
type SkillItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Define the type for skillsData
type SkillsData = {
  [key: string]: SkillItem[];
}

// Define skill categories
const skillsData: SkillsData = {
  languages: [
    { name: 'TypeScript', icon: <SiTypescript color={brandColors.typescript} />, color: brandColors.typescript },
    { name: 'JavaScript', icon: <SiJavascript color={brandColors.javascript} />, color: brandColors.javascript },
    { name: 'Python', icon: <FaPython color={brandColors.python} />, color: brandColors.python },
    { name: 'Java', icon: <FaJava color={brandColors.java} />, color: brandColors.java },
    { name: 'Go', icon: <SiGo color={brandColors.golang} />, color: brandColors.golang },
    { name: 'C++', icon: <SiCplusplus color={brandColors.cpp} />, color: brandColors.cpp },
    { name: 'C', icon: <SiC color={brandColors.c} />, color: brandColors.c },
  ],
  frontend: [
    { name: 'React', icon: <FaReact color={brandColors.react} />, color: brandColors.react },
    { name: 'Angular', icon: <SiAngular color={brandColors.angular} />, color: brandColors.angular },
    { name: 'Redux', icon: <SiRedux color={brandColors.redux} />, color: brandColors.redux },
    { name: 'Tailwind', icon: <SiTailwindcss color={brandColors.tailwind} />, color: brandColors.tailwind },
    { name: 'HTML', icon: <FaHtml5 color={brandColors.html5} />, color: brandColors.html5 },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs color={brandColors.nodejs} />, color: brandColors.nodejs },
    { name: 'Express', icon: <SiExpress color={brandColors.express} />, color: brandColors.express },
    { name: 'Spring Boot', icon: <SiSpringboot color={brandColors.springboot} />, color: brandColors.springboot },
    { name: 'Flask', icon: <SiFlask color={brandColors.flask} />, color: brandColors.flask },
  ],
  databases: [
    { name: 'MongoDB', icon: <SiMongodb color={brandColors.mongodb} />, color: brandColors.mongodb },
    { name: 'PostgreSQL', icon: <SiPostgresql color={brandColors.postgresql} />, color: brandColors.postgresql },
    { name: 'MySQL', icon: <SiMysql color={brandColors.mysql} />, color: brandColors.mysql },
    { name: 'Cassandra', icon: <FaDatabase color={brandColors.postgresql} />, color: brandColors.postgresql },
  ],
  devops: [
    { name: 'Docker', icon: <FaDocker color={brandColors.docker} />, color: brandColors.docker },
    { name: 'Kubernetes', icon: <SiKubernetes color={brandColors.kubernetes} />, color: brandColors.kubernetes },
    { name: 'AWS', icon: <FaAws color={brandColors.aws} />, color: brandColors.aws },
    { name: 'Git', icon: <FaGitAlt color={brandColors.git} />, color: brandColors.git },
    { name: 'GitHub', icon: <FaGithub color={brandColors.github} />, color: brandColors.github },
    { name: 'Jenkins', icon: <SiJenkins color={brandColors.jenkins} />, color: brandColors.jenkins },
    { name: 'Terraform', icon: <SiTerraform color={brandColors.terraform} />, color: brandColors.terraform },
  ],
  messaging: [
    { name: 'Kafka', icon: <SiApachekafka color={brandColors.kafka} />, color: brandColors.kafka },
    { name: 'Redis', icon: <SiRedis color={brandColors.redis} />, color: brandColors.redis },
    { name: 'EMS', icon: <FaServer color={brandColors.express} />, color: brandColors.express },
  ],
};

const AnimatedLetter = ({ children }: { children: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

const SkillCategory = ({ title, skills, delay = 0 }: { title: string, skills: SkillItem[], delay: number }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
    >
      {/* Category Header */}
      <div className="relative h-1/4 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        <div className="relative h-full flex items-center justify-center p-6">
          <h3 className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight hover:scale-105 transition-transform duration-300">{title}</h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      </div>

      {/* Skills Grid */}
      <div className="relative p-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 pb-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl transition-transform"
              >
                {skill.icon}
              </motion.div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Info Footer */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-gray-50 to-transparent">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{skills.length} Technologies</span>
          <span className="text-indigo-500 font-medium">{title}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 3;
  const categories = Object.keys(skillsData);
  const totalPages = Math.ceil(categories.length / skillsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCategories = categories.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 py-16 sm:py-20 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Hexagonal Pattern */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] border-[3px] 
                   border-indigo-500/70 bg-gradient-to-br from-indigo-400/40 to-transparent"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          }}
        />
        {/* Triangular Pattern */}
        <motion.div
          animate={{ 
            rotate: [-360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.8, 0.8, 0.8]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] border-[3px] 
                   border-purple-500/70 bg-gradient-to-tr from-purple-400/40 to-transparent"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
          }}
        />
        {/* Diamond Pattern */}
        <motion.div
          animate={{ 
            rotate: [180, -180],
            scale: [0.8, 1, 0.8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[400px] h-[400px] border-[3px] border-pink-500/70 
                   bg-gradient-to-br from-pink-400/40 to-transparent"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
        />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative"
      >
        {/* Animated Geometric Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.7, 0.7]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 border-[1px] border-indigo-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.5, 0.5]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
          className="absolute w-[500px] h-[500px] border-[1px] border-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: 360,
            opacity: [0.6, 0.6, 0.6]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] border-[1px] border-indigo-400/10 rounded-full"
            />
          </div>

        {/* Main Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-400 text-transparent bg-clip-text">
            {"Technical Expertise".split('').map((letter, index) => (
              <AnimatedLetter key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </AnimatedLetter>
            ))}
          </h2>
          
          {/* Animated Code Line */}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-indigo-400 font-mono"
            >
              &lt;
            </motion.span>
            <span className="text-indigo-300 font-light tracking-wide">
              Full Stack Development & DevOps
            </span>
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-indigo-400 font-mono"
            >
              /&gt;
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Categories Grid */}
      <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentCategories.map((category, index) => (
            <SkillCategory 
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)} 
              skills={skillsData[category]}
              delay={index * 0.2}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              onClick={prevPage}
              className="p-2 rounded-full hover:bg-white/60 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-indigo-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            <motion.button
              onClick={nextPage}
              className="p-2 rounded-full hover:bg-white/60 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        )}
      </>
    </div>
  </div>
)
}

export default Skills;