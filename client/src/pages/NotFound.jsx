import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
      <h1 className="md:text-9xl font-bold my-2 text-5xl text-gray-900 dark:text-white">
        404
      </h1>

      <h1 className="text-4xl font-bold mb-2 text-center">Page Not Found</h1>

      <p className="text-lg text-center mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="py-3 px-6 bg-sky-500 dark:bg-sky-600 text-white rounded-md hover:bg-sky-700 dark:hover:bg-sky-500 transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
