import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Atom, Server, Database, Zap, Palette, FileCode, GitBranch } from 'lucide-react';

const skills = [
  { name: 'JavaScript', level: 90, Icon: Code, color: '#F7DF1E' },
  { name: 'React.js', level: 88, Icon: Atom, color: '#61DAFB' },
  { name: 'Node.js', level: 85, Icon: Server, color: '#339933' },
  { name: 'MongoDB', level: 82, Icon: Database, color: '#47A248' },
  { name: 'Express.js', level: 85, Icon: Zap, color: '#FFFFFF' },
  { name: 'TailwindCSS', level: 90, Icon: Palette, color: '#06B6D4' },
  { name: 'HTML/CSS', level: 95, Icon: FileCode, color: '#E34F26' },
  { name: 'Git/GitHub', level: 80, Icon: GitBranch, color: '#F05032' },
];

const tools = [
  'VS Code', 'Postman', 'Multer', 'Netlify', 'Render', 'Railway', 'JWT Auth', 'REST APIs'
];

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Circular Skill Indicators */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-primary">Core Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    {/* Background circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0, 251' }}
                        animate={inView ? { 
                          strokeDasharray: `${skill.level * 2.51}, 251` 
                        } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        className="drop-shadow-[0_0_8px_hsl(var(--primary))]"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Animated Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={inView ? { opacity: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5, type: "spring" }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                      >
                        <skill.Icon 
                          className="w-8 h-8 sm:w-10 sm:h-10" 
                          style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color})` }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-primary">Tools & Technologies</h3>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' 
                    }}
                    className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-lg font-semibold mb-4">Languages</h4>
                <div className="flex gap-4">
                  {['JavaScript', 'Core Java'].map((lang, index) => (
                    <motion.div
                      key={lang}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="glass rounded-xl px-6 py-3 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-medium">{lang}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
