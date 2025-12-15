import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, User, Zap, Coffee } from 'lucide-react';

const stats = [
  { icon: Code, value: '3+', label: 'Projects Completed' },
  { icon: Coffee, value: '500+', label: 'Cups of Coffee' },
  { icon: Zap, value: '100%', label: 'Dedication' },
  { icon: User, value: '1', label: 'Happy Developer' },
];

const timeline = [
  {
    year: '2022 - Present',
    title: 'B.Tech CSE',
    institution: 'Medi-Caps University',
    description: 'Pursuing Computer Science & Engineering',
  },
  {
    year: '2022',
    title: 'Class 12 (MPBSE)',
    institution: 'Higher Secondary',
    description: 'Completed intermediate education',
  },
  {
    year: '2020',
    title: 'Class 10 (CBSE)',
    institution: 'Secondary School',
    description: 'Completed secondary education',
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover my journey in tech
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Who am I?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-foreground font-medium">Full-stack Developer</span> skilled 
                in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have experience in both 
                front-end and back-end development, integrating REST APIs, JWT authentication, 
                optimizing performance, and building scalable applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in JavaScript, HTML5, CSS3, Tailwind, and Git, I'm passionate 
                about writing clean, maintainable code and solving complex problems. I love learning 
                new technologies and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-primary">Education Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary shadow-glow"
                  />
                  
                  <div className="glass rounded-xl p-4 sm:p-6 hover:shadow-glow transition-shadow duration-300">
                    <span className="text-primary font-mono text-sm">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    <p className="text-secondary font-medium text-sm">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
