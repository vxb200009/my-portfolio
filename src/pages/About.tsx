import { motion } from 'framer-motion';
import { FiBook, FiBriefcase, FiAward, FiArrowRight, FiCheckCircle, FiZap, FiStar } from 'react-icons/fi';
import { SiMongodb } from 'react-icons/si';
import Certification1 from '../assets/certifications/Certification1.png'

interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
}

interface Certification {
  title: string;
  organization: string;
  credentials: string;
  icon: React.ReactNode;
  image: string;
}

const educationData: Education[] = [
  {
    school: "The University of Texas at Dallas",
    degree: "Master's in Computer Science",
    period: "2021 – 2023",
    gpa: "3.5/4"
  },
  {
    school: "CMR College of Engineering & Technology",
    degree: "Bachelor's in Computer Science",
    period: "2016 – 2020",
    gpa: "3.7/4"
  }
];

const experienceData: Experience[] = [
  {
    role: "Founding Engineer",
    company: "MetaJungle",
    location: "USA",
    period: "May 2024 - Present"
  },
  {
    role: "Full Stack Developer",
    company: "Hartford Financial Services",
    location: "USA",
    period: "August 2023 - May 2024"
  },
  {
    role: "Associate Software Engineer",
    company: "Virtusa Corporation",
    location: "India",
    period: "May 2019 - August 2021"
  }
];

const certificationData: Certification[] = [
  {
    title: "MongoDB Certified Associate Developer",
    organization: "MongoDB",
    credentials: "MDBh6mcjl9",
    icon: <SiMongodb className="w-6 sm:w-8 h-6 sm:h-8" />,
    image: Certification1 // Add your certification image path
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-gray-100/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-1/2 -right-1/2 w-full h-full border-[2px] 
                     border-indigo-400/20 rounded-full"
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
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[2px] 
                     border-pink-400/20 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 relative">
        {/* Header with 3D effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center transform-gpu mt-8 sm:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 
                         to-pink-500 text-transparent bg-clip-text transform perspective-1000">
              About Me
            </h1>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4"
          />
        </motion.div>

        {/* Education Section with Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <FiBook className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Education</h2>
          </div>
          
          <div className="relative grid gap-4 sm:gap-8 md:grid-cols-2">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 
                         to-purple-500/20 hidden md:block" />
            
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-8 sm:md:pr-12' : 'md:pl-8 sm:md:pl-12'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all
                           border border-gray-100 group backdrop-blur-sm"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-1/2 hidden md:block w-4 h-4 rounded-full bg-indigo-500
                                ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
                               rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{edu.school}</h3>
                    <p className="text-sm sm:text-base text-indigo-600 font-semibold mb-1 sm:mb-2">{edu.degree}</p>
                    <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm">
                      <span>{edu.period}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section with Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <FiBriefcase className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Experience</h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl 
                           transition-all border border-gray-100 relative group backdrop-blur-sm
                           ${index === 0 ? 'border-purple-500/50 bg-gradient-to-br from-purple-50 to-white' : 'border-gray-100'}`}
                >
                  {/* Latest Experience Badge */}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -15 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: 0,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [-15, -10, -15],
                        transition: {
                          rotate: {
                            duration: 1,
                            repeat: Infinity,
                          }
                        }
                      }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 
                               text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg
                               border border-white/50 backdrop-blur-sm"
                    >
                      <span className="inline-block">Current</span>
                    </motion.div>
                  )}

                  {/* Animated Decorative Elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: index === 0 ? 15 : 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full
                             ${index === 0 ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' : 
                                           'bg-gradient-to-br from-purple-500/5 to-pink-500/5'}`}
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: index === 0 ? 20 : 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute bottom-0 left-0 w-16 h-16 rounded-tr-full
                             ${index === 0 ? 'bg-gradient-to-tr from-indigo-500/10 to-purple-500/10' :
                                           'bg-gradient-to-tr from-indigo-500/5 to-purple-500/5'}`}
                  />
                  
                  {/* Floating Icons - More prominent for latest experience */}
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      opacity: index === 0 ? [0.7, 1, 0.7] : [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: index === 0 ? 2 : 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <FiStar className={`w-4 h-4 ${index === 0 ? 'text-purple-500' : 'text-purple-400'}`} />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [5, -5, 5],
                      opacity: index === 0 ? [0.7, 1, 0.7] : [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: index === 0 ? 3 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute -bottom-2 -left-2"
                  >
                    <FiZap className={`w-4 h-4 ${index === 0 ? 'text-pink-500' : 'text-pink-400'}`} />
                  </motion.div>
                  
                  <div className="relative">
                    {/* Animated Progress Line - Brighter for latest experience */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`h-0.5 mb-4 ${index === 0 ? 
                        'bg-gradient-to-r from-purple-500 to-transparent' : 
                        'bg-gradient-to-r from-purple-500/50 to-transparent'}`}
                    />
                    
                    {/* Card Content with Enhanced Hover Effects for Latest */}
                    <motion.h3 
                      whileHover={{ scale: 1.02 }}
                      className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300
                              ${index === 0 ? 'text-purple-700' : 'text-gray-800'}
                              ${index === 0 ? 'group-hover:text-purple-800' : 'group-hover:text-purple-600'}`}
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="space-y-2 mb-4">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: index === 0 ? 2 : 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <FiAward className={`w-4 h-4 ${index === 0 ? 'text-purple-600' : 'text-purple-500'}`} />
                        </motion.div>
                        <span className={`font-semibold ${index === 0 ? 'text-purple-700' : 'text-purple-600'}`}>
                          {exp.company}
                        </span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <FiArrowRight className={`w-4 h-4 ${index === 0 ? 'text-gray-500' : 'text-gray-400'}`} />
                        <span className={`${index === 0 ? 'text-gray-700' : 'text-gray-600'}`}>
                          {exp.location}
                        </span>
                      </motion.div>
                    </div>
                    <motion.p 
                      whileHover={{ scale: 1.02 }}
                      className={`text-sm ${index === 0 ? 'text-gray-700 font-medium' : 'text-gray-600'}`}
                    >
                      {exp.period}
                    </motion.p>

                    {/* Animated Border on Hover - Enhanced for latest */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 rounded-2xl border-2 pointer-events-none
                              ${index === 0 ? 'border-purple-500/30' : 'border-purple-500/20'}`}
                      style={{
                        clipPath: "inset(0 0 0 0 round 1rem)",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <FiCheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Certifications</h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {certificationData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all
                           border border-gray-100 overflow-hidden group"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                               from-green-500/5 to-emerald-500/5 rounded-bl-full" />
                  
                  <div className="relative flex gap-6">
                    {/* Certificate Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-16 h-16 flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-md 
                                 border border-gray-100/50"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain p-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      <div className="absolute bottom-1 left-1">
                        {cert.icon}
                      </div>
                    </motion.div>

                    {/* Certificate Details */}
                    <div className="flex-1 ml-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-0.5 bg-gradient-to-r from-green-500/50 to-transparent mb-4"
                      />
                      
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                        {cert.title}
                      </h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <FiAward className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-600 font-semibold text-sm">
                            {cert.organization}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiArrowRight className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-gray-600 text-xs">
                            Credentials: {cert.credentials}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 
                             opacity-0 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 