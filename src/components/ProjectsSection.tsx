import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Shield, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: typeof Shield;
  tech: string[];
  features: string[];
  gradient: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EmailGuard',
    shortDesc: 'Email Breach & Security Checker',
    fullDesc:
      'A comprehensive email security platform that checks for data breaches and provides security recommendations. Built with MERN stack featuring Google OAuth integration and automated breach detection using external APIs.',
    icon: Shield,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Google OAuth'],
    features: [
      'Automated breach-check system',
      'Protected dashboard with JWT',
      'Encrypted password storage',
      'External APIs for leak detection',
      'Google OAuth integration',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    screenshot: '/emailguard.png',
  },
  {
    id: 2,
    title: 'CampusFind',
    shortDesc: 'Campus Lost & Found Platform',
    fullDesc:
      'A university-focused platform connecting people who have lost items with those who have found them. Features admin moderation, image uploads, and false listing prevention mechanisms.',
    icon: Users,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Multer', 'JWT'],
    features: [
      'Lost/Found item workflows',
      'Image upload with Multer',
      'Admin moderation panel',
      'False listing prevention',
      'JWT authentication',
    ],
    gradient: 'from-purple-500 to-pink-600',
    screenshot: '/campusfind.png',
  },
  {
    id: 3,
    title: 'PrepAI',
    shortDesc: 'Smart Interview Preparation Platform',
    fullDesc:
      'An AI-powered interview preparation tool that helps users practice for job interviews with intelligent feedback, voice recognition, and comprehensive performance analytics.',
    icon: Brain,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML APIs'],
    features: [
      'AI interview assistant',
      'Voice + text interaction',
      'Performance analytics',
      'Progress dashboards',
      'Interview scheduling',
    ],
    gradient: 'from-orange-500 to-red-600',
    screenshot: '/prepai.png',
  },
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the problems I've solved
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <motion.div
                animate={{
                  rotateX: hoveredProject === project.id ? 5 : 0,
                  rotateY: hoveredProject === project.id ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="h-full"
              >
                <div className="glass rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group-hover:shadow-glow-lg transition-all duration-500">
                  {/* Screenshot */}
                  <div className="mb-6 overflow-hidden rounded-xl border border-border">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} homepage`}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
                  </div>

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <project.icon className="w-7 h-7 text-foreground" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary/80 group-hover:border-primary group-hover:shadow-glow-sm transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View details */}
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <selectedProject.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedProject.shortDesc}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Screenshot */}
              <div className="mb-6 overflow-hidden rounded-xl border border-border">
                <img
                  src={selectedProject.screenshot}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-primary">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm rounded-full border border-primary/30 text-foreground shadow-glow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button variant="hero" className="flex-1">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                <Button variant="heroOutline" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
