import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user, updateUserProfile, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role, isRoleLoading] = useRole();
  console.log(role)

  // Fetch profile from DB
  // const { data: profile = {}, refetch } = useQuery({
  //   queryKey: ["profile", user?.email],
  //   enabled: !!user?.email,
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users/profile/${user.email}`);
  //     return res.data;
  //   },
  // });

  // const [name, setName] = useState(profile.displayName || "");
  // const [photo, setPhoto] = useState(profile.photoURL || "");

  // Update profile
  // const handleUpdateProfile = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Update Firebase
  //     await updateUserProfile(name, photo);
  //     // Update DB
  //     await axiosSecure.patch("/users/profile", {
  //       displayName: name,
  //       photoURL: photo,
  //     });

  //     Swal.fire({
  //       icon: "success",
  //       title: "Profile Updated Successfully",
  //       timer: 2000,
  //       showConfirmButton: false,
  //     });

  //   } catch (error) {
  //     Swal.fire("Error", error.message, "error");
  //   }
  // };

  if (loading) return <Loading></Loading>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Banner */}
      <div className="relative h-48 md:h-72 rounded-xl bg-gradient-to-r from-primary via-pink-400 to-secondary shadow-lg">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            // src={profile.photoURL || user?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-900 md:mt-20 rounded-xl shadow-lg p-5 md:p-8 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-secondary">
            My Profile
          </h2>
          <p className="w-fit mx-auto md:px-4 rounded py-1 text-accent text-sm md:text-base font-semibold mt-1 capitalize bg-primary text-white">
            {/* {profile.role} */}
          </p>
        </div>

        {/* Profile Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              // defaultValue={profile.displayName || user?.displayName}
              // onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              // value={profile.email || user?.email}
              disabled
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-1 font-medium">Profile Photo URL</label>
            <input
              type="url"
              // defaultValue={profile.photoURL}
              // onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
              placeholder="https://image-url.com/photo.jpg"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Update Profile
            </button>

            <button
              type="button"
              onClick={() =>
                Swal.fire(
                  "Password Reset",
                  "Password reset email will be sent from Firebase.",
                  "info"
                )
              }
              className="btn btn-outline btn-secondary w-full md:w-auto"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
