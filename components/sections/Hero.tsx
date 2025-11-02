'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/anahita-jpeg', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BhalmeAnahita', label: 'Twitter' },
  { icon: Mail, href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email' },
];

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-bg-base to-light-bg-card dark:from-dark-bg-base dark:to-dark-bg-card">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-light-accent-secondary/10 dark:bg-dark-accent-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-light-accent-tertiary/10 dark:bg-dark-accent-tertiary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Social Links - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex flex-col items-center space-y-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.1 }}
            className="p-3 rounded-full bg-light-bg-card/80 dark:bg-dark-bg-card/80 backdrop-blur-sm hover:bg-light-accent-primary/20 dark:hover:bg-dark-accent-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            <social.icon className="w-5 h-5 text-light-text-muted dark:text-dark-text-muted group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors duration-300" />
          </motion.a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-light-accent-primary/50 to-transparent dark:from-dark-accent-primary/50" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light-accent-primary dark:text-dark-accent-primary text-lg font-medium mb-4"
          >
            Hi, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light-accent-primary via-light-accent-secondary to-light-accent-tertiary dark:from-dark-accent-primary dark:via-dark-accent-secondary dark:to-dark-accent-tertiary bg-clip-text text-transparent"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            Anahita Bhalme
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-light-text-heading dark:text-dark-text-heading mb-6 h-16"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'CSE Student',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-light-text-body dark:text-dark-text-body max-w-2xl mb-8 leading-relaxed"
          >
            Passionate about creating innovative digital solutions that make a difference. 
            I specialize in modern web technologies and love turning complex problems into 
            simple, beautiful, and intuitive designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-light-accent-primary dark:border-dark-accent-primary text-light-accent-primary dark:text-dark-accent-primary font-semibold rounded-lg hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-all duration-300 text-center"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right Visual Elements - Desktop Only */}
        <div className="hidden lg:flex flex-1 justify-center items-center relative">
          <div className="relative w-96 h-96">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 rounded-2xl blur-sm"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                y: [0, -20, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-light-accent-secondary/30 to-light-accent-tertiary/30 dark:from-dark-accent-secondary/30 dark:to-dark-accent-tertiary/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                rotate: 180,
                x: [0, 20, 0]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-light-accent-tertiary/40 to-light-accent-primary/40 dark:from-dark-accent-tertiary/40 dark:to-dark-accent-primary/40 rounded-lg blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-light-bg-card/50 dark:hover:bg-dark-bg-card/50 transition-all duration-300 group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-light-text-muted dark:text-dark-text-muted group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}