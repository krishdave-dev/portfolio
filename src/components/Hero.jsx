import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-orbitron"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className="text-black dark:text-white">Hi, I'm </span>
  <span className="text-yellow-500 dark:text-white">Krish Dave</span>
</motion.h1>

            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & Designer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create beautiful and functional web applications with modern technologies.
              Currently pursuing B.Tech in Information Technology at G H Patel College of Engineering & Technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(234, 179, 8, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-all duration-300 neon-button"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(234, 179, 8, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 dark:text-yellow-400 rounded-lg font-medium hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500/20 transition-all duration-300 neon-button-outline"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full filter blur-xl animate-pulse"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-500/20 dark:border-yellow-500/30">
                {/* Replace the src with your image path */}
                <img
                  src=".\src\assets\me.jpeg"
                  alt="Krish Dave"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        

      </div>
    </section>
  )
}

export default Hero 