import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Crown } from 'lucide-react';

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Icon className="text-yellow-500 w-6 h-6" />
    <h3 className="text-2xl font-semibold text-yellow-500">{title}</h3>
  </div>
);

const Card = ({ title, subtitle, date, points }) => (
  <motion.div
    className="relative group perspective-1000"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="border-l-4 border-yellow-500 bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm mb-6 transform-gpu transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/20"
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
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        style={{
          transform: 'translateZ(-1px)',
        }}
      />
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white relative z-10">{title}</h4>
      {subtitle && <p className="text-gray-600 dark:text-gray-300 relative z-10">{subtitle}</p>}
      {date && <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 relative z-10">{date}</p>}
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mt-2 relative z-10">
        {points.map((point, idx) => (
          <motion.li 
            key={idx}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 font-orbitron text-yellow-500 dark:text-white">
            About Me
          </h2>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionHeader icon={GraduationCap} title="Education" />
            <Card
              title="G H Patel College of Engineering & Technology"
              subtitle="Bachelor of Technology in Information Technology"
              date="Expected May 2026"
              points={[]}
            />
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionHeader icon={Briefcase} title="Experience" />
            <Card
              title="Participant – Ingenium Hackathon, Ahmedabad University"
              date="Mar 2025"
              points={[
                "Developed a stock prediction platform using the MERN stack",
                "Integrated AI model for real-time investment insights",
                "Ensured seamless frontend-backend integration"
              ]}
            />
            <Card
              title="FootPrints'25 MSU x ODOO"
              date="Mar 2025"
              points={[
                "Built mental health app with 98% feature completion in 12 hours",
                "Used Flutter & Supabase with AI-powered mood analysis",
                "Focused on accessible and intuitive UX design"
              ]}
            />
            <Card
              title="Freelance Graphic Designer"
              date="2023 – Present"
              points={[
                "Delivered 20+ high-quality client designs",
                "Specialized in branding, promos & social media content"
              ]}
            />
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeader icon={Crown} title="Leadership" />
            <Card
              title="Vice President, CSI-GCET"
              date="Feb 2025 – Present"
              points={[
                "Increased workshop participation by 40%",
                "Managed events with 500+ participants",
                "Led highest CSI membership drive for 2025–26"
              ]}
            />
            <Card
              title="Literature Club Coordinator, GCET"
              date="Jan 2024 – Present"
              points={[
                "Anchored and managed 5+ literary/cultural events",
                "Oversaw planning and stage hosting",
                "Promoted team collaboration and creativity"
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
