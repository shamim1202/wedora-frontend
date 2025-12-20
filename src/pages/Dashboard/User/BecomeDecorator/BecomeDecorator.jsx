import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const BecomeDecorator = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, experience, skills, portfolio } = data;
    const image = user?.photoURL;
    const applyData = {
      image,
      name,
      email,
      phone,
      experience,
      skills,
      portfolio,
    };
    // console.log(name, email, phone, experience, skills, portfolio, image)
    try {
      const res = await axiosSecure.post("/become-decorator", applyData);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Request Submitted",
          text: res.data.message,
        });
      } else {
        console.log(res.data.message);
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          text: res.data.message,
        });
      }

      reset();
    } catch (error) {
      if (error.response?.status === 409) {
        Swal.fire({
          icon: "info",
          title: "Already Applied",
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          text: error.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-8"
      >
        {/* Title */}
        <h1 className="text-xl md:text-3xl font-playfair text-secondary font-bold mb-2 text-center">
          Become a Decorator
        </h1>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center mb-3 md:mb-6">
          Submit your details and request admin approval to become a decorator.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="text-xs md:text-sm font-medium">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
              value={user.displayName}
              disabled
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs md:text-sm font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
              value={user.email}
              disabled
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs md:text-sm font-medium">
              Phone Number
            </label>
            <input
              {...register("phone", {
                required: true,
                pattern: {
                  value: /^01\d{9}$/,
                  message: "Phone number must start with 01 and be 11 digits",
                },
              })}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
              placeholder="01XXXXXXXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="text-xs md:text-sm font-medium">
              Years of Experience
            </label>
            <select
              {...register("experience", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
            >
              <option value="">Select experience</option>
              <option value="0-1">0–1 years</option>
              <option value="2-4">2–4 years</option>
              <option value="5+">5+ years</option>
            </select>
            {errors.experience && (
              <p className="text-red-500 text-xs md:text-sm">
                Experience is required
              </p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="text-xs md:text-sm font-medium">
              Decoration Skills
            </label>
            <textarea
              {...register("skills", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
              placeholder="Wedding stage, floral, lighting, theme decor..."
            />
            {errors.skills && (
              <p className="text-red-500 text-xs md:text-sm">
                Skills are required
              </p>
            )}
          </div>

          {/* Portfolio */}
          <div>
            <label className="text-xs md:text-sm font-medium">
              Portfolio Link (optional)
            </label>
            <input
              {...register("portfolio")}
              className="w-full mt-1 px-4 py-2 border border-secondary rounded-lg dark:bg-gray-900"
              placeholder="Drive / Instagram / Website link"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full btn btn-sm md:btn-md btn-primary text-white rounded-lg font-semibold"
          >
            {loading ? (
              <span className="loading loading-bars loading-xs md:loading-sm"></span>
            ) : (
              "Request Approval"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default BecomeDecorator;
