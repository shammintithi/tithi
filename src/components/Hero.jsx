import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  "CSE Student",
  "ML Enthusiast",
  "Front-End Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-theme"
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-dark-accent/15 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full glass-panel text-secondary text-sm font-semibold tracking-wider mb-6"
        >
          WELCOME TO MY PORTFOLIO
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4"
        >
          Hi, It's me <br className="sm:hidden" />
          <span className="text-gradient">Shammin Akter Tithi</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 font-heading mb-6 min-h-[40px] flex items-center justify-center"
        >
          <span>I'm a&nbsp;</span>
          <span className="text-primary-light border-r-2 border-primary-light pr-1 animate-pulse font-semibold">
            {currentText}
          </span>
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          I am passionate about exploring the intersection of Machine Learning and Web Development. 
          With hands-on experience in ML predictive models and solid front-end engineering skills, 
          I build intelligent, user-first web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="cursor-pointer px-8 py-3.5 rounded-lg bg-secondary text-navy-darker font-bold tracking-wide shadow-lg hover:shadow-secondary/20 hover:bg-primary-light transition-all duration-300"
          >
            View Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className="cursor-pointer px-8 py-3.5 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 font-bold tracking-wide transition-all duration-300 glass-panel"
          >
            More About Me
          </motion.button>
        </motion.div>
      </div>

      {/* Indicator Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer hidden sm:block"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center p-1.5">
          <div className="w-[6px] h-[6px] rounded-full bg-secondary" />
        </div>
      </motion.div>
    </section>
  );
}
