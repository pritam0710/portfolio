import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    phone: Phone
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Pritam Prakash</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Passionate full-stack developer crafting exceptional digital experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3" />
                {personalInfo.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.slice(0, 2).map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        >
          <p className="flex items-center mb-4 md:mb-0">
            © {currentYear} Pritam Prakash. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />{' '}
            using React & TypeScript
          </p>
          <p>
            All rights reserved. Built with modern web technologies.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}; 