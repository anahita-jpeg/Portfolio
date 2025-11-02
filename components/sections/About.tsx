'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { icon: Code, value: 3, label: 'Years Coding', suffix: '+' },
  { icon: Award, value: 20, label: 'Projects Built', suffix: '+' },
  { icon: Users, value: 15, label: 'Technologies Mastered', suffix: '+' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee', suffix: '' },
];

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-light-bg-card dark:bg-dark-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex items-start justify-center"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-light-bg-base/80 dark:bg-dark-bg-base/80 backdrop-blur-sm p-6 rounded-xl border border-light-accent-primary/10 dark:border-dark-accent-primary/10 hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <stat.icon className="w-8 h-8 text-light-accent-primary dark:text-dark-accent-primary" />
                    <div className="text-3xl font-bold text-light-text-heading dark:text-dark-text-heading">
                      {typeof stat.value === 'number' ? (
                        <>
                          <Counter value={stat.value} />
                          {stat.suffix}
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-sm text-light-text-muted dark:text-dark-text-muted font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section heading */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-light-text-heading dark:text-dark-text-heading mb-4"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary rounded-full"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-light-text-body dark:text-dark-text-body leading-relaxed"
              >
                I'm a passionate Computer Science student with a love for creating innovative digital solutions. 
                My journey in tech started with curiosity about how websites work, and it has evolved into a 
                deep appreciation for clean code, user experience, and problem-solving.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-light-text-body dark:text-dark-text-body leading-relaxed"
              >
                I specialize in modern web technologies including React, Next.js, and TypeScript, with a growing 
                interest in AI/ML applications. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-light-text-body dark:text-dark-text-body leading-relaxed"
              >
                Currently, I'm focused on building scalable web applications and expanding my knowledge in 
                cloud technologies and DevOps practices. I believe in writing code that not only works but 
                is maintainable, accessible, and makes a positive impact.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-light-text-heading dark:text-dark-text-heading mb-6 text-center">
                Skills & Technologies
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { name: 'React', icon: '⚛️', color: '#61DAFB' },
                  { name: 'Next.js', icon: '▲', color: '#000000' },
                  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
                  { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
                  { name: 'Python', icon: '🐍', color: '#3776AB' },
                  { name: 'Node.js', icon: '🟢', color: '#339933' },
                  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
                  { name: 'Git', icon: '📝', color: '#F05032' },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.05, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-light-bg-base/50 dark:bg-dark-bg-base/50 backdrop-blur-sm p-4 rounded-lg border border-light-accent-primary/10 dark:border-dark-accent-primary/10 hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300 text-center"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs font-medium text-light-text-muted dark:text-dark-text-muted">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}