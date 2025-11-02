'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('bhalmeanahita20@gmail.com');
      setEmailCopied(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy email');
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/anahita-jpeg', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://x.com/BhalmeAnahita', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-light-bg-base dark:bg-dark-bg-base relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
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
            Let's Connect
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-text-muted/30 dark:border-dark-text-muted/30 text-light-text-heading dark:text-dark-text-heading placeholder-transparent focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors duration-300 peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-0 -top-3.5 text-light-text-muted dark:text-dark-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted/70 dark:peer-placeholder-shown:text-dark-text-muted/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-light-accent-primary dark:peer-focus:text-dark-accent-primary peer-focus:text-sm">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-text-muted/30 dark:border-dark-text-muted/30 text-light-text-heading dark:text-dark-text-heading placeholder-transparent focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors duration-300 peer"
                    placeholder="your.email@example.com"
                  />
                  <label className="absolute left-0 -top-3.5 text-light-text-muted dark:text-dark-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted/70 dark:peer-placeholder-shown:text-dark-text-muted/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-light-accent-primary dark:peer-focus:text-dark-accent-primary peer-focus:text-sm">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-text-muted/30 dark:border-dark-text-muted/30 text-light-text-heading dark:text-dark-text-heading placeholder-transparent focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors duration-300 peer"
                  placeholder="What's this about?"
                />
                <label className="absolute left-0 -top-3.5 text-light-text-muted dark:text-dark-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted/70 dark:peer-placeholder-shown:text-dark-text-muted/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-light-accent-primary dark:peer-focus:text-dark-accent-primary peer-focus:text-sm">
                  Subject (Optional)
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-text-muted/30 dark:border-dark-text-muted/30 text-light-text-heading dark:text-dark-text-heading placeholder-transparent focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors duration-300 peer resize-none"
                  placeholder="Your message..."
                />
                <label className="absolute left-0 -top-3.5 text-light-text-muted dark:text-dark-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted/70 dark:peer-placeholder-shown:text-dark-text-muted/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-light-accent-primary dark:peer-focus:text-dark-accent-primary peer-focus:text-sm">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Profile */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20">
                <img 
                  src="/images/linkeinphoto.jpg"
                  alt="Anahita Bhalme"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to LinkedIn image if local image fails to load
                    e.currentTarget.src = "https://media.licdn.com/dms/image/v2/D4E03AQFItwu4Cx156Q/profile-displayphoto-scale_400_400/B4EZoJpbNAGYAg-/0/1761098447880?e=1763596800&v=beta&t=-7LYozBO2Gx9xN-h4jkHFnvmOW5uFM1cUTQx2K7oC3M";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-light-text-heading dark:text-dark-text-heading mb-2">
                Let's build something together!
              </h3>
              <p className="text-light-text-body dark:text-dark-text-body">
                I'm always interested in new opportunities and exciting projects.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-light-bg-card/50 dark:bg-dark-bg-card/50 backdrop-blur-sm rounded-lg">
                <Mail className="w-5 h-5 text-light-accent-primary dark:text-dark-accent-primary" />
                <div className="flex-1">
                  <p className="text-sm text-light-text-muted dark:text-dark-text-muted">Email</p>
                  <p className="text-light-text-heading dark:text-dark-text-heading">bhalmeanahita20@gmail.com</p>
                </div>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 hover:bg-light-accent-primary/20 dark:hover:bg-dark-accent-primary/20 transition-colors duration-200"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-light-accent-primary dark:text-dark-accent-primary" />
                  )}
                </motion.button>
              </div>


            </div>

            {/* Availability Status */}
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available for freelance work
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-light-text-heading dark:text-dark-text-heading">
                Connect with me
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-3 p-3 bg-light-bg-card dark:bg-dark-bg-card rounded-lg hover:bg-light-bg-elevated dark:hover:bg-dark-bg-elevated transition-all duration-300 text-light-text-body dark:text-dark-text-body ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}