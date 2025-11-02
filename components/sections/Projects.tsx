'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Equinox - AI Stock Analyzer',
    description: 'AI-powered stock analysis platform that provides intelligent insights and predictions for investment decisions. Built with modern technologies for optimal performance.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    category: 'Full-Stack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anahita-jpeg/equinox',
    featured: true,
  },
  {
    id: 2,
    title: 'Python Snake Game',
    description: 'Classic Snake game built with Python and Pygame. Features smooth gameplay, score tracking, and collision detection with retro-style graphics.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Pygame', 'Game Development'],
    category: 'Game',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anahita-jpeg/SnakeGame',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Storefront',
    description: 'Modern e-commerce storefront with product catalog, shopping cart, and secure checkout process. Built with responsive design principles.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'Web App',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anahita-jpeg',
    featured: false,
  },
  {
    id: 4,
    title: 'Mobile Fitness Tracker',
    description: 'Track workouts and nutrition on the go with this comprehensive fitness application featuring progress analytics.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    category: 'Mobile',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anahita-jpeg',
    featured: false,
  },
];

const categoryColors = {
  'Full-Stack': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'AI/ML': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  'Game': 'bg-red-500/10 text-red-600 dark:text-red-400',
  'Web App': 'bg-green-500/10 text-green-600 dark:text-green-400',
  'Mobile': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
};

const techColors = {
  'React': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  'Next.js': 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
  'Node.js': 'bg-green-500/10 text-green-600 dark:text-green-400',
  'Python': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Pygame': 'bg-green-500/10 text-green-600 dark:text-green-400',
  'Game Development': 'bg-red-500/10 text-red-600 dark:text-red-400',
  'AI/ML': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  'MongoDB': 'bg-green-500/10 text-green-600 dark:text-green-400',
  'PostgreSQL': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Firebase': 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  'TensorFlow': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  'Flask': 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
  'Stripe': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  'Tailwind CSS': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  'React Native': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-light-bg-card dark:bg-dark-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text-heading dark:text-dark-text-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Things I've built and proud of
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-light-bg-base dark:bg-dark-bg-base rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-light-accent-primary/10 dark:border-dark-accent-primary/10 hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action button - appear on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 dark:bg-dark-bg-base/90 backdrop-blur-sm text-light-text-heading dark:text-dark-text-heading px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white dark:hover:bg-dark-bg-base transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-light-text-heading dark:text-dark-text-heading group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-light-text-body dark:text-dark-text-body leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.15) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${techColors[tech as keyof typeof techColors] || 'bg-gray-500/10 text-gray-600 dark:text-gray-400'}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/anahita-jpeg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-light-bg-base dark:bg-dark-bg-base border-2 border-light-accent-primary dark:border-dark-accent-primary text-light-accent-primary dark:text-dark-accent-primary font-semibold rounded-lg hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}