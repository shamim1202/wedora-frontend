import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/qFxZ8sHb/error-page-background.jpg?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-sm md:text-base mb-8">
          The page you are looking for doesn’t exist or has been moved. You can
          return to our homepage and continue exploring our wedding services.
        </p>
        <Link
          to="/"
          className="btn btn-sm md:btn-md btn-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
