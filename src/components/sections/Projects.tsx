import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Filter, Star, Code } from 'lucide-react';
import { Button, Card, Modal } from '../ui';
import { projectsData } from '../../data';
import type { Project } from '../../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'planned': 'bg-gray-100 text-gray-800'
  };

  const statusIcons = {
    'completed': '✅',
    'in-progress': '🚧',
    'planned': '📋'
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 mobile-safe">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 gap-4 mobile-safe"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
              <span className="ml-2 text-xs">
                {category === 'All' ? projectsData.length : projectsData.filter(p => p.category === category).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card variant="hover" className="h-full overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary-300">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Eye}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        View Details
                      </Button>
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={Github}
                          href={project.githubUrl}
                          external
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          GitHub
                        </Button>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                        <span>{statusIcons[project.status]}</span>
                        <span className="capitalize">{project.status.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={Eye}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={Github}
                          href={project.githubUrl}
                          external
                        >
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={ExternalLink}
                          href={project.liveUrl}
                          external
                        >
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project Portfolio Stats
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These projects represent my journey in software development, showcasing various technologies and problem-solving approaches.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{projectsData.length}</div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {projectsData.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Array.from(new Set(projectsData.flatMap(p => p.technologies))).length}
                </div>
                <div className="text-sm text-gray-600">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {projectsData.filter(p => p.featured).length}
                </div>
                <div className="text-sm text-gray-600">Featured Projects</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        size="xl"
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="p-6">
            {/* Project Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[selectedProject.status]}`}>
                    {statusIcons[selectedProject.status]} {selectedProject.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.liveUrl && (
                  <Button
                    variant="primary"
                    icon={ExternalLink}
                    href={selectedProject.liveUrl}
                    external
                  >
                    Live Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="secondary"
                    icon={Github}
                    href={selectedProject.githubUrl}
                    external
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-yellow-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Technologies Used</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}; 