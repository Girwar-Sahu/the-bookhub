import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useBookContext } from "@/utils/BookContext";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const BooksPage = () => {
  const { fetchBooks, loading, fetchBooksByIndex, hasMoreBooks, books } =
    useBookContext();
  const [showMore, setShowMore] = useState(true);
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleShowMore = () => {
    const startIndex = books.length;
    fetchBooksByIndex(startIndex);
  };

  const handleChange = (name, value) => {
    setSidebarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(sidebarData);
  };
  return (
    <>
      <Header />
      <section className="min-h-screen dark:bg-gray-900 py-4">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6 px-4">
          {/* Sidebar Filter Section */}
          <aside className="md:w-1/5 w-full mt-2 md:mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-500 text-center md:text-left">
              Filter
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-6 flex flex-col gap-4">
                {/* Search Input */}

                <div className="w-full max-w-sm mx-auto md:mx-0">
                  <Label className="dark:text-gray-300" htmlFor="search">
                    Search
                  </Label>
                  <Input
                    id="search"
                    type="text"
                    value={sidebarData.searchTerm}
                    onChange={(e) => handleChange("searchTerm", e.target.value)}
                    placeholder="Search book..."
                    className="dark:bg-gray-800 dark:text-gray-300 focus:outline-none flex-grow"
                  />
                </div>

                <div className="w-full max-w-sm mx-auto md:mx-0">
                  <Label className="dark:text-gray-300" htmlFor="sort">
                    Sort By:
                  </Label>
                  <Select
                    id="sort"
                    defaultValue={sidebarData.sort}
                    onValueChange={(value) => handleChange("sort", value)}
                  >
                    <SelectTrigger className="w-full dark:bg-gray-800 dark:text-gray-300">
                      <SelectValue
                        className="dark:text-gray-800"
                        placeholder="Sort By"
                      />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:text-gray-300">
                      <SelectItem
                        className="dark:hover:bg-gray-500"
                        value="desc"
                      >
                        Newest
                      </SelectItem>
                      <SelectItem
                        className="dark:hover:bg-gray-500"
                        value="asc"
                      >
                        Oldest
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full max-w-sm mx-auto md:mx-0">
                  <Button
                    type="submit"
                    className="mt-2 w-full bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:text-white dark:hover:bg-sky-600"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </form>
          </aside>
          <main className="md:w-4/5 w-full">
            <section className="py-4 w-full dark:bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <h1 className="md:text-3xl my-2 text-2xl md:text-left text-center font-bold text-gray-800 dark:text-white">
                  All Books
                </h1>

                {books.length === 0 ? (
                  <div>
                    <h2 className="dark:text-gray-300 text-gray-900 text-lg text-center md:text-left">
                      No Book found
                    </h2>
                  </div>
                ) : (
                  <div className="w-3/4 md:w-full mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 rounded-lg">
                    {books.map((book) => (
                      <div
                        key={book._id}
                        className="w-full mx-auto my-5 shadow-lg rounded-lg bg-white dark:bg-gray-800 dark:text-white overflow-hidden border dark:border-gray-700 p-2"
                      >
                        {/* Image Section */}
                        <div className="w-full h-64 overflow-hidden">
                          <img
                            className="w-full h-full object-cover dark:bg-gray-500 bg-gray-200"
                            src={book.imageURL}
                            alt={book.title}
                            loading="lazy"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-4">
                          <h2 className="text-xl font-semibold mt-4">
                            {book.title}
                          </h2>
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
                )}
              </div>
              <div className="w-1/2 flex justify-center mx-auto">
                {hasMoreBooks && (
                  <Button
                    onClick={handleShowMore}
                    className="dark:text-blue-400 dark:bg-transparent dark:hover:bg-transparent dark:hover:text-blue-600 text-lg bg-transparent text-blue-500 hover:bg-transparent hover:text-blue-400"
                  >
                    {loading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      "Show More"
                    )}
                  </Button>
                )}
              </div>
            </section>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BooksPage;
