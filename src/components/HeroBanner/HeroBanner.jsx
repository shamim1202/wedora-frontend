import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center py-6 md:py-14">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/*================> Left: Text Content <================*/}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10 order-2 lg:order-1">
          <div className="hidden lg:block absolute -top-16 left-0 lg:-left-8 opacity-50 dark:opacity-30">
            <svg
              fill="none"
              height="60"
              viewBox="0 0 100 100"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0L61.2257 23.4339L85.3553 29.2893L70.1777 48.5281L72.3607 72.868L50 63.4339L27.6393 72.868L29.8223 48.5281L14.6447 29.2893L38.7743 23.4339L50 0Z"
                fill="#FBCFE8"
              ></path>
              <path
                d="M25 50L30.6129 61.717L44.1777 64.6447L35.0888 74.2641L36.1803 87.934L25 83.217L13.8197 87.934L14.9112 74.2641L5.82233 64.6447L19.3871 61.717L25 50Z"
                fill="#FBCFE8"
              ></path>
            </svg>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent dark:text-white leading-tight"
          >
            Let's Plan for
            <br />
            Your Dream
            <br />
            <span className="text-primary relative inline-block">
              Wedding{" "}
              <span className="text-2xl sm:text-3xl lg:text-4xl text-primary my-4 sm:my-6 inline-block">
                ♥
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="max-w-md mx-auto lg:mx-0 text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base px-4 sm:px-0">
              We will help you to success your dream wedding plan. If you have
              any plan feel free to ask us we will try to do our best to make
              your all the moment memorable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 sm:mt-8 lg:mt-10"
          >
            <a
              className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:bg-primary-focus transition-transform hover:scale-105 inline-block shadow-lg"
              href="#"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/*================> Right: Image Section <================*/}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2">
          <div className="hidden sm:block absolute -bottom-8 -right-8 opacity-50 dark:opacity-30 z-0">
            <svg
              fill="none"
              height="60"
              viewBox="0 0 100 100"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0L61.2257 23.4339L85.3553 29.2893L70.1777 48.5281L72.3607 72.868L50 63.4339L27.6393 72.868L29.8223 48.5281L14.6447 29.2893L38.7743 23.4339L50 0Z"
                fill="#FBCFE8"
              ></path>
              <path
                d="M25 50L30.6129 61.717L44.1777 64.6447L35.0888 74.2641L36.1803 87.934L25 83.217L13.8197 87.934L14.9112 74.2641L5.82233 64.6447L19.3871 61.717L25 50Z"
                fill="#FBCFE8"
              ></path>
            </svg>
          </div>

          <div className="relative w-[240px] h-[360px] sm:w-[280px] sm:h-[420px] md:w-[320px] md:h-[480px] lg:w-[350px] lg:h-[525px]">
            {/* Main image container with border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full rounded-t-[180px] sm:rounded-t-[225px] rounded-b-[180px] sm:rounded-b-[225px] overflow-hidden shadow-2xl shadow-pink-200/50 dark:shadow-pink-900/20 border-4 border-pink-300 dark:border-pink-500"
            >
              <img
                alt="Happy Indian couple in traditional wedding attire"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XbGqGW-Iandjk13mS0BHALighJs7v-dRR-JcYzVfUJBdNWUxnWDCDeiprJg8xiC-lVqtWJzAweTtgvEyW4Rl_fpSd_S7fWTQJxPLigaS2B7hBxWfz8SYnHd2OzpaoLjkjiDjbRo77exrZCsmneZvQ5Pex-eWOjxbhm0uxp6qArN8RatSuzBiSBs1Wgyfcxxo91h9ZriAKMmG0RJjzKGUbL9TzUYsGpn9qLQlsVWtHBB3WnBRIK4lAa8AcZf_Ct16W7Uv7OQF4eP3"
              />
            </motion.div>

            {/* Small circular image with rotation animation */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[15%] left-[-10%] sm:left-[-12%] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border-3 sm:border-4 border-white dark:border-gray-800 rounded-full shadow-lg z-20 overflow-hidden"
            >
              <img
                alt="A beautiful wedding bouquet with white roses"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGPcB2fM08MB6Rcm_O4_IgFpWkmjRX1wDL6aNZtEU9oLdFdBqVKXvvb5qubfbmSLroGzVRlrKDjWVDMCPCAOOcWCZ_0HIkDU6UEN7Hk-jTMHpYZGxljUTJQPbBrwZQwDfnF9S-lEzJsBKQUfX5Rn3qnpUrrMi1KnuUvO6FFohJH3c8Kvz1ZhEUzyZptEi9IuudGhyjeSvR20R47wlbTJeYQKPiCo_hd2uDdUGMmdmXaEJ66rcHaTGMfNfSC76P2Ypyrj_P3SgSTX9C"
              />
            </motion.div>

            {/* Decorative arrow */}
            <div className="hidden sm:block absolute bottom-[20%] left-[-8%] z-10">
              <svg
                fill="none"
                height="60"
                viewBox="0 0 100 100"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M99 1C77.8333 13.1667 36 43.4 1 89"
                  stroke="#F472B6"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
