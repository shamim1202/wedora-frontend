import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  console.log(user)

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const handleLogout = () => {
    logOut()
    .then()
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/*===============> Left: Logo & Brand <===================*/}
        <div className="flex items-center space-x-2">
          <Logo></Logo>
        </div>

        {/*=============> Middle: Nav Links - Desktop <=============*/}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to="/coverage"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Coverage
          </Link>
          <Link
            to="/about"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Contact
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/*=======> Right: Auth Buttons / Profile - Desktop <========*/}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5 transition-all">
                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full"/>
                <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">
                  {user.displayName}
                </span>
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {user.email}
                  </p>
                </div>
                <a
                  href="/profile"
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Settings
                </a>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <button className="block w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-focus transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-focus transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/*===================> Mobile menu button <==================*/}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 dark:text-white z-50 relative"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/*==================> Mobile Menu Overlay <===================*/}
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
            />

            {/* Slide-in Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-fit w-[50vw] bg-rose-100/10 dark:bg-background-dark shadow-3xl md:hidden z-40 pt-10"
            >
              <div className="flex flex-col h-full px-6 py-4 space-y-3 bg-rose-50/70 text-black rounded-2xl">
                <Link to="/" className="text-lg">
                  Home
                </Link>
                <Link to="/services" className="text-lg">
                  Services
                </Link>
                <Link to="/about" className="text-lg">
                  About
                </Link>
                <Link to="/contact" className="text-lg">
                  Contact
                </Link>

                {user && (
                  <Link
                    to="/dashboard"
                    custom={4}
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                )}

                <div className="pt-2 space-y-4">
                  {user ? (
                    <button
                      className="block w-full text-center px-6 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block bg-primary text-white px-6 py-2 rounded-full text-center font-medium hover:bg-primary-focus transition-colors"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
