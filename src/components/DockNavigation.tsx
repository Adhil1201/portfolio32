import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface DockNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DockNavigation: React.FC<DockNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'about', icon: <User size={24} />, label: 'About' },
    { id: 'projects', icon: <FolderOpen size={24} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={24} />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative p-3 rounded-xl transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10"
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.nav>
    </div>
  );
};

export default DockNavigation;