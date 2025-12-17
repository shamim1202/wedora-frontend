import { motion } from "framer-motion";
import { Link } from "react-router";

const ServiceCard = ({ service, i }) => {
    return (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
        >
            {/* >==>===>===> Image Container <===<===<==< */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mb-6"
            >
                <div className="absolute inset-0 bg-pink-100/70 dark:bg-gray-800 rounded-t-full"></div>
                <img
                    alt={service.alt}
                    className="relative w-full h-full object-cover rounded-t-full z-10 shadow-lg"
                    src={service.image}
                />
            </motion.div>

            {/* >==>===>===> Service Info <===<===<==< */}
            <div className="space-y-4">
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-accent dark:text-white px-2">
                    {service.service_name}
                </h3>
                <Link
                    to={`${service._id}`}
                    className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium border-2 border-primary/30 rounded-full transition-all duration-300 bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    )
}
export default ServiceCard;