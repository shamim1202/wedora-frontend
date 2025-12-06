import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isLoggedIn = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <motion.nav 
      initial={{ backgroundColor: 'rgba(250, 247, 242, 0)' }}
      animate={{ 
        backgroundColor: scrolled 
          ? 'rgba(250, 247, 242, 0.95)' 
          : 'rgba(250, 247, 242, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        boxShadow: scrolled 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
          : '0 0 0 0 rgba(0, 0, 0, 0)'
      }}
      transition={{ duration: 0.3 }}
      className="dark:bg-background-dark fixed w-full z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Left: Logo & Brand */}
        <div className="flex items-center space-x-2">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3C19.5376 3 22 5.5 22 8.5C22 10.71 20.71 12.55 18.88 13.54C18.6195 13.7202 18.3243 13.8446 18.0125 13.9056C17.6946 13.9678 17.368 13.9649 17.05 13.9C16.5 13.75 16 13.5 15.5 13.25C14.73 12.86 13.91 12.35 13.14 11.75C12.1693 11.0044 11.0854 10.4283 9.94 10.05C8.75 9.66 7.5 9.5 6.25 9.5C3.35786 9.5 1 11.8579 1 14.75C1 17.6421 3.35786 20 6.25 20C8.51 20 10.47 18.5 11.23 16.59C11.39 16.15 11.79 15.86 12.25 15.86C12.79 15.86 13.25 16.32 13.25 16.86C13.25 17.05 13.21 17.23 13.14 17.4C12.15 19.88 9.43 21.5 6.25 21.5C2.5335 21.5 0 18.4665 0 14.75C0 11.0335 2.5335 8 6.25 8C7.62 8 8.91 8.21 10.06 8.59C11.36 9.02 12.59 9.68 13.68 10.5C14.53 11.16 15.42 11.73 16.27 12.14C16.94 12.44 17.5 12.63 18 12.77V12.78C19.56 11.69 20.5 10.18 20.5 8.5C20.5 6.33 18.67 4.5 16.5 4.5C14.83 4.5 13.38 5.66 12.83 7.15C12.7 7.53 12.31 7.8 11.88 7.8C11.33 7.8 10.88 7.34 10.88 6.8C10.88 6.62 10.91 6.45 10.97 6.28C11.69 4.3 13.9 3 16.5 3Z"></path>
          </svg>
          <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white font-playfair">Wedora</span>
        </div>

        {/* Middle: Nav Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            Contact
          </a>
          {isLoggedIn && (
            <a href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Dashboard
            </a>
          )}
        </div>

        {/* Right: Auth Buttons / Profile - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5 transition-all">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                  JD
                </div>
                <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">John Doe</span>
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">john@example.com</p>
                </div>
                <a href="/profile" className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                  Profile
                </a>
                <a href="/settings" className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                  Settings
                </a>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <button className="block w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <a
              href="/login"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-focus transition-colors"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <motion.button 
          onClick={toggleMenu} 
          className="lg:hidden text-gray-800 dark:text-white z-50 relative"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-background-light dark:bg-background-dark shadow-2xl lg:hidden z-40 pt-20"
            >
              <div className="flex flex-col h-full px-6 py-8 space-y-6">
                <motion.a 
                  href="#home" 
                  custom={0}
                  variants={menuItemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                  onClick={toggleMenu}
                >
                  Home
                </motion.a>
                <motion.a 
                  href="#services" 
                  custom={1}
                  variants={menuItemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                  onClick={toggleMenu}
                >
                  Services
                </motion.a>
                <motion.a 
                  href="#about" 
                  custom={2}
                  variants={menuItemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                  onClick={toggleMenu}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#contact" 
                  custom={3}
                  variants={menuItemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                  onClick={toggleMenu}
                >
                  Contact
                </motion.a>
                
                {isLoggedIn && (
                  <motion.a 
                    href="/dashboard" 
                    custom={4}
                    variants={menuItemVariants}
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </motion.a>
                )}
                
                <motion.div
                  custom={5}
                  variants={menuItemVariants}
                  className="pt-4 space-y-4"
                >
                  {isLoggedIn ? (
                    <>
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                          JD
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
                        </div>
                      </div>
                      <a
                        href="/profile"
                        className="block text-center px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={toggleMenu}
                      >
                        Profile
                      </a>
                      <button
                        className="block w-full text-center px-6 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        onClick={toggleMenu}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <a
                      href="/login"
                      className="block bg-primary text-white px-6 py-3 rounded-full text-center font-medium hover:bg-primary-focus transition-colors"
                      onClick={toggleMenu}
                    >
                      Login
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
