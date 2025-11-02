'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: '/resume.pdf', label: 'Resume' },
  { href: 'https://github.com/anahita-jpeg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn' },
  { href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/anahita-jpeg', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BhalmeAnahita', label: 'Twitter' },
  { icon: Mail, href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 p-3 bg-light-accent-primary dark:bg-dark-accent-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <footer className="bg-light-bg-elevated dark:bg-dark-bg-elevated border-t border-light-accent-primary/10 dark:border-dark-accent-primary/10 relative overflow-hidden">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-accent-primary dark:via-dark-accent-primary to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary bg-clip-text text-transparent">
                Anahita Bhalme
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted">
                Crafting digital experiences
              </p>
              <div className="space-y-2 text-sm text-light-text-muted dark:text-dark-text-muted">
                <p>© 2025 Anahita Bhalme. All rights reserved.</p>
                <p className="flex items-center gap-1">
                  Built with Next.js, Tailwind & <Heart className="w-4 h-4 text-red-500" />
                </p>
              </div>
            </motion.div>

            {/* Center Section - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h4 className="text-lg font-semibold text-light-text-heading dark:text-dark-text-heading mb-4">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-light-text-muted dark:text-dark-text-muted hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors duration-300 relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent-primary dark:bg-dark-accent-primary transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-light-text-heading dark:text-dark-text-heading mb-4">
                  Links
                </h4>
                <ul className="space-y-2">
                  {externalLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-light-text-muted dark:text-dark-text-muted hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors duration-300 relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent-primary dark:bg-dark-accent-primary transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Section - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-light-text-heading dark:text-dark-text-heading">
                Connect
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-center justify-center w-12 h-12 bg-light-bg-card dark:bg-dark-bg-card hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 rounded-full transition-all duration-300 text-light-text-muted dark:text-dark-text-muted hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup (Optional) */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-light-text-heading dark:text-dark-text-heading">
                  Stay Updated
                </h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-light-bg-card dark:bg-dark-bg-card border border-light-accent-primary/20 dark:border-dark-accent-primary/20 rounded-lg text-sm text-light-text-heading dark:text-dark-text-heading placeholder-light-text-muted dark:placeholder-dark-text-muted focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-light-accent-primary dark:bg-dark-accent-primary text-white rounded-lg text-sm font-medium hover:bg-light-accent-primary/90 dark:hover:bg-dark-accent-primary/90 transition-colors duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
}