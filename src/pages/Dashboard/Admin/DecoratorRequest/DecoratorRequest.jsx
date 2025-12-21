import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../Shared/Loading/Loading";

const DecoratorRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: request = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/decorator-request");
      return res.data;
    },
  });

  // Change user role (e.g., make admin)
  const handleAccept = async (email) => {
    const result = await Swal.fire({
      title: "Approve Request?",
      text: "User will become a decorator",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
    });

    if (result.isConfirmed) {
      const res = await axiosSecure.patch("/update-role", {
        email,
        role: "decorator",
      });
      if (res.data.success) {
        Swal.fire("Approved!", res.data.message, "success");
        refetch();
      }
    }
  };

  // Delete user
  const handleCancel = async (userId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Users become a decorator request will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(
          `/cancel-decorator-request/${userId}`
        );
        if (res.data.success) {
          Swal.fire("Cancelled!", res.data.message, "success");
          refetch();
        }
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.message || "Failed to Cancelled request",
          "error"
        );
      }
    }
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-secondary">
          Application For Become A Decorator
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <thead className="bg-secondary/10 dark:bg-gray-800 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">SL.</th>
              <th className="px-4 py-3 text-sm font-semibold">Image</th>
              <th className="px-4 py-3 text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-sm font-semibold">Email</th>
              {/* <th className="px-4 py-3 text-sm font-semibold">Role</th> */}
              <th className="px-4 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {request.map((r, i) => (
              <tr
                key={r._id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-3 text-sm font-medium text-accent dark:text-white">
                  {i + 1}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-accent dark:text-white">
                  <img
                    className="rounded-full w-6 md:w-10"
                    src={r.image}
                    alt=""
                    srcset=""
                  />
                </td>
                <td className="px-4 py-3 text-sm font-medium text-accent dark:text-white">
                  {r.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  {r.email}
                </td>

                <td className="px-4 py-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAccept(r.email)}
                    className="btn btn-xs md:btn-sm btn-primary hover:btn-secondary text-white transition-all duration-300"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleCancel(r._id)}
                    className="btn btn-xs md:btn-sm btn-error hover:btn-secondary text-white transition-all duration-300"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default DecoratorRequest;
