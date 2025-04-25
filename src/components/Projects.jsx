import { motion } from 'framer-motion';
import StudySphere from '../assets/StudySphere.jpeg';
import MindHaven from '../assets/MindHaven.jpeg';
import Zelbi from '../assets/Zelbi.jpeg';
const Projects = ({ onMouseEnter, onMouseLeave }) => {
  const projects = [
    {
      title: 'StudySphere – EdTech Platform',
      description: 'MERN-based EdTech platform with video lectures, course browsing, and user authentication.',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: StudySphere,
    },
    {
      title: 'MindHaven – Mental Health Support App',
      description: 'Flutter app for mental health assessment and mood tracking with AI-powered insights.',
      link: '#',
      technologies: ['Flutter', 'Supabase', 'AI/ML'],
      image: MindHaven,
    },
    {
      title: 'Zelbi – Stock Prediction Website',
      description: 'Stock prediction website using MERN stack and machine learning models for accurate forecasts.',
      link: '#',
      technologies: ['React', 'Node.js', 'Python', 'ML'],
      image: Zelbi,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-cream-50 to-yellow-100 dark:from-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center font-orbitron text-navy-900 dark:text-gray-100">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group perspective-1000"
              >
                <motion.div
                  className="relative bg-cream-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm border border-gradient transform-gpu transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-amber-500/20"
                  whileHover={{
                    rotateY: 5,
                    rotateX: -2,
                    translateZ: 20,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: 'translateZ(-1px)',
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="relative h-48 overflow-hidden rounded-t-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-semibold mb-2 text-navy-900 dark:text-gray-100"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-navy-700 dark:text-gray-300 mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-gray-700 dark:to-gray-600 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-500/30 shadow-sm hover:shadow-md transition-all duration-300"
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 4px 12px rgba(234, 179, 8, 0.2)",
                              borderColor: "rgb(234, 179, 8)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 dark:hover:from-amber-300 dark:hover:to-amber-400 transition-all duration-300"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;