import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Rocket, Star, Globe, Database } from 'lucide-react';

interface VelocityItem {
  icon: React.ReactNode;
  text: string;
}

const OptimizedScrollVelocity: React.FC = memo(() => {
  const velocityItems: VelocityItem[] = [
    { icon: <Code size={20} />, text: "Full-Stack Development" },
    { icon: <Zap size={20} />, text: "Modern JavaScript" },
    { icon: <Rocket size={20} />, text: "React & Node.js" },
    { icon: <Star size={20} />, text: "UI/UX Design" },
    { icon: <Globe size={20} />, text: "Web Applications" },
    { icon: <Database size={20} />, text: "Database Management" },
    { icon: <Code size={20} />, text: "Python & Java" },
    { icon: <Zap size={20} />, text: "API Development" },
  ];

  // Memoize the velocity items to prevent re-renders
  const VelocityRow = memo(({ items, direction, colorClass }: { 
    items: VelocityItem[], 
    direction: 'right' | 'left',
    colorClass: string 
  }) => (
    <div className={`flex ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} whitespace-nowrap`}>
      {[...items, ...items].map((item, index) => (
        <div
          key={`${direction}-${index}`}
          className="flex items-center gap-2 mx-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white min-w-max"
        >
          <div className={`${colorClass} flex-shrink-0`}>
            {item.icon}
          </div>
          <span className="font-medium text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  ));

  VelocityRow.displayName = 'VelocityRow';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="w-full overflow-hidden pointer-events-none py-8"
    >
      <div className="space-y-4">
        <VelocityRow 
          items={velocityItems} 
          direction="right" 
          colorClass="text-purple-400" 
        />
        <VelocityRow 
          items={velocityItems.slice().reverse()} 
          direction="left" 
          colorClass="text-cyan-400" 
        />
      </div>
    </motion.div>
  );
});

OptimizedScrollVelocity.displayName = 'OptimizedScrollVelocity';

export default OptimizedScrollVelocity;