import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

type NavItem = {
  name: string;
  href: string;
  isExternal?: boolean;
};

const navItems: NavItem[] = [
  { name: 'What We Build', href: '/#what-we-build' },
  { name: 'Our Goal', href: '/#Whatwearebuilding' },
  { name: 'Our Strategy', href: '/#ourstatergy' },
  { name: 'Three Pillars', href: '/#threepillars' },
  { name: 'Our Vision', href: '/#vision' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Careers', href: '/careers' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      clipPath: 'circle(0px at calc(100% - 44px) 44px)',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 44px) 44px)',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      // If we're on a different page, first navigate to home
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // If we're already on home, just scroll to the section
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 right-0 w-full z-20">
      {/* Compact Glossy Navbar */}
      <div className="w-full h-18 flex items-center justify-between px-4 md:px-8 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
          <span className="text-white text-2xl font-cursive">Shiryon</span>
        </Link>

        {/* Hamburger and Close Buttons */}
        <div className="relative">
          {/* Hamburger Button */}
          <button
            className={`w-12 h-12 rounded-full flex flex-col justify-center items-center z-[100] transition-all duration-300 ${
              isOpen ? 'opacity-0' : scrolled ? 'bg-red-500' : 'bg-black bg-opacity-50'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-5 h-0.5 bg-white block" />
              <span className="w-5 h-0.5 bg-white block" />
              <span className="w-5 h-0.5 bg-white block" />
            </div>
          </button>

          {/* Close Button */}
          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center z-[100] transition-all duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } bg-red-500 absolute top-0 right-0`}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className="absolute w-5 h-0.5 bg-white block transform rotate-45 translate-y-0" />
              <span className="absolute w-5 h-0.5 bg-white block transform -rotate-45 translate-y-0" />
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[72px] left-0 right-0 bottom-0 bg-black bg-opacity-95 z-[90]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="h-full flex items-center justify-center">
              <ul className="text-center space-y-8">
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    {item.href.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="text-3xl text-white hover:text-red-500 transition-colors"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-3xl text-white hover:text-red-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
