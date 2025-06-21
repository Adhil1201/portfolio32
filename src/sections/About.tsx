import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'Java', 'SQL', 'Git', 'MongoDB', 'Express.js'
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <ScrollReveal delay={0.2}>
                  <h3 className="text-2xl font-semibold text-white">Education & Background</h3>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={0.3}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Recently graduated with a Bachelor of Computer Applications (BCA), I am passionate about leveraging technology to solve real-world problems. My academic journey has equipped me with a strong foundation in programming, database management, and software development methodologies.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in full-stack web development, with experience in building dynamic applications, implementing complex algorithms, and creating user-friendly interfaces. My goal is to continue growing as a developer while contributing to innovative projects.
                </p>
                
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Code size={24} className="text-white" />
                </div>
                <ScrollReveal delay={0.2}>
                  <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
                </ScrollReveal>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill} delay={index * 0.1}>
                    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                      <span className="text-white font-medium">
                        {skill}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <div className="flex items-center gap-4 mt-8">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                    <Lightbulb size={24} className="text-white" />
                  </div>
                  <div>
                    <ScrollReveal delay={0.6}>
                      <h4 className="text-xl font-semibold text-white mb-2">Always Learning</h4>
                    </ScrollReveal>
                    <ScrollReveal delay={0.7}>
                      <p className="text-gray-300">
                        Continuously exploring new technologies and best practices to stay current in the ever-evolving tech landscape.
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;