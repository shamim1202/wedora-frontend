import { motion } from "framer-motion";
import { Link } from "react-router";
import Logo from "../../../components/Logo/Logo";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50/50 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
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
                  alt="Wedding couple in beautiful outdoor setting"
                  className="w-full h-full object-cover blur-[2px]"
                  src="https://i.pinimg.com/736x/2d/fb/56/2dfb563ec40aa11808bef6444b612bd9.jpg"
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
                  Welcome Back to <span className="text-primary">Wedora</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-300 text-sm lg:text-base leading-relaxed mb-10 max-w-md mx-auto"
                >
                  Continue your wedding planning journey with us. Access your
                  personalized dashboard and make your dream wedding come true.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-900"
            >
              {/* Header Buttons */}
              <div className="flex justify-end space-x-2 mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-all"
                >
                  Login
                </motion.button>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Register
                  </motion.button>
                </Link>
              </div>

              {/* Form Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-playfair text-3xl font-bold text-gray-900 dark:text-white mb-8"
              >
                Login
              </motion.h2>

              {/* Login Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onSubmit={handleSubmit(handleLogin)}
                className="space-y-6"
              >
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email"
                    className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter Your Password"
                    className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors"
                    required
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                      Remember Me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mt-4 md:mt-6 py-2 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 transition-all duration-300"
                >
                  Login
                </motion.button>
              </motion.form>

              <div>
                <div className="divider">or</div>
                <GoogleLogin />
              </div>

              {/* Sign Up Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Register
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
