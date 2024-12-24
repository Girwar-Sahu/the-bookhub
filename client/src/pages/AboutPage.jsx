import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <section className="w-full min-h-screen dark:bg-gray-900  py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            About BookHub
          </h1>

          <div className="flex flex-col md:flex-row mt-8 p-8 gap-8 border dark:border-gray-700 boder-gray-200 rounded-lg">
            <div className="md:w-1/2 w-full mb-6 md:mb-0">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                src="/about-image.jpeg"
                alt="About BookHub"
              />
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Discover the World of Books with BookHub
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                BookHub is your ultimate destination to explore a wide range of
                books from various genres. Our platform provides easy access to
                your favorite books and new recommendations based on your
                reading preferences. Whether you're a passionate reader or just
                starting, BookHub offers a user-friendly experience to help you
                find books you love.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We believe in the power of books to change lives. Our mission is
                to provide a space where readers can connect, share their
                thoughts, and explore new worlds through literature. With
                BookHub, your next great read is just a click away.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
