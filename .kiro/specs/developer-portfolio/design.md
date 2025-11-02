# Design Document

## Overview

The developer portfolio is a modern, interactive single-page application built with Next.js 14+ featuring smooth animations, dual theme support, and responsive design. The application emphasizes visual storytelling through carefully orchestrated animations, a cohesive color system, and performance-optimized interactions.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router and TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom color system
- **Animations**: Framer Motion for complex animations, CSS for performance-critical elements
- **Icons**: Lucide React and React Icons
- **Theme Management**: next-themes with localStorage persistence
- **Additional Libraries**: 
  - react-type-animation (typing effects)
  - react-confetti (success celebrations)
  - react-hot-toast (notifications)

### Project Structure
```
/app
  layout.tsx          # Root layout with theme provider
  page.tsx            # Main page with all sections
  globals.css         # Global styles and CSS variables
/components
  /ui                 # Reusable UI components
  /sections           # Main page sections
  /global             # Global components (navbar, cursor, etc.)
/lib
  utils.ts            # Utility functions
  constants.ts        # App constants and data
/public
  /images            # Static images and assets
/styles
  globals.css        # Additional global styles
```

## Components and Interfaces

### Core Layout Components

#### 1. Root Layout (`app/layout.tsx`)
- Theme provider wrapper with next-themes
- Font loading (Space Grotesk from Google Fonts)
- Global metadata and viewport configuration
- Custom cursor and scroll progress components

#### 2. Main Page (`app/page.tsx`)
- Container for all sections in sequential order
- Scroll spy implementation for active navigation
- Intersection Observer for animation triggers

### Global Components

#### 3. Navigation Bar (`components/global/Navbar.tsx`)
```typescript
interface NavbarProps {
  activeSection: string;
}

interface NavLink {
  href: string;
  label: string;
  id: string;
}
```

**Features:**
- Fixed positioning with dynamic background
- Smooth scroll navigation with offset calculation
- Mobile hamburger menu with full-screen overlay
- Active section highlighting with scroll detection
- Theme toggle integration

#### 4. Custom Cursor (`components/global/CustomCursor.tsx`)
```typescript
interface CursorPosition {
  x: number;
  y: number;
}

interface CursorProps {
  isDesktop: boolean;
}
```

**Implementation:**
- GPU-accelerated transforms using `translate3d()`
- RequestAnimationFrame for smooth 60fps updates
- Touch device detection and automatic disable
- Dual-element design (dot + ring) with different follow speeds

#### 5. Scroll Progress (`components/global/ScrollProgress.tsx`)
```typescript
interface ScrollProgressProps {
  className?: string;
}
```

**Features:**
- Real-time scroll position calculation
- Gradient background with theme-aware colors
- Fixed positioning at viewport top
- Smooth width transitions

### Section Components

#### 6. Hero Section (`components/sections/Hero.tsx`)
```typescript
interface HeroProps {
  name: string;
  roles: string[];
  tagline: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
}
```

**Layout:**
- Two-column desktop layout (60% text, 40% visual)
- Staggered animation sequence with precise timing
- Floating geometric shapes with CSS keyframes
- Mouse parallax effects using Framer Motion
- Responsive typography scaling

#### 7. About Section (`components/sections/About.tsx`)
```typescript
interface AboutProps {
  profileImage: string;
  paragraphs: string[];
  stats: StatItem[];
  isAvailable: boolean;
}

interface StatItem {
  icon: React.ComponentType;
  value: string;
  label: string;
}
```

**Features:**
- Animated gradient border on profile image
- Counter animations for statistics
- Availability status with pulse animation
- Responsive image sizing and layout

#### 8. Skills Section (`components/sections/Skills.tsx`)
```typescript
interface Skill {
  name: string;
  icon: React.ComponentType;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency?: string;
}

interface SkillsProps {
  skills: Skill[];
}
```

**Design:**
- Responsive grid layout (4/3/2 columns)
- Hover effects with brand color integration
- Cascade reveal animation with stagger
- Tooltip system for proficiency details

#### 9. Projects Section (`components/sections/Projects.tsx`)
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}
```

**Card Features:**
- 16:9 aspect ratio images with zoom effects
- Technology tag system with color coding
- Hover lift animations with enhanced shadows
- Action buttons with external link handling

#### 10. Experience Timeline (`components/sections/Experience.tsx`)
```typescript
interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  technologies: string[];
  logo?: string;
}

