import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-darker border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and Scroll Top */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="text-xl font-bold font-heading text-gradient tracking-wide"
          >
            Shammin Tithi
          </a>
          <p className="text-xs text-gray-500">
            Dhaka, Bangladesh • CSE Student & Developer
          </p>
        </div>

        {/* Copyright notice */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Shammin Tithi | Built with passion.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shammintithi"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:bg-secondary/15 hover:text-primary-light hover:border-secondary/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/shammin-tithi/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:bg-secondary/15 hover:text-primary-light hover:border-secondary/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="https://www.facebook.com/share/17fJzUbkae/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:bg-secondary/15 hover:text-primary-light hover:border-secondary/30 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="https://www.instagram.com/shammin_tithi13leemin?igsh=MTlqbHM0ZHVtNHgyNA==/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:bg-secondary/15 hover:text-primary-light hover:border-secondary/30 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
