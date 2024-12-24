import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="w-full bg-sky-100 dark:bg-gray-900 mx-auto py-5">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 my-8 flex flex-col md:flex-row rounded-xl shadow-lg items-center justify-between p-6 md:p-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl  font-extrabold text-gray-800 dark:text-white leading-tight">
            Discover Your Next{" "}
            <span className="text-sky-500">Favorite Book</span> with BookHub!
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find Books You Love, Anytime, Anywhere.
          </p>
          <Button className="py-3 px-6 text-lg md:text-xl mt-10 bg-sky-500 dark:bg-sky-600 hover:bg-sky-700 dark:text-white dark:hover:bg-sky-500">
            <Link to="/books">Explore Now</Link>
          </Button>
        </div>

        <div className="relative w-full md:w-1/2 mt-6 md:mt-0 rounded-xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 z-10 rounded-xl"></div>

          <img
            className="w-full h-64 md:h-full object-cover"
            src="/hero.jpeg"
            alt="heroimage"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
