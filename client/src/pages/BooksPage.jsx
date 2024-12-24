import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecommendedBooks from "@/components/RecommendedBooks";
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

const BooksPage = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen dark:bg-gray-900 py-4">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6 px-4">
          {/* Sidebar Filter Section */}
          <aside className="md:w-1/4 w-full mt-2 md:mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-500 text-center md:text-left">
              Filter
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {/* Search Input */}
              <div className="w-full max-w-sm mx-auto md:mx-0">
                <Label className="dark:text-gray-300" htmlFor="search">
                  Search
                </Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search book..."
                  className="dark:bg-gray-800 focus:outline-none flex-grow"
                />
              </div>

              {/* Select Theme */}

              <div className="w-full max-w-sm mx-auto md:mx-0">
                <Label className="dark:text-gray-300" htmlFor="sort">
                  Sort By:
                </Label>
                <Select id="sort">
                  <SelectTrigger className="w-full dark:bg-gray-800 dark:text-gray-300">
                    <SelectValue
                      className="dark:text-gray-800"
                      placeholder="Sort By"
                    />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:text-gray-300">
                    <SelectItem className="dark:hover:bg-gray-500" value="desc">
                      Newest
                    </SelectItem>
                    <SelectItem className="dark:hover:bg-gray-500" value="asc">
                      Oldest
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full max-w-sm mx-auto md:mx-0">
                <Button className="mt-2 w-full bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:text-white dark:hover:bg-sky-600">
                  Apply
                </Button>
              </div>
            </div>
          </aside>
          {/* Recommended Books Section */}
          <main className="md:w-3/4 w-full">
            <RecommendedBooks title={"All Books"} />
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BooksPage;
