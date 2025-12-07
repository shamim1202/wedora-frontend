import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-linear-to-br bg bg-red-500 from-pink-50/50 via-background-light to-pink-50/30 dark:from-gray-900 dark:via-background-dark dark:to-gray-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="3"
              fill="currentColor"
              className="text-primary"
            />
            <circle
              cx="80"
              cy="40"
              r="2"
              fill="currentColor"
              className="text-primary"
            />
            <circle
              cx="40"
              cy="70"
              r="2.5"
              fill="currentColor"
              className="text-primary"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

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
              Join our community and discover amazing wedding services tailored
              just for you. Create your perfect wedding experience with us.
            </motion.p>

            {/* Social Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center">
                <span className="h-px w-12 bg-gray-500"></span>
                <span className="mx-4 text-xs uppercase text-gray-400 tracking-wider">
                  Get connected with
                </span>
                <span className="h-px w-12 bg-gray-500"></span>
              </div>

              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                  href="#"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
                  href="#"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 48 48">
                    <path d="M24 9.5c3.9 0 6.9 1.5 9 3.4l-3.3 3.1c-1.3-1.2-3.1-2.4-5.7-2.4-4.6 0-8.3 3.9-8.3 8.4s3.7 8.4 8.3 8.4c2.8 0 4.6-1.2 5.8-2.3l3.3 3.1c-2.1 2-5.1 3.5-9.1 3.5-7.6 0-13.8-6.1-13.8-13.7S16.4 9.5 24 9.5zm20.5 4.9v-4h-4v4h-4.9v4h4.9v4.9h4V18.4h4.9v-4h-4.9z" />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                  href="#"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Registration Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-900"
        >
          {/* Header Buttons */}
          <div className="flex justify-end space-x-2 mb-10">
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Sign In
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
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your Full Name"
                className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Your Password"
                className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
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
              className="w-full mt-8 py-3 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </motion.form>

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
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
