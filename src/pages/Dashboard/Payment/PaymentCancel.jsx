import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-white to-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center"
      >
        <FaTimesCircle className="text-red-500 text-3xl md:text-6xl mx-auto mb-4" />

        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-secondary mb-3">
          Payment Cancelled
        </h2>

        <p className="text-accent text-sm md:text-base mb-6">
          Your payment process was cancelled. No amount has been charged. You
          can try again anytime from your booking dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/dashboard/bookings"
            className="btn btn-sm md:btn-md bg-primary/90 text-white hover:bg-primary rounded-full"
          >
            Retry Payment
          </Link>

          <Link
            to="/"
            className="btn btn-sm md:btn-md btn-outline btn-secondary rounded-full hover:text-white"
          >
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCancel;
