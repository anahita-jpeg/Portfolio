// Navigation links
export const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"
  },
  {
    platform: "LinkedIn", 
    url: "https://linkedin.com/in/yourusername",
    icon: "Linkedin"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername", 
    icon: "Twitter"
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: "Mail"
  }
];

// Hero section data
export const HERO_DATA = {
  name: "Your Name",
  roles: [
    "Full-Stack Developer",
    "CSE Student", 
    "Problem Solver",
    "Tech Enthusiast"
  ],
  tagline: "I'm passionate about creating digital experiences that make a difference. Currently focused on building modern web applications with cutting-edge technologies."
};

// Skills data
export const SKILLS_DATA = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "HTML/CSS", icon: "html", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "Python", icon: "python", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "REST APIs", icon: "api", category: "backend" },
  
  // Database
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "MySQL", icon: "mysql", category: "database" },
  { name: "Firebase", icon: "firebase", category: "database" },
  { name: "Redis", icon: "redis", category: "database" },
  
  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "AWS", icon: "aws", category: "tools" },
  { name: "Vercel", icon: "vercel", category: "tools" }
];

// Projects data
export const PROJECTS_DATA = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration, user authentication, and admin dashboard.",
    image: "/placeholder-project.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    category: "Full-Stack",
    featured: true
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: "Intelligent chatbot using natural language processing for customer support automation.",
    image: "/placeholder-project.jpg", 
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    category: "AI/ML"
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, team collaboration, and progress tracking.",
    image: "/placeholder-project.jpg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com", 
    githubUrl: "https://github.com/yourusername/task-manager",
    category: "Web App"
  },
  {
    id: "fitness-tracker",
    title: "Mobile Fitness Tracker", 
    description: "Track workouts and nutrition on the go with personalized recommendations and progress analytics.",
    image: "/placeholder-project.jpg",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/fitness-tracker", 
    category: "Mobile"
  }
];