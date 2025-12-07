import { motion } from 'framer-motion';

const TopService = () => {
  const services = [
    {
      title: "Pre Wedding Photography Plan",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvqYAHRCrWSCbukubvje2AsxFn9cVbl30d-SveGSW4XrK29THyoxqC0MrrNPjY3zRRbsZCi4kSqyxNP8IyMVeQ0zQHY2SPTB1oP_5vtAyGobQ61ihB8UglKX8i1RSRWda-5WnwNguiwIj-WeUjk_Fts9Q3kE57hEPeiBYQPPHDuudyyUQ1kDQZjBwvr_SVq7gSTMm6z0j9OYjL3wMKjpZKzaSitqebiWT8wGwqv3_ufFWbhW4lYU6qBM_M8MD-gz1UmDyFmUxNpM4",
      alt: "A couple walking on a beach at sunset"
    },
    {
      title: "Full Wedding Idea & Planning",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPk3RdK0hZMcYvuDDVoTd2pnDAzRVfRVCyMPHOy2zDvQEUHcSEs3kc3HGpcxgTeohN5PyTTJ3t1Ng7CU3WMuzp8ZctSLSmJ3vk1bPjPg3-PSeI1nP8s5seTDJV5k1gjSX6D24f5x5erFWrf1BxSOSDEQ860OcJ_nOH4ZryNcclCdX22F8xU4HHbIEVqobd7bTLX7nDKexagkJpG-PIpczfXn7AVtkKDDNtAlZGOnGi_Lp_sJVo1w46Go8qH-zIIieAmD0X8D0ZPPo",
      alt: "An outdoor wedding aisle decorated with flowers"
    },
    {
      title: "Inside Wedding Place Booking",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfqwCY1hMdGXxMAz_hVCM5kOTFvFLSJJFXPMoKbBrSUVt0C2dLszf8H48DF-cE5OneInxSzExAz3nebMALtWjIfXmhAdPpo554wCsnZnUiDpLQE4j4kTRw7AopwDjVRwoUUYWfcQG04YmtGGhm1ylP36a_pwBEK8JBxgo0334tY2PXUi0FUjxVCaxQrKTwNlgmZRMhnndjNNIcRMI8YSafVAbO2-xqObXllOk98yTA6v4mjGsZLbaBuMgZJp2zP1pKsrFpkrEM-lM",
      alt: "A bride and groom inside an elegant wedding venue hall"
    },
    {
      title: "Outside Wedding Place Booking",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAoTPCJebThouSHhyGpPAPI_luyaOHcJt3g9Rec7drLEzRT4mVtrlbwwX4z0xijOJMuXw5mPxQFrV2HRcM1XYv4zQD2ITe1vHRCtgKnddz2FUVcUh661VlJFU0GQ-B7C30WCkcgbp3xQs1QFQfTFyAjz0Xr8gVIFjpdI_H5L3tHez3Aod7CPuYH86kZ6tD472r1I0__wdbJ4_LOHeYk2u-fhMsW7INX9pez0SuzYMTHA7ntuEfcAgbKeNpFnpQVpA7FTSvG6eIoc8",
      alt: "Two empty chairs decorated with flowers for an outdoor wedding"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50/50 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            All Your Need is <span className="text-primary">Here</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive wedding services tailored to make your special day perfect
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mb-6"
              >
                <div className="absolute inset-0 bg-pink-100 dark:bg-gray-800 rounded-t-full"></div>
                <img 
                  alt={service.alt}
                  className="relative w-full h-full object-cover rounded-t-full z-10 shadow-lg"
                  src={service.image}
                />
              </motion.div>

              {/* Service Info */}
              <div className="space-y-4">
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900 dark:text-white px-2">
                  {service.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 text-sm font-medium border-2 border-primary/30 rounded-full transition-all duration-300 bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-base font-semibold bg-primary text-white rounded-full shadow-lg hover:bg-primary-focus transition-all duration-300"
          >
            See All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopService;
