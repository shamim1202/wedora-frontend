import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Shared/Loading/Loading";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const { data: services = [], isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosSecure.get("services");
      return res.data;
    },
  });
  if (isLoading) return <Loading></Loading>
  if (isError) return <ErrorPage></ErrorPage>
  
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-20 bg-linear-to-br from-pink-100/40 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="sm:max-w-2xl mx-auto font-playfair text-2xl md:text-5xl font-semibold text-secondary dark:text-secondary mb-3 sm:mb-4">
            Perfect <span className="font-bold text-primary">Wedding</span>{" "}
            Solutions for Every{" "}
            <span className="font-bold text-primary">Couple</span>
          </h2>
          <p className="text-sm sm:text-base text-accent dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive wedding services tailored to make your
            special day perfect
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
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
          ))}
        </div>

        {/* See All Services Button */}
        {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-4 md:mt-8"
          >
            <Link
              to="/services"
              className="px-8 py-3 text-base font-semibold bg-primary text-white rounded-full shadow-lg hover:bg-primary-focus transition-all duration-300"
            >
              See All Services
            </Link>
          </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
