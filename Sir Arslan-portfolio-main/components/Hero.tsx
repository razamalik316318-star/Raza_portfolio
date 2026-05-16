'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  Code,
  Cloud,
  Rocket,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Typing animation component
function TypingText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const current = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === current) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setTypingSpeed(100);
    } else if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, currentText.length - 1));
      }, typingSpeed);
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const typingTexts = [
    'iOS Developer',
    'Swift, SwiftUI & Objective-C',
    'Mobile Engineer',
    'Problem Solver',
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl lg:max-w-none">
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 mb-4 flex justify-center lg:justify-start"
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full glass-effect text-primary-400 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                iOS Developer
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
            >
              <span className="text-gray-100">Hi, I'm</span>
              <br />
              <span className="text-gradient">Malik Muhammad Raza</span>
              <br />
              <span className="text-gray-100 min-h-[1.2em] inline-block">
                <TypingText texts={typingTexts} />
              </span>
            </motion.h1>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="mb-4 flex justify-center lg:justify-start items-center gap-2 text-gray-400 text-sm"
            >
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Lahore, Pakistan</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate iOS developer with 4.0 years of experience building
              polished native apps, scalable mobile architectures, and
              reliable releases for users worldwide. Specialized in Swift,
              SwiftUI, Objective-C, and the Apple platform, with a focus on
              performance, accessibility, and App Store–ready quality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6"
            >
              <motion.div
                className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 font-medium text-sm">Swift</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cloud className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 font-medium text-sm">SwiftUI</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 font-medium text-sm">
                  Objective-C
                </span>
              </motion.div>
            </motion.div>

            {/* Social Icons & Buttons Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  href="https://www.linkedin.com/in/malik-muhammad-raza-bba640352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-primary-400 hover:text-primary-300 border border-dark-700/50 hover:border-primary-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:razamalik316318@gmail.com"
                  className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-primary-400 hover:text-primary-300 border border-dark-700/50 hover:border-primary-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-primary-400 hover:text-primary-300 border border-dark-700/50 hover:border-primary-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Contact"
                >
                  <Phone className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <motion.a
                  href="#contact"
                  className="px-4 sm:px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary-500/50"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/MalikMuhammadRaza-Resume.pdf"
                  download="MalikMuhammadRaza-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 glass-effect text-gray-300 rounded-lg font-semibold text-sm border border-dark-700/50 flex items-center justify-center gap-1.5"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(14, 165, 233, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Resume</span>
                  <span className="sm:hidden">CV</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 p-2">
                  <div className="w-full h-full rounded-full bg-dark-800 overflow-hidden border-4 border-dark-700">
                    <img
                      src="/Profile.png"
                      alt="Malik Muhammad Raza"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (
                          parent &&
                          !parent.querySelector('.fallback-initials')
                        ) {
                          target.style.display = 'none';
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-primary-600/20 fallback-initials">
                              <div class="text-center">
                                <div class="text-6xl font-bold text-primary-400 mb-2">MMR</div>
                                <div class="text-sm text-gray-400">Malik Muhammad Raza</div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 min-w-[5rem] h-20 px-2 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                4.0
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll to explore - Always centered */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center w-full"
        >
          <motion.a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
