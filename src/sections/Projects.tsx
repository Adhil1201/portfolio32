import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { ExternalLink, Github, Dumbbell, Car, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Gym Management System',
      description: 'A comprehensive gym management solution with member tracking, workout planning, and payment management. Features include member registration, trainer assignment, and progress monitoring.',
      icon: <Dumbbell size={32} />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Car Parking System',
      description: 'Smart parking management system with real-time slot monitoring, automated billing, and reservation capabilities. Includes mobile app integration and payment processing.',
      icon: <Car size={32} />,
      technologies: ['Java', 'MySQL', 'Spring Boot', 'Android'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Racism Detection System',
      description: 'Machine learning-powered system to detect and flag racist content in text and social media posts. Uses natural language processing and sentiment analysis.',
      icon: <Shield size={32} />,
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} mb-6 shadow-lg`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <ScrollReveal delay={index * 0.1}>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </ScrollReveal>

                  {/* Description */}
                  <ScrollReveal delay={index * 0.1 + 0.1}>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </ScrollReveal>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <ScrollReveal key={tech} delay={index * 0.1 + 0.2 + techIndex * 0.05}>
                        <span className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-purple-500/50 transition-colors duration-300">
                          {tech}
                        </span>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <ScrollReveal delay={index * 0.1 + 0.3}>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">View Project</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </motion.button>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;