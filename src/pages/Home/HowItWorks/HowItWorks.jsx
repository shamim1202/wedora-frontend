import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaUserTie,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router";


const steps = [
  {
    icon: <FaSearch />,
    title: "Explore Decoration Services",
    desc: "Browse our curated wedding and event decoration packages tailored to your needs.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Select Date & Location",
    desc: "Choose your preferred date, time, and event location with real-time availability.",
  },
  {
    icon: <FaUserTie />,
    title: "Get Assigned Decorator",
    desc: "We assign professional decorators based on expertise and availability.",
  },
  {
    icon: <FaTruck />,
    title: "On-Site Decoration Setup",
    desc: "Our team arrives at your venue and starts decoration as planned.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Event Completed Successfully",
    desc: "Enjoy your special day while we ensure everything is perfectly done.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-pink-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-5xl font-playfair font-semibold text-secondary mb-4">
            How Wedora Works
          </h1>
          <p className="max-w-2xl mx-auto text-accent text-sm md:text-base">
            From booking to beautiful decoration — we handle everything
            seamlessly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Status Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-playfair text-center text-secondary mb-6">
            On-Site Service Status Flow
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Assigned",
              "Planning Phase",
              "Materials Prepared",
              "On the Way To Venue",
              "Setup in Progress",
              "Completed",
            ].map((status, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm"
              >
                {status}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-accent mb-4">
            Ready to Book Your Decoration Service?
          </h3>
          <Link
            to="/services"
            className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:bg-primary/90 transition"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
