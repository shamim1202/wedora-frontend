import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Bookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });

  const handleBookingDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/bookings/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              // Refetch bookings after deletion
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  refetch()

  return (
    <div className="p-5 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 md:mb-10 mb-5">
        All booking Service
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Service Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* ----- Table Row ----- */}
            {bookings.map((b, i) => (
              <tr key={b._id} className="">
                <th>{i + 1}</th>
                <td>{b.serviceName}</td>
                <td>{b.location}</td>
                <td>{b.date}</td>
                <td>{b.rate}</td>
                <td>
                  {b.paymentStatus ? (
                    <span className="md:text-xl text-green-500 font-semibold">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${b._id}`}
                      className="btn btn-xs md:btn-sm bg-primary text-white hover:bg-primary/90 border-none"
                    >
                      Payment
                    </Link>
                  )}
                </td>
                <td className="flex gap-1 md:gap-2">
                  <button className="btn btn-xs md:btn-sm btn-square bg-transparent hover:bg-blue-100 border border-blue-200">
                    <FaMagnifyingGlass className="md:text-xl text-blue-500 font-semibold" />
                  </button>
                  <button className="btn btn-xs md:btn-sm btn-square bg-transparent hover:bg-green-100 border border-green-200">
                    <FiEdit className="md:text-xl text-green-500 font-semibold" />
                  </button>
                  <button
                    onClick={() => handleBookingDelete(b._id)}
                    className="btn btn-xs md:btn-sm btn-square bg-transparent hover:bg-red-100 border border-red-200"
                  >
                    <RiDeleteBin6Line className="md:text-xl text-red-500 font-semibold" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