interface ExperienceProps {
  experience: TimelineItem[];
  education: TimelineItem[];
}
```

**Timeline Features:**
- Toggle between experience and education
- Alternating card layout on desktop
- Scroll-triggered progress line animation
- Active item highlighting with pulse effects

#### 11. Contact Section (`components/sections/Contact.tsx`)
```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: boolean;
  socialLinks: SocialLink[];
}
```

**Form Features:**
- Real-time validation with visual feedback
- Floating label animations
- Loading states and success celebrations
- Copy-to-clipboard functionality for contact info

## Data Models

### Theme System
```typescript
type Theme = 'dark' | 'light';

interface ColorSystem {
  dark: {
    bg: { base: string; card: string; elevated: string };
    accent: { primary: string; secondary: string; tertiary: string };
    text: { heading: string; body: string; muted: string };
  };
  light: {
    bg: { base: string; card: string; elevated: string };
    accent: { primary: string; secondary: string; tertiary: string };
    text: { heading: string; body: string; muted: string };
  };
}
```

### Animation Configuration
```typescript
interface AnimationConfig {
  duration: number;
  delay?: number;
  easing: string;
  stagger?: number;
}

interface ScrollTrigger {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
}
```

## Error Handling

### Form Validation
- Client-side validation with immediate feedback
- Email format validation using regex patterns
- Required field validation with visual indicators
- Character limits with real-time counters

### Performance Error Handling
- Intersection Observer fallbacks for older browsers
- Custom cursor disable on performance constraints
- Image loading error states with placeholder fallbacks
- Animation frame cleanup on component unmount

### Theme System Errors
- Fallback to system preference if localStorage fails
- CSS variable fallbacks for unsupported browsers
- Graceful degradation for reduced motion preferences

## Testing Strategy

### Component Testing
- Unit tests for form validation logic
- Theme switching functionality tests
- Animation trigger tests with mocked Intersection Observer
- Responsive layout tests with viewport simulation

### Integration Testing
- Smooth scroll navigation between sections
- Theme persistence across page reloads
- Form submission flow with success/error states
- Mobile menu functionality and overlay behavior

### Performance Testing
- Custom cursor performance on various devices
- Animation frame rate monitoring
- Bundle size optimization verification
- Image loading and optimization validation

### Accessibility Testing
- Keyboard navigation through all interactive elements
- Screen reader compatibility for all content
- Color contrast validation for both themes
- Reduced motion preference respect

## Visual Design System

### Typography Scale
- **Headings**: Space Grotesk (Google Font)
- **Body**: System font stack for performance
- **Scale**: Responsive sizing with clamp() functions
- **Line Height**: Optimized for readability (1.6 for body, 1.2 for headings)

### Color Implementation
Custom Tailwind configuration extending the default palette:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      dark: {
        bg: { base: '#0a0e27', card: '#151932', elevated: '#1e2749' },
        accent: { primary: '#00d9ff', secondary: '#b794f6', tertiary: '#ffd93d' },
        text: { heading: '#f0f6fc', body: '#a6b1c2', muted: '#6b7888' }
      },
      light: {
        bg: { base: '#ffffff', card: '#f7f9fc', elevated: '#e9ecf2' },
        accent: { primary: '#0891b2', secondary: '#7c3aed', tertiary: '#ea580c' },
        text: { heading: '#0f172a', body: '#334155', muted: '#64748b' }
      }
    }
  }
}
```

### Animation Principles
- **Entrance**: Staggered reveals with spring physics
- **Hover**: Subtle scale and glow effects
- **Scroll**: Progress-based animations with smooth easing
- **Transitions**: 300ms duration for theme changes, 200ms for interactions
- **Performance**: GPU-accelerated transforms, will-change optimization

### Responsive Breakpoints
- **Mobile**: 320px - 767px (single column, simplified animations)
- **Tablet**: 768px - 1023px (hybrid layouts, reduced motion)
- **Desktop**: 1024px+ (full feature set, enhanced interactions)

### Accessibility Considerations
- **Focus States**: Visible focus rings with accent colors
- **Motion**: Respect `prefers-reduced-motion` system setting
- **Contrast**: WCAG AA compliance for all text/background combinations
- **Navigation**: Keyboard accessible with logical tab order
- **Screen Readers**: Semantic HTML with appropriate ARIA labels