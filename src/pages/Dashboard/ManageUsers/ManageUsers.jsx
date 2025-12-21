import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const decoratorClass =
    "bg-orange-100 text-orange-500 px-3 py-1 rounded text-xs md:text-sm font-medium";
  const userClass =
    "bg-green-100 text-green-700 px-3 py-1 rounded text-xs md:text-sm font-medium";

  const {
    data: users = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/manage-users");
      return res.data;
    },
  });

  // Change user role (e.g., make admin)
  const handleRoleChange = async (newRole, email) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Change role to ${newRole}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.patch("/update-role", {
          email: email,
          role: newRole,
        });

        if (res.data.success) {
          Swal.fire("Updated!", `User role changed to ${newRole}`, "success");
          refetch();
        } else {
          Swal.fire(
            "Error",
            res.data.message || "Failed to update role",
            "error"
          );
        }
      } catch (err) {
        Swal.fire(
          "Error",
          err.response?.data?.message || "Failed to update role",
          "error"
        );
      }
    }
  };

  // Delete user
  const handleDeleteUser = async (userId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
    });
    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/users/${userId}`);
        if (res.data.success) {
          Swal.fire("Deleted!", res.data.message, "success");
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
  if (error) return <ErrorPage></ErrorPage>;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-secondary">
          Manage <span className="text-primary font-bold">Users</span>
        </h2>
        <p className="text-accent max-w-2xl mx-auto mt-2">
          Admin panel to view, delete or update user roles.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <thead className="bg-primary/10 dark:bg-gray-800 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-sm font-semibold">Role</th>
              <th className="px-4 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-3 text-sm font-medium text-accent dark:text-white">
                  {user.displayName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={
                      user.role === "decorator" ? decoratorClass : userClass
                    }
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 flex flex-wrap gap-2">
                  {user.role == "user" ? (
                    <>
                      <button
                        onClick={() =>
                          handleRoleChange("decorator", user.email)
                        }
                        className="btn btn-xs md:btn-sm btn-success text-white transition-all duration-300"
                      >
                        Make Decorator
                      </button>
                      <button
                        onClick={() =>
                          handleRoleChange("admin", user.email)
                        }
                        className="btn btn-xs md:btn-sm btn-info text-white transition-all duration-300"
                      >
                        Make Admin
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          handleRoleChange("user", user.email)
                        }
                        className="btn btn-xs md:btn-sm btn-warning text-white transition-all duration-300"
                      >
                        Make User
                      </button>
                      <button
                        onClick={() =>
                          handleRoleChange("admin", user.email)
                        }
                        className="btn btn-xs md:btn-sm btn-info text-white transition-all duration-300"
                      >
                        Make Admin
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-sm btn-error hover:btn-secondary text-white transition-all duration-300"
                  >
                    Delete
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

export default ManageUsers;
