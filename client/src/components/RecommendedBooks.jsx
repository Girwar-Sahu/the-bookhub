import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useBookContext } from "@/utils/BookContext";
import { Link } from "react-router-dom";

const RecommendedBooks = ({ title }) => {
  const { fetchBooks, books } = useBookContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="py-4 w-full dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-3xl my-2 text-2xl md:text-left text-center font-bold text-gray-800 dark:text-white">
          {title}
        </h1>

        <div className="w-3/4 md:w-full mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 rounded-lg">
          {books.slice(0, 5).map((book) => (
            <div
              key={book._id}
              className="w-full mx-auto my-5 shadow-lg rounded-lg bg-white dark:bg-gray-800 dark:text-white overflow-hidden border dark:border-gray-700 p-2"
            >
              {/* Image Section */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={book.imageURL}
                  alt={book.title}
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {book.author}
                </p>
              </div>

              {/* Footer Section */}
              <div className="p-4 bg-gray-100 dark:bg-gray-700 text-center">
                <Link to={`/book/${book._id}`}>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:text-white dark:hover:bg-sky-600">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedBooks;
