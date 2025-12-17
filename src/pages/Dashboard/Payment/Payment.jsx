import { motion } from "framer-motion";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

const Payment = () => {
  const { bookingId } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: booking = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      serviceName: booking.serviceName,
      cost: booking.rate,
      bookingId: bookingId,
      userEmail: booking.userEmail,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
  };

  if (isLoading) return <Loading></Loading>;
  if (isError) return <ErrorPage></ErrorPage>;

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100/40 via-white to-pink-50/30 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10"
      >
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-secondary mb-6 text-center">
          Complete Your <span className="text-primary">Payment</span>
        </h2>

        {/* Booking Summary */}
        <div className="border rounded-xl p-5 mb-6 bg-pink-50">
          <h3 className="font-semibold text-lg text-accent mb-3">
            Booking Summary
          </h3>

          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="font-medium">Service:</span>{" "}
              {booking.serviceName}
            </p>
            <p>
              <span className="font-medium">Event Date:</span> {booking.date}
            </p>
            <p>
              <span className="font-medium">Location:</span> {booking.location}
            </p>
            <p>
              <span className="font-medium">Amount:</span>{" "}
              <span className="text-green-600 font-semibold">
                {booking.rate}
              </span>
            </p>
          </div>
        </div>

        {/* Payment Status */}
        {booking.paymentStatus === "paid" ? (
          <div className="text-center">
            <span className="inline-block px-6 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
              ✔ Payment Completed
            </span>
          </div>
        ) : (
          <>
            {/* Stripe Placeholder */}
            <div className="border-2 border-dashed rounded-xl p-6 mb-6 text-center text-gray-500">
              Stripe Card Element Will Be Here
            </div>

            <button
              onClick={handlePayment}
              className="w-full btn btn-sm md:btn-md bg-primary text-white hover:bg-primary/90 rounded- transition-all"
            >
              Pay Now
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Payment;
