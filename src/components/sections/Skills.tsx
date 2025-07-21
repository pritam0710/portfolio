import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Settings } from 'lucide-react';
import { Card } from '../ui';
import { skillsData } from '../../data';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [Code, Server, Settings];
  const categoryColors = ['text-blue-600', 'text-green-600', 'text-purple-600'];

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {skillsData.map((category, index) => {
            const IconComponent = categoryIcons[index];
            const isActive = activeCategory === index;
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="hover" className="p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        skill.level >= 90 
                          ? 'from-green-400 to-green-600'
                          : skill.level >= 80
                          ? 'from-blue-400 to-blue-600'
                          : skill.level >= 70
                          ? 'from-yellow-400 to-yellow-600'
                          : 'from-gray-400 to-gray-600'
                      }`}
                    />
                  </div>

                  {/* Skill Level Badge */}
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      skill.level >= 90 
                        ? 'bg-green-100 text-green-800'
                        : skill.level >= 80
                        ? 'bg-blue-100 text-blue-800'
                        : skill.level >= 70
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Basic'}
                    </span>
                    
                    {/* Experience indicator */}
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= Math.ceil(skill.level / 20)
                              ? 'bg-primary-600'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Overall Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-purple-50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                frameworks, and best practices. My skill levels reflect my current proficiency, 
                but I'm always eager to learn and improve.
              </p>
              
              {/* Tech Stack Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {skillsData.map((category, index) => {
                  const IconComponent = categoryIcons[index];
                  const avgLevel = Math.round(
                    category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                  );
                  
                  return (
                    <div key={category.name} className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center ${categoryColors[index]}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                      <p className="text-2xl font-bold text-primary-600 mb-1">{avgLevel}%</p>
                      <p className="text-sm text-gray-600">Average Proficiency</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 