import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import Loading from "../Shared/Loading/Loading";
import { useState } from "react";
import BookingModal from "../../components/Modal/BookingModal/BookingModal";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: service = {} } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`services/${id}`);
      return res.data;
    },
  });

  const { data: blockedDates = [] } = useQuery({
    queryKey: ["blockedDates", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-dates/${id}`);
      return res.data;
    },
  });

  const handleBooking = async (data) => {
    const res = await axiosSecure.post("/bookings", data);

    if (!res.data.success) {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: res.data.message,
      });
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Event Booking Has Been Successfully Done",
      showConfirmButton: false,
      timer: 3000,
    });
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 md:py-14 bg-linear-to-br from-pink-100/40 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* >===>===>===>===> Image <===<===<===<===< */}
        <img
          src={service.image}
          alt={service.service_name}
          className="w-full h-96 object-cover rounded-md mb-6"
        />

        {/* >===>===>===> Title & Category <===<===<===< */}
        <h1 className="text-2xl md:text-3xl text-secondary font-semibold mb-2">
          {service.service_name}
        </h1>
        <p className="text-sm text-gray-500 mb-2 capitalize">
          Category: {service.service_category}
        </p>

        {/* >===>===>===>===> Cost <===<===<===<===<*/}
        <p className="md:text-xl font-semibold text-green-600 mb-2">
          Tk. {service?.cost} {service?.unit}
        </p>

        {/* >===>===>===> Long Description <===<===<===< */}
        <h2 className="md:text-lg font-semibold md:mb-2 text-accent">
          Details
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {service?.long_description}
        </p>

        {/* >===>===>===> Rating & Reviews <===<===<===< */}
        <p className="text-yellow-600 font-semibold mb-2">
          ⭐ {service?.rating} (
          {service?.review_count ? service.review_count : 0} reviews)
        </p>

        {/* >===>===>===>===> Providers <===<===<===<===< */}
        <div className="mb-2">
          <h3 className="font-semibold">Providers:</h3>
          <ul className="list-disc list-inside text-sm md:text-base">
            {service?.providers?.map((provider) => (
              <li key={provider}>{provider}</li>
            ))}
          </ul>
        </div>

        {/* >===>===>===>===> Tags <===<===<===<===< */}
        <div className="mb-2 md:mb-4">
          <h3 className="font-semibold">Tags:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {service?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* >===>===>===>===> Status <===<===<===<===<*/}
        <p className="mb-2">
          <span className="font-semibold">Status:</span>{" "}
          {service?.status ? (
            <span
              className={
                service?.status === "active"
                  ? "bg-green-200 text-green-600 px-3 py-0.5 rounded-full text-xs md:text-sm"
                  : "bg-red-200 text-red-600 px-3 py-0.5 rounded-full text-xs md:text-sm"
              }
            >
              {service?.status?.toUpperCase()}
            </span>
          ) : (
            "N/A"
          )}
        </p>

        {/* Optional: Book Now Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          type="submit"
          className="mt-6 w-full md:w-auto btn btn-sm md:btn-md btn-secondary hover:btn-primary transition-all duration-300"
        >
          Book Now
        </button>
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={user}
          service={service}
          blockedDates={blockedDates}
          onSubmit={handleBooking}
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
