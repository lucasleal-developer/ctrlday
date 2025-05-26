import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TechParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const techSymbols = ['⚡', '🔧', '⚙️', '💻', '🖥️', '📱', '🎮', '🤖', '🚀', '💡', '🔬', '🎯'];
    const colors = ['text-purple-400', 'text-blue-400', 'text-green-400', 'text-orange-400', 'text-pink-400'];
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: Math.random() * 20 + 15
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} opacity-20`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
      
      {/* Partículas de código flutuantes */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-purple-300 font-mono text-sm opacity-20"
        animate={{
          y: [0, -200, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1
        }}
      >
        function ctrlDay() {'{'}
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-1/3 text-blue-300 font-mono text-sm opacity-20"
        animate={{
          y: [0, -150, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2
        }}
      >
        console.log("Hello World!");
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/2 text-green-300 font-mono text-sm opacity-20"
        animate={{
          y: [0, -180, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 3
        }}
      >
        {'<div className="awesome">'}
      </motion.div>
      
      {/* Linhas de conexão animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 100,100 Q 200,50 300,100 T 500,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 50,200 Q 150,150 250,200 T 450,200"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechParticles;
