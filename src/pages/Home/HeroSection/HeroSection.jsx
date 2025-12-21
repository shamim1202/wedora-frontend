import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/zWvpRvdQ/photo-1529634806980-85c3dd6d34ac.jpg?auto=format&fit=crop&w=1470&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white"
        >
          Elegant <span className="text-secondary">Wedding Decorations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-sm md:text-base text-gray-200"
        >
          Creating unforgettable wedding moments with premium decorations,
          artistic designs, and professional event styling across Bangladesh.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/services"
            className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Decoration Service
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Consultation
          </Link>
        </motion.div>
      </div>

      {/* Floating Decorative Shape */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl"
      />
    </section>
  );
};

export default HeroSection;
