import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "lorem ipsum",
  },
  {
    id: 2,
    title: "The Titanic",
    author: "Paulo Coelho",
    description: "lorem ipsum",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "lorem ipsum",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "lorem ipsum",
  },
];

const RecommendedBooks = ({ title }) => {
  return (
    <section className="py-4 w-full dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-3xl my-2 text-2xl md:text-left text-center font-bold text-gray-800 dark:text-white">
          {title}
        </h1>

        <div className="w-3/4 md:w-full mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 border dark:border-gray-700 boder-gray-200 px-4 rounded-lg">
          {books.map((book) => (
            <Card
              key={book.id}
              className="dark:bg-gray-800 dark:text-white mx-auto my-5 shadow-lg border dark:border-gray-700 boder-gray-200"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  className="w-full object-contain"
                  src="/booklogo.png"
                  alt={book.title}
                />
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-500">{book.author}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mt-2 w-2/3 bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:text-white dark:hover:bg-sky-600">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedBooks;
