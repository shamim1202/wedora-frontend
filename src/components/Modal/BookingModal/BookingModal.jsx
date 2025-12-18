import { motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const BookingModal = ({
  isOpen,
  onClose,
  user,
  service,
  onSubmit,
  blockedDates = [],
}) => {
  if (!isOpen) return null;

  const [selectedDate, setSelectedDate] = useState(null);
  const disabledDates = blockedDates.map((d) => new Date(d));
  const navigate = useNavigate();

  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        variants={modal}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 hover:cursor-pointer"
        >
          <ImCross />
        </button>

        <h2 className="text-lg md:text-2xl font-playfair font-semibold text-accent dark:text-white mb-3 md:mb-5">
          Book: <span className="text-secondary">{service.service_name}</span>
        </h2>

        {/* Form Start */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const bookingData = {
              userEmail: user.email,
              userName: user.displayName,
              rate: service.cost,
              bookingType: service.unit,
              serviceId: service._id,
              serviceName: service.service_name,
              date: selectedDate.toISOString().split("T")[0],
              location: e.target.location.value,
            };
            Swal.fire({
              title: "Are you sure?",
              text: `You want to Book this ${service.service_name} service?`,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Confirm!",
            }).then((result) => {
              if (result.isConfirmed) {
                onSubmit(bookingData);
                Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: `Your booking for ${service.service_name} is confirmed.`,
                  timer: 2000,
                  showConfirmButton: false,
                });
                navigate("/dashboard/bookings");
              }
            });
          }}
          className="space-y-4"
        >
          {/* >===>===>====> Name <===<====<===< */}
          <div>
            <label className="block mb-1 text-sm md:text-base md:font-semibold">
              Your Name
            </label>
            <input
              type="text"
              value={user.displayName}
              disabled
              className="input input-bordered w-full dark:bg-gray-800 bg-primary/20"
            />
          </div>

          {/* >===>===>====> Email <===<====<===< */}
          <div>
            <label className="block mb-1 text-sm md:text-base md:font-semibold">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="input input-bordered w-full dark:bg-gray-800 bg-primary/20"
            />
          </div>

          <div className="flex flex-row gap-2 md:gap-4 ">
            {/* >===>===>====> Rate <===<====<===< */}
            <div className="flex-1">
              <label className="block mb-1 text-sm md:text-base md:font-semibold">
                Rate
              </label>
              <input
                type="number"
                value={service.cost}
                disabled
                className="input input-bordered w-full dark:bg-gray-800 bg-primary/20"
              />
            </div>

            {/* >===>===>====> Booking Section Type <===<====<===< */}
            <div className="flex-1">
              <label className="block mb-1 text-sm md:text-base md:font-semibold">
                Unit
              </label>
              <input
                type="text"
                value={service.unit}
                disabled
                className="input input-bordered w-full dark:bg-gray-800 bg-primary/20"
              />
            </div>
          </div>

          {/* >===>===>====> Booking Date <===<====<===< */}
          <div>
            <label className="block mb-1 text-sm md:text-base md:font-semibold">
              Booking Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              filterDate={
                (date) =>
                  !disabledDates.some(
                    (blocked) => blocked.toDateString() === date.toDateString()
                  )
                // !blockedDates.includes(date.toISOString().split("T")[0])
              }
              placeholderText="Select a date"
              className="input input-bordered w-full dark:bg-gray-800"
              dateFormat="yyyy-MM-dd"
            />
            {disabledDates.length > 0 && (
              <p className="text-xs text-red-500 mt-1">
                ⚠ Some dates are unavailable for this service.
              </p>
            )}
          </div>

          {/* >===>===>====> Location <===<====<===< */}
          <div>
            <label className="block mb-1 text-sm md:text-base md:font-semibold">
              Event Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Dhaka, Banani, House-12..."
              required
              className="input input-bordered w-full dark:bg-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full btn btn-sm md:btn-md btn-secondary hover:btn-primary transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingModal;
