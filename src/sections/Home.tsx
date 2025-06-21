import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText';
import ShinyText from '../components/ShinyText';
import ScrollReveal from '../components/ScrollReveal';
import { ChevronDown, Code, Zap, Rocket, Star, Globe, Database } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const velocityItems = [
    { icon: <Code size={24} />, text: "Full-Stack Development" },
    { icon: <Zap size={24} />, text: "Modern JavaScript" },
    { icon: <Rocket size={24} />, text: "React & Node.js" },
    { icon: <Star size={24} />, text: "UI/UX Design" },
    { icon: <Globe size={24} />, text: "Web Applications" },
    { icon: <Database size={24} />, text: "Database Management" },
    { icon: <Code size={24} />, text: "Python & Java" },
    { icon: <Zap size={24} />, text: "API Development" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <ShinyText 
              text="Hello, I'm Adhil" 
              speed={8}
              className="text-6xl md:text-8xl"
            />
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-8"
        >
          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              BCA Graduate & Software Developer
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative software solutions and bringing ideas to life through code. Specialized in modern web technologies and system development.
            </p>
          </ScrollReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ScrollReveal delay={0.6}>
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
          </ScrollReveal>
          
          <ScrollReveal delay={0.7}>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </ScrollReveal>
        </motion.div>
      </div>

      {/* Scrolling Velocity Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-24 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <div className="relative">
          {/* First row - moving right */}
          <div className="flex animate-scroll-right whitespace-nowrap mb-4">
            {[...velocityItems, ...velocityItems].map((item, index) => (
              <div
                key={`right-${index}`}
                className="flex items-center gap-3 mx-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white min-w-max"
              >
                <div className="text-purple-400 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Second row - moving left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...velocityItems.slice().reverse(), ...velocityItems.slice().reverse()].map((item, index) => (
              <div
                key={`left-${index}`}
                className="flex items-center gap-3 mx-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white min-w-max"
              >
                <div className="text-cyan-400 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 cursor-pointer"
          onClick={() => onNavigate('about')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;