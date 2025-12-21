import { Link } from "react-router-dom";

const UnAuthorizedAccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">401</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Unauthorized
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        You need to log in to access this page.
      </p>
      <Link
        to="/login"
        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default UnAuthorizedAccess;
