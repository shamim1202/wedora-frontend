import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import { saveOrUpdateUser, uploadImageToImgBB } from "../../../utilities";

const Register = () => {
  const { registerUser, updateUserProfile, loading } = useAuth();
  const navigate = useNavigate();
  const locaton = useLocation();
  const from = locaton.state || "/";

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, email, password, image } = data;
    const imageFile = image[0];

    try {
      const imageURL = await uploadImageToImgBB(imageFile);
      // Register user with email and password
      const result = await registerUser(email, password);
      // Update user profile with name and image
      await updateUserProfile(name, imageURL);
      // Save user to database
      await saveOrUpdateUser({
        uid: result.user.uid,
        displayName: name,
        email,
        image: imageURL,
      });
      Swal.fire({
        icon: "success",
        title: `${name} Welcome to Wedora`,
        text: "Registration Successful!",
      });
      navigate(from, { replace: true });
      console.log(result);
    } catch (error) {
      let message = "Something went wrong.";

      if (error.code === "auth/email-already-in-use") {
        message = "This email is already registered.";
      }

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50/50 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Logo at Top */}
      <Link
        to="/"
        className="flex flex-col items-center justify-center py-3 md:py-5"
      >
        <Logo></Logo>
      </Link>

      <div className="flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
        >
          {/* Left Side - Welcome Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 p-8 md:p-12 text-white flex flex-col justify-between relative"
            style={{ backgroundColor: "#1c3659" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
              <img
                alt="Night scene with moon and birds on branch"
                className="w-full h-full object-cover blur-[2px]"
                src="https://www.redveds.com/wp-content/uploads/2023/09/KB301896-scaled-1.jpeg"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-playfair font-bold text-3xl lg:text-4xl mb-4"
              >
                Welcome to <span className="text-primary">Wedora</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-300 text-sm lg:text-base leading-relaxed mb-10 max-w-md mx-auto"
              >
                Join our community and discover amazing wedding services
                tailored just for you. Create your perfect wedding experience
                with us.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-900"
          >
            {/*--------------- Header Buttons ---------------*/}
            <div className="flex justify-end space-x-2 mb-10">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Login
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-all"
              >
                Register
              </motion.button>
            </div>

            {/*----------- Register Form with Title -----------*/}
            {/* Form Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-playfair text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Register
            </motion.h2>

            {/* Registration Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit(handleRegister)}
              className="space-y-6"
            >
              {/* =======> Full Name Field <======= */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                  placeholder="Enter Your Full Name"
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 p-3 transition-colors"
                  required
                />
                {errors.name?.type === "minLength" && (
                  <p role="alert" className="text-red-500">
                    Name at least 4 or more character longer.
                  </p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p role="alert" className="text-red-500">
                    Name Maximum 20 character longer.
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  placeholder="Enter Your Email"
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 p-3 transition-colors"
                />
                {errors.email?.type === "pattern" && (
                  <p role="alert" className="text-red-500">
                    Enter a valid email address.
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                  })}
                  placeholder="**************"
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 p-3 transition-colors"
                />
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-500">
                    password should be 8 - 20 character with 1 uppercase and 1
                    lowercase.
                  </p>
                )}
              </div>

              {/* Image field */}
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image")}
                  className="w-full file-input border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-600 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500  transition-colors"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  PNG, JPG or JPEG (max - 2mb)
                </p>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start mt-6">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  // checked={formData.agreeToTerms}
                  // onChange={handleInputChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded mt-1"
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-3 block text-sm text-gray-600 dark:text-gray-400"
                >
                  I agree to all the statements in{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Terms of Service
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 md:mt-6 py-2 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 transition-all duration-300"
              >
                {loading ? (
                    <span className="loading loading-bars loading-xs md:loading-sm"></span>
                  ) : (
                    "Register Now"
                  )}
              </motion.button>
            </motion.form>

            <div>
              <div className="divider">or</div>
              <GoogleLogin />
            </div>

            {/* Sign In Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Login
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
