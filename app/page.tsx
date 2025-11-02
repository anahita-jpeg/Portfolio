import Navbar from '@/components/global/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/global/Footer';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg-base dark:bg-dark-bg-base text-light-text-body dark:text-dark-text-body">
      <Navbar />
      <Hero />
      
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text-body)',
            border: '1px solid var(--accent-primary)',
          },
        }}
      />
    </main>
  );
}