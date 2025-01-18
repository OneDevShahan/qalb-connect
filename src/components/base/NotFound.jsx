import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-center p-6">
        {/* Error Code */}
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>

        {/* Error Message */}
        <p className="text-lg md:text-xl font-medium mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 dark:hover:from-blue-800 dark:hover:to-indigo-900 transition-transform transform hover:scale-105"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
