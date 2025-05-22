import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OpportunitiesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-red-950 overflow-hidden py-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 mix-blend-multiply" />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 lg:px-8 z-10 mb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Explore Career Opportunities
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Join Our Team and Shape the Future of Fitness Innovation
        </motion.p>
      </motion.div>

      {/* Sample Job Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-2xl mx-auto px-4 mb-12 z-10"
      >
        <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Senior Product Designer</h3>
              <p className="text-red-400">Full-time • Remote</p>
            </div>
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">Design</span>
          </div>
          <p className="text-gray-300 mb-4">
            Lead the design of innovative fitness wear that combines style, functionality, and technology. 
            Work with cross-functional teams to create products that revolutionize the fitness industry.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm">Figma</span>
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm">UI/UX</span>
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm">Product Design</span>
          </div>
          <button
            onClick={() => navigate('/careers')}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20"
          >
            Apply for this Position
          </button>
        </div>
      </motion.div>

      {/* View All Jobs Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="z-10"
      >
        <button
          onClick={() => navigate('/careers')}
          className="inline-flex items-center gap-2 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View All Open Positions
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default OpportunitiesSection; 