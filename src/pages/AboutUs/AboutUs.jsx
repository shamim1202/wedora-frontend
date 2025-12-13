import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-linear-to-br from-pink-50/50 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-playfair font-semibold text-secondary dark:text-white mb-4">
          About <span className="text-primary font-bold">Us</span>
        </h1>
        <p className="text-sm sm:text-base text-accent dark:text-gray-300 max-w-2xl mx-auto">
          Crafting Moments, Designing Memories. Transforming your visions into
          breathtaking celebrations.
        </p>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary dark:text-white mb-4">
          💍 Who We Are
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Wedora is designed for local decoration companies and professional
          decorators who want to serve clients better in today’s digital world.
          We combine creativity, technology, and professional coordination to
          make booking decoration services easy, transparent, and reliable.
          Whether you prefer in-studio consultation or on-site decoration
          services, Wedora ensures smooth planning, clear communication, and
          timely execution.
        </p>
      </motion.div>

      {/* What We Do */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary dark:text-white mb-4">
          🌟 What We Do
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Explore curated wedding and event decoration packages</li>
          <li>Check real-time availability of decorators and services</li>
          <li>Book services for your preferred date and location</li>
          <li>Track project progress step-by-step</li>
          <li>Make secure online payments</li>
          <li>Stay updated with real-time service status</li>
        </ul>
      </motion.div>

      {/* Why Choose Wedora */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary dark:text-white mb-4">
          🚀 Why Choose Wedora
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            Smart Booking System – No more long waiting times or walk-in
            confusion
          </li>
          <li>
            Professional Decorators – Verified experts with real experience
          </li>
          <li>Transparent Pricing – Clear costs with no hidden charges</li>
          <li>Real-Time Updates – Know exactly where your project stands</li>
          <li>Modern Dashboard – Easy management for admins and decorators</li>
          <li>
            Mobile Responsive – Book and manage services anytime, anywhere
          </li>
        </ul>
      </motion.div>

      {/* Our Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary dark:text-white mb-4">
          🎯 Our Vision
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Our vision is to modernize the event decoration industry by making
          services more accessible, organized, and customer-focused. We aim to
          empower local decoration businesses with digital tools while
          delivering unforgettable experiences to clients.
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-semibold">
          🤝 At Wedora, we don’t just decorate spaces — we create moments that
          last a lifetime.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
