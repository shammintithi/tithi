import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiActivity, FiDatabase, FiLayers } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Breast Cancer Stage Prediction",
    shortDesc: "Predicting breast cancer progression stages using integrative Machine Learning and Explainable AI.",
    fullDesc: "This clinical machine learning research projects focuses on prediction models for diagnosing/staging breast cancer. Integrated Explainable AI methodologies (SHAP, LIME) to explain the internal predictions of high-dimensional tree classifiers, guaranteeing transparency for diagnostic workflows.",
    icon: <FiActivity size={32} className="text-secondary" />,
    tags: ["Machine Learning", "Explainable AI", "Python"],
    tech: ["Scikit-learn", "SHAP", "LIME", "Pandas", "Matplotlib"],
    github: "https://github.com/shammintithi",
    demo: "#"
  },
  {
    id: 2,
    title: "Dengue Case Forecasting",
    shortDesc: "Time series forecasting of dengue case surges using regional climate and epidemiological histories.",
    fullDesc: "Designed an analytics framework utilizing meteorological inputs (temperature, humidity, rainfall) and historical epidemiological registries to build predictive forecasts. Built ARIMA and LSTM sequences to aid healthcare logistics in predicting outbreak waves.",
    icon: <FiDatabase size={32} className="text-secondary" />,
    tags: ["Time Series", "Predictive ML", "Data Analysis"],
    tech: ["TensorFlow", "Keras", "Statsmodels", "Numpy", "Seaborn"],
    github: "https://github.com/shammintithi",
    demo: "#"
  },
  {
    id: 3,
    title: "Event Management App",
    shortDesc: "Interactive client web application enabling seamless booking, scheduling, and notifications.",
    fullDesc: "A responsive, feature-rich front-end interface built to simplify ticketing and coordination for institutional events. Integrates state management patterns, fluid page navigations, and detailed form validation for seamless registrations.",
    icon: <FiLayers size={32} className="text-secondary" />,
    tags: ["Web Development", "React.js", "Front-end"],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Icons"],
    github: "https://github.com/shammintithi",
    demo: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-gradient-theme">
      {/* Background radial details */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-dark-accent/5 rounded-full blur-[100px]" />
      
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
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-1 bg-secondary mx-auto rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glow-card flex flex-col justify-between p-8 rounded-2xl glass-panel border border-white/5 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(proj)}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="p-4 bg-dark-accent/20 rounded-xl inline-block mb-6">
                  {proj.icon}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {proj.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {proj.shortDesc}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2.5 py-1 rounded-full bg-deep-navy/40 text-secondary border border-secondary/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                  className="cursor-pointer text-sm text-primary-light hover:text-white font-semibold flex items-center gap-1.5 transition-colors group/btn"
                >
                  View Details
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-navy-darker/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl bg-navy-dark border border-secondary/25 p-8 sm:p-10 rounded-2xl shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-dark-accent/20 rounded-xl inline-block">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-secondary font-semibold font-heading text-sm uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Tech Stack used */}
                <div className="mb-8">
                  <h4 className="text-secondary font-semibold font-heading text-sm uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs sm:text-sm px-3.5 py-1.5 rounded-lg bg-navy-darker text-gray-300 border border-white/5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-navy-darker font-bold hover:bg-primary-light transition-all duration-300 shadow-md"
                  >
                    <FiGithub size={18} />
                    Source Code
                  </a>
                  
                  {selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
