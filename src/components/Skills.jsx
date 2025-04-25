import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaJava,
  FaJsSquare,
  FaCuttlefish,
  FaPaintBrush,
  FaMobileAlt,
  FaMicrochip,
  FaLaptopCode,
  FaBrain,
  FaUsers,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiDart, SiSupabase, SiAdobe, SiFramer } from 'react-icons/si';

const iconMap = {
  'Modern HTML5/CSS3': <FaHtml5 className="text-orange-500" />, // grouped
  'React.js': <FaReact className="text-cyan-400" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'MongoDB': <SiMongodb className="text-green-700" />,
  'Express': <SiExpress className="text-gray-600" />,
  'Flutter/Dart': <SiFlutter className="text-blue-400" />,
  'Supabase': <SiSupabase className="text-green-600" />,
  'REST API Integration': <FaLaptopCode className="text-blue-500" />,
  'Java': <FaJava className="text-red-500" />,
  'Python': <FaPython className="text-yellow-400" />,
  'JavaScript (ES6+)': <FaJsSquare className="text-yellow-300" />,
  'C++': <FaCuttlefish className="text-blue-800" />,
  'Supervised Learning': <FaBrain className="text-purple-500" />,
  'Data Preprocessing': <FaMicrochip className="text-purple-600" />,
  'Feature Engineering': <FaMicrochip className="text-purple-400" />,
  'Git': <FaGitAlt className="text-red-500" />,
  'Adobe Creative Suite': <SiAdobe className="text-pink-500" />,
  'UI/UX Design': <FaPaintBrush className="text-teal-500" />,
  'Agile Development': <FaUsers className="text-indigo-500" />,
  'Graphics Designing': <FaPaintBrush className="text-teal-400" />,
  'Leadership': <FaUsers className="text-yellow-600" />,
  'Event Anchoring': <FaMicrochip className="text-gray-500" />,
};

const Skills = () => {
  const skills = [
    {
      category: 'Web Development',
      items: ['Modern HTML5/CSS3', 'React.js', 'Node.js', 'MongoDB', 'Express']
    },
    {
      category: 'Mobile Development',
      items: ['Flutter/Dart', 'Supabase', 'REST API Integration']
    },
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript (ES6+)', 'C++']
    },
    {
      category: 'Machine Learning',
      items: ['Supervised Learning', 'Data Preprocessing', 'Feature Engineering']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Adobe Creative Suite', 'UI/UX Design', 'Agile Development']
    },
    {
      category: 'Interests',
      items: ['Graphics Designing', 'Leadership', 'Event Anchoring']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white font-orbitron"
        >
          Skills & Interests
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-yellow-400 pb-2">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <span className="text-xl">{iconMap[item]}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;