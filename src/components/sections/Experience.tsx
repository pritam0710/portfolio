import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ChevronDown, ChevronUp, Award, Users, Code } from 'lucide-react';
import { Card } from '../ui';
import { experienceData } from '../../data';

export const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]); // First item expanded by default

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const typeColors = {
    'full-time': 'bg-green-100 text-green-800',
    'internship': 'bg-blue-100 text-blue-800',
    'contract': 'bg-purple-100 text-purple-800'
  };

  return (
    <section id="experience" className="section-padding bg-white">
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
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made at each role
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-purple-500 to-blue-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => {
              const isExpanded = expandedItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${experience.company}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card variant="hover" className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Building className="w-5 h-5 text-primary-600" />
                            <h3 className="text-lg font-bold text-gray-900">
                              {experience.company}
                            </h3>
                          </div>
                          <h4 className="text-xl font-semibold text-primary-600 mb-2">
                            {experience.position}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {experience.location}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[experience.type]}`}>
                              {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="ml-4 p-2 text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {experience.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              +{experience.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          {/* Responsibilities */}
                          <div className="mb-6">
                            <div className="flex items-center mb-3">
                              <Users className="w-4 h-4 text-blue-600 mr-2" />
                              <h5 className="font-semibold text-gray-900">Key Responsibilities</h5>
                            </div>
                            <ul className="space-y-2">
                              {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="mb-4">
                            <div className="flex items-center mb-3">
                              <Award className="w-4 h-4 text-green-600 mr-2" />
                              <h5 className="font-semibold text-gray-900">Key Achievements</h5>
                            </div>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm font-medium">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* All Technologies */}
                          <div>
                            <div className="flex items-center mb-3">
                              <Code className="w-4 h-4 text-purple-600 mr-2" />
                              <h5 className="font-semibold text-gray-900">Technologies Used</h5>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Highlights
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Throughout my journey, I've consistently delivered high-quality solutions 
                and contributed to meaningful projects that impact users and businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 