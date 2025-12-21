import { Link } from "react-router";

const ForbiddenAccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-3xl md:text-6xl font-bold text-red-600 mb-4">403</h1>
      <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Forbidden Access
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        You do not have permission to access this page.
      </p>

      <Link
        to="/"
        className="btn btn-xs md:btn-sm btn-primary text-white rounded-md transition-all"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ForbiddenAccess;
