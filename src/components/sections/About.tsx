import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Zap, Download, MapPin, Calendar } from 'lucide-react';
import { Button, Card } from '../ui';
import { personalInfo } from '../../data';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Expert in modern web technologies including React, Angular, and Node.js with 2+ years of professional experience.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Proven ability to work effectively with cross-functional teams in Agile environments.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Legacy Modernization',
      description: 'Successfully migrated enterprise modules from AngularJS to Angular 17, improving performance by 40%.',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Developed reusable UI components and implemented advanced business logic using visual programming.',
      color: 'text-orange-600'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Performance Improvement', value: '40%' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info & Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary-200">
                  <img 
                    src="/my_avatar.png" 
                    alt={`${personalInfo.name} - Profile Photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-primary-600 font-medium">Associate Software Engineer</p>
                  <div className="flex items-center text-gray-600 text-sm mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    2+ Years Experience
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>

              <Button
                variant="primary"
                icon={Download}
                href="/resume.pdf"
                download
                external
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What Sets Me Apart
            </h3>

            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="hover" className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${highlight.color}`}>
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to contribute to meaningful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 