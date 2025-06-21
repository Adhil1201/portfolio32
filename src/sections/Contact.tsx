import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:adhiladhil17011@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <ScrollReveal delay={0.2}>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Let's Connect
                  </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities, collaborating on projects, or just having a conversation about technology and development.
                  </p>
                </ScrollReveal>
              </div>

              <div className="space-y-6">
                <ScrollReveal delay={0.4}>
                  <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:adhiladhil17011@gmail.com"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        adhiladhil17011@gmail.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Status</h4>
                      <span className="text-green-400 font-medium">
                        Available for opportunities
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <ScrollReveal delay={0.2}>
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </ScrollReveal>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;