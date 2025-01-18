import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaServer,
  FaGitAlt,
  FaAws,
  FaPython,
  FaJava
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
  SiRedux
} from 'react-icons/si';

// Add these brand colors at the top of your file
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
  aws: '#FF9900',
  git: '#F05032',
  jenkins: '#D24939',
  terraform: '#7B42BC'
};

// Skills data structure
const skillsData = {
  frontend: [
    { name: 'React', icon: <FaReact color={brandColors.react} />, color: brandColors.react },
    { name: 'Next.js', icon: <SiNextdotjs color={brandColors.next} />, color: brandColors.next },
    { name: 'TypeScript', icon: <SiTypescript color={brandColors.typescript} />, color: brandColors.typescript },
    { name: 'JavaScript', icon: <SiJavascript color={brandColors.javascript} />, color: brandColors.javascript },
    { name: 'Redux', icon: <SiRedux color={brandColors.redux} />, color: brandColors.redux },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color={brandColors.tailwind} />, color: brandColors.tailwind },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs color={brandColors.nodejs} />, color: brandColors.nodejs },
    { name: 'Express', icon: <SiExpress color={brandColors.express} />, color: brandColors.express },
    { name: 'Python', icon: <FaPython color={brandColors.python} />, color: brandColors.python },
    { name: 'Java', icon: <FaJava color={brandColors.java} />, color: brandColors.java },
    { name: 'MongoDB', icon: <SiMongodb color={brandColors.mongodb} />, color: brandColors.mongodb },
    { name: 'PostgreSQL', icon: <SiPostgresql color={brandColors.postgresql} />, color: brandColors.postgresql },
  ],
  devops: [
    { name: 'Docker', icon: <FaDocker color={brandColors.docker} />, color: brandColors.docker },
    { name: 'Kubernetes', icon: <SiKubernetes color={brandColors.kubernetes} />, color: brandColors.kubernetes },
    { name: 'AWS', icon: <FaAws color={brandColors.aws} />, color: brandColors.aws },
    { name: 'Git', icon: <FaGitAlt color={brandColors.git} />, color: brandColors.git },
    { name: 'Jenkins', icon: <SiJenkins color={brandColors.jenkins} />, color: brandColors.jenkins },
    { name: 'Terraform', icon: <SiTerraform color={brandColors.terraform} />, color: brandColors.terraform },
  ],
};

const AnimatedLetter = ({ children }: { children: string }) => (
    <motion.span
      className="inline-block"
      whileHover={{ 
        scale: 1.2, 
        color: '#818cf8',
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.span>
  );
  
  const SkillCategory = ({ title, skills, delay = 0 }: { title: string, skills: { name: string, icon: React.ReactNode }[], delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-6 sm:p-8 rounded-2xl border border-indigo-400/20 bg-gray-50/30 overflow-hidden group flex-1"
    >
      {/* Enhanced Pattern Designs with increased opacity */}
      <div className="absolute inset-0 opacity-[0.25]">
        {title === 'Frontend' && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute"
                style={{
                  right: `${Math.random() * 30}%`,
                  top: `${Math.random() * 20}%`,
                  width: '30px',
                  height: '30px',
                  background: `
                    linear-gradient(45deg, 
                      ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.8)' : 'rgba(129, 140, 248, 0.8)'} 25%, 
                      transparent 25%, 
                      transparent 75%, 
                      ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.8)' : 'rgba(129, 140, 248, 0.8)'} 75%
                    )
                  `,
                  boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.4)' : 'rgba(129, 140, 248, 0.4)'}`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
        {title === 'Backend' && (
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute"
                style={{
                  ...(i < 5 
                    ? { right: `${Math.random() * 30}%`, top: `${Math.random() * 20}%` }
                    : { left: `${Math.random() * 30}%`, bottom: `${Math.random() * 20}%` }
                  ),
                  width: '40px',
                  height: '40px',
                  borderLeft: `3px solid ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.6)' : 'rgba(129, 140, 248, 0.6)'}`,
                  borderBottom: `3px solid ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.6)' : 'rgba(129, 140, 248, 0.6)'}`,
                  boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.3)' : 'rgba(129, 140, 248, 0.3)'}`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
        {title === 'DevOps' && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute"
                style={{
                  ...(i < 4 
                    ? { right: `${Math.random() * 30}%`, top: `${Math.random() * 20}%` }
                    : { left: `${Math.random() * 30}%`, bottom: `${Math.random() * 20}%` }
                  ),
                  width: '35px',
                  height: '35px',
                  border: `3px solid ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.6)' : 'rgba(129, 140, 248, 0.6)'}`,
                  borderRadius: i % 2 === 0 ? '50%' : '0',
                  boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(244, 114, 182, 0.3)' : 'rgba(129, 140, 248, 0.3)'}`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
      </div>
  
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/10 via-indigo-50/10 to-transparent"></div>
  
      {/* Category Title */}
      <motion.h3 
        className="text-2xl font-bold text-indigo-400 mb-8 flex items-center gap-3 relative z-10"
        whileHover={{ x: 10 }}
      >
        {title}
      </motion.h3>
  
      {/* Skills Grid with reduced box opacity */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill:any, index:any) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="p-4 rounded-xl bg-white/10 hover:bg-white/20 
                       transition-all duration-300 flex flex-col items-center gap-3
                       backdrop-blur-sm group border border-gray-200/10
                       shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                       hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
          >
            <motion.div
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
              className="text-3xl"
              style={{
                filter: `drop-shadow(0 0 3px ${skill.color}80)`
              }}
            >
              {skill.icon}
            </motion.div>
            <span 
              className="text-sm font-medium transition-colors duration-300"
              style={{ 
                color: skill.color,
                textShadow: `0 0 6px ${skill.color}40`,
                filter: 'contrast(1.05)'
              }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
  
  const Skills = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Modern Animated Header */}
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
                opacity: [0.1, 0.2, 0.1]
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
                opacity: [0.15, 0.05, 0.15]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[500px] h-[500px] border-[1px] border-indigo-400/20 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: 360,
                opacity: [0.1, 0.2, 0.1]
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
  
        {/* Skills Categories */}
        <div className="flex flex-col lg:flex-row gap-8">
          <SkillCategory title="Frontend" skills={skillsData.frontend} delay={0.2} />
          <SkillCategory title="Backend" skills={skillsData.backend} delay={0.4} />
          <SkillCategory title="DevOps" skills={skillsData.devops} delay={0.6} />
        </div>
      </div>
    );
  };
  
  export default Skills;