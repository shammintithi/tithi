import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { FiCpu, FiBarChart2 } from 'react-icons/fi';

const skills = [
  {
    name: "Python",
    icon: <FaPython size={28} className="text-secondary" />,
    level: 90,
    category: "programming"
  },
  {
    name: "Machine Learning",
    icon: <FiCpu size={28} className="text-secondary" />,
    level: 85,
    category: "ml-data"
  },
  {
    name: "Matplotlib / Seaborn",
    icon: <FiBarChart2 size={28} className="text-secondary" />,
    level: 80,
    category: "ml-data"
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={28} className="text-secondary" />,
    level: 90,
    category: "programming"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={28} className="text-secondary" />,
    level: 85,
    category: "programming"
  },
  {
    name: "JavaScript",
    icon: <FaJs size={28} className="text-secondary" />,
    level: 85,
    category: "programming"
  },
  {
    name: "React.js",
    icon: <FaReact size={28} className="text-secondary" />,
    level: 80,
    category: "programming"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-dark">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-1 bg-secondary mx-auto rounded-full"
          />
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl glass-panel border border-white/5 flex gap-5 items-center hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-4 bg-dark-accent/20 rounded-xl flex items-center justify-center min-w-[60px] h-[60px]">
                {skill.icon}
              </div>

              {/* Progress Detail */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-white tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-secondary font-semibold text-sm">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Track */}
                <div className="w-full h-2.5 bg-navy-darker rounded-full overflow-hidden border border-white/5">
                  {/* Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-secondary to-primary-light rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
