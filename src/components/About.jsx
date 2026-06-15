import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiTrendingUp, FiLayout } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const specialties = [
  {
    icon: <FiCpu className="text-secondary" size={24} />,
    title: "Machine Learning",
    description: "Developing predictive frameworks, classification models, and integrating Explainable AI concepts for transparency."
  },
  {
    icon: <FiTrendingUp className="text-secondary" size={24} />,
    title: "Data Analysis",
    description: "Leveraging time-series analysis, processing historical datasets, and creating intuitive visualizations using Seaborn and Matplotlib."
  },
  {
    icon: <FiLayout className="text-secondary" size={24} />,
    title: "Frontend Development",
    description: "Designing sleek, responsive, and performance-optimized single-page web applications using React.js and modern styling tools."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-dark">
      {/* Subtle details background */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-1 bg-secondary mx-auto rounded-full"
          />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-[320px] sm:max-w-[360px]">
              {/* Outer decorative borders */}
              <div className="absolute -inset-4 rounded-2xl border-2 border-dashed border-secondary/35 group-hover:border-secondary/60 transition-colors duration-500 pointer-events-none" />
              
              {/* Background gradient shadow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary to-dark-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Actual Image container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-secondary/20 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Shammin Akter Tithi" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold font-heading text-primary-light mb-4">
              I'm Shammin Akter Tithi
            </h3>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              I am a Computer Science & Engineering student passionate about turning data into intelligent, actionable insights. 
              I specialize in Machine Learning and Data Analysis, training predictive models to solve real-world analytical problems 
              and facilitate complex data-driven decision-making.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
              Alongside artificial intelligence, I build user-first front-end web interfaces. 
              I enjoy bridging the gap between sophisticated data science backends and interactive, responsive web applications 
              that yield seamless user experiences.
            </p>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {specialties.map((spec, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-xl glass-panel hover:bg-navy-darker/60 hover:shadow-lg transition-all duration-300 border border-white/5"
                >
                  <div className="p-3 bg-dark-accent/20 rounded-lg inline-block mb-3">
                    {spec.icon}
                  </div>
                  <h4 className="text-white font-bold font-heading text-base mb-1">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {spec.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
