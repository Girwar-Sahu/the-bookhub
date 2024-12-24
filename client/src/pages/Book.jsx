import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookContext } from "@/utils/BookContext";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

const Book = () => {
  const { currentBook, loading, fetchBookById } = useBookContext();
  const { id } = useParams();

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  const formatDate = (isoDate) => {
    try {
      return format(new Date(isoDate), "yyyy-MM-dd");
    } catch (error) {
      console.error("Invalid date format:", error);
      return "";
    }
  };

  const formattedDate = currentBook.publishedDate
    ? formatDate(currentBook.publishedDate)
    : "Unknown Date";

  return (
    <>
      <Header />
      <section className="dark:bg-gray-900 bg-white min-h-screen py-8">
        {loading ? (
          <div className="max-w-5xl mx-auto px-4">
            <Loader2 size={50} />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Book Image */}
              <div className="md:w-1/3 h-96 p-4">
                <img
                  src={currentBook.imageURL}
                  alt={currentBook.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Book Details */}
              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl text-center md:text-left font-bold dark:text-white text-gray-900">
                  {currentBook.title}
                </h2>
                <p className="text-lg text-center md:text-left text-gray-600 dark:text-gray-300 mt-2">
                  {currentBook.author}
                </p>
                <p className="text-sm text-center md:text-left text-gray-500 dark:text-gray-400 mt-1">
                  {formattedDate}
                </p>
                <p className="text-lg text-center md:text-left text-gray-800 dark:text-gray-200 mt-4">
                  {currentBook.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Book;
