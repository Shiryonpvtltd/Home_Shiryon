import './index.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Career from './pages/Career';
import CustomCursor from './components/ui/CustomCursor';
import Logo from './assets/logo.png';
import Navbar from './components/layout/Navbar';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [showLogo, setShowLogo] = useState(false);
  
  useEffect(() => {
    // Simulate initial loading
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // const logoTimer = setTimeout(() => {
    //   setShowLogo(true);
    // }, 6000);

    return () => {
      clearTimeout(loaderTimer);
      // clearTimeout(logoTimer);
    };
  }, []);

  return (
    <Router>
      <div className="relative overflow-hidden">
        {/* Custom cursor */}
        <CustomCursor />

        {/* Initial loading animation */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              className="fixed inset-0 bg-black flex items-center justify-center z-50"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.6, 0.7], 
                  scale: [0.9, 1.2, 0.95, 1]  
                }}
                transition={{ 
                  duration: 1.5,
                  times: [0, 0.3, 0.6, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-60 h-60 relative "
              >
                <div className="absolute inset-0 border-4 border-red-500 rounded-full opacity-30"></div>
                <div className="absolute inset-0 border-t-4 border-white rounded-full animate-ping"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={Logo} 
                    alt="SHIRYON" 
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;