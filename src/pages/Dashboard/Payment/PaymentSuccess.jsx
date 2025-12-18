import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { tr } from "framer-motion/client";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?success=true&session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100/40 via-white to-pink-50/30 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center"
      >
        <FaCheckCircle className="text-green-500 text-3xl md:text-6xl mx-auto mb-4" />

        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-secondary mb-3">
          Payment Successful!
        </h2>

        <p className="text-accent text-sm md:text-base mb-6">
          Thank you for your payment. Your booking has been confirmed and our
          team will contact you shortly to proceed with the event planning.
        </p>

        <div>
          <h3 className="font-semibold md:text-lg text-accent mb-3">
            <span className="font-bold">Transaction Id</span> :{" "}
            {paymentInfo?.transactionId}
          </h3>
          <h3 className="font-semibold md:text-lg text-accent mb-3">
            <span className="font-bold">Tracking Id</span> :{" "}
            {paymentInfo?.trackingId}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/dashboard/bookings"
            className="btn btn-sm md:btn-md bg-primary/90 text-white hover:bg-primary rounded-full"
          >
            View My Bookings
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

export default PaymentSuccess;
