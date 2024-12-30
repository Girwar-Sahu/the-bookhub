import React, { useEffect } from "react";
import { Book, Calendar, Users, BarChart } from "lucide-react";
import { Card } from "../ui/card";
import { useBookContext } from "@/utils/BookContext";

const AnalyticsCard = () => {
  const { totalBooks, fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold dark:text-white text-gray-900 text-center md:text-left mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Books */}
        <Card className="bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:bg-blue-800">
          <div className="flex items-center space-x-4">
            <Book className="h-8 w-8 text-white" />
            <div>
              <h3 className="text-lg font-semibold">Total Books</h3>
              <p className="text-2xl font-bold">{totalBooks}</p>
            </div>
          </div>
        </Card>

        {/* Total Books Added This Month */}
        <Card className="bg-green-500 text-white p-6 rounded-lg shadow-lg dark:bg-green-800">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-white" />
            <div>
              <h3 className="text-lg font-semibold">Added This Month</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsCard;
