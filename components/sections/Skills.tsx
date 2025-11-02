'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'React', icon: SiReact, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', color: '#339933' },
  { name: 'Express', icon: SiExpress, category: 'backend', color: '#000000' },
  { name: 'Python', icon: SiPython, category: 'backend', color: '#3776AB' },
  
  // Database
  { name: 'MongoDB', icon: SiMongodb, category: 'database', color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'database', color: '#336791' },
  
  // Tools
  { name: 'Git', icon: SiGit, category: 'tools', color: '#F05032' },
  { name: 'Docker', icon: SiDocker, category: 'tools', color: '#2496ED' },
  { name: 'Vercel', icon: SiVercel, category: 'tools', color: '#000000' },
  { name: 'Figma', icon: SiFigma, category: 'tools', color: '#F24E1E' },
];

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  database: 'from-purple-500 to-violet-500',
  tools: 'from-orange-500 to-red-500',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-light-bg-base dark:bg-dark-bg-base relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text-heading dark:text-dark-text-heading mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Technologies I've been working with and continuously learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-light-bg-card/80 dark:bg-dark-bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-light-accent-primary/10 dark:border-dark-accent-primary/10 hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-light-accent-primary/10 dark:hover:shadow-dark-accent-primary/10 aspect-square flex flex-col items-center justify-center space-y-4">
                {/* Icon */}
                <div className="relative">
                  <skill.icon 
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      color: skill.color,
                      filter: 'grayscale(20%) brightness(0.9)',
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>

                {/* Skill Name */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-light-text-heading dark:text-dark-text-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]}`} />
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ 
                    background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {Object.entries(categoryColors).map(([category, gradient]) => (
            <div key={category} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
              <span className="text-sm text-light-text-muted dark:text-dark-text-muted capitalize">
                {category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}