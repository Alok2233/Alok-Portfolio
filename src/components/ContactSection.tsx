import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://alokdalke.app.n8n.cloud/webhook-test/5b210678-3b3b-4f85-bf6f-a764e4afd456",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'alokdalke6@gmail.com', href: 'mailto:alokdalke6@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9926962871', href: 'tel:+919926962871' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/alokdalke' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/alokdalke' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div
                  animate={{ 
                    y: focusedField === 'name' ? -5 : 0,
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full bg-input border rounded-xl px-4 py-4 text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-primary shadow-glow' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="Your Name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  animate={{ 
                    y: focusedField === 'email' ? -5 : 0,
                  }}
                  className="relative"
                >
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full bg-input border rounded-xl px-4 py-4 text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-primary shadow-glow' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="Your Email"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  animate={{ 
                    y: focusedField === 'message' ? -5 : 0,
                  }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full bg-input border rounded-xl px-4 py-4 text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-primary shadow-glow' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="Your Message"
                  />
                </motion.div>

          <Button
  type="submit"
  variant="hero"
  size="lg"
  className="w-full"
  disabled={isSubmitting}
>
  {isSubmitting ? "Sending..." : "Send Message"}
  <Send className="w-5 h-5" />
</Button>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border border-primary/30 hover:border-primary hover:shadow-glow transition-all"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="text-center p-4"
            >
              <p className="text-muted-foreground text-sm">
                Currently open to <span className="text-primary font-medium">freelance</span> and{' '}
                <span className="text-primary font-medium">full-time</span> opportunities!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
