import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useBookContext } from "@/utils/BookContext";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ListBook = () => {
  const { fetchBooks, fetchBooksByIndex, books, loading, error, removeBook } =
    useBookContext();
  const [showMore, setShowMore] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (books.length % 10 === 0 && books.length > 0) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, [books]);

  const handleShowMore = () => {
    const startIndex = books.length;
    fetchBooksByIndex(startIndex);
  };

  const handleDelete = (book) => {
    setSelectedBook(book);
    setIsAlertOpen(true);
  };

  const confirmDelete = () => {
    if (selectedBook) {
      removeBook(selectedBook._id);
      setIsAlertOpen(false);
      setSelectedBook(null);
    }
  };

  const cancelDelete = () => {
    setIsAlertOpen(false);
    setSelectedBook(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), "MMM dd, yyyy");
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold dark:text-white text-gray-900 text-center md:text-left mt-6 mb-6">
        All Books
      </h2>
      {error && (
        <div className="mb-6">
          <Alert className="mb-6 dark:bg-gray-800 dark:border-gray-700 text-red-600 dark:text-red-400">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      <ScrollArea type="auto">
        <div className="w-full mx-auto md:mx-0 bg-white border dark:border-gray-700 border-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Table>
            <TableCaption>
              <div className="w-1/2 mx-auto">
                {showMore && (
                  <Button
                    onClick={handleShowMore}
                    className="dark:text-blue-400 dark:bg-transparent dark:hover:bg-transparent dark:hover:text-blue-600 text-lg bg-transparent text-blue-500 hover:bg-transparent hover:text-blue-400"
                  >
                    Show more
                  </Button>
                )}
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow className="border-b dark:border-gray-700 dark:hover:bg-gray-700">
                <TableHead>Image</TableHead>
                <TableHead>Book Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Publish Year</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="dark:text-gray-400">
              {books &&
                books.map((book) => (
                  <TableRow
                    key={book._id}
                    className="border-b dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <TableCell>
                      <img
                        className="w-10 h-14 object-cover bg-gray-500"
                        src={book.imageURL}
                        alt={book.title}
                        loading="lazy"
                      />
                    </TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{formatDate(book.publishedDate)}</TableCell>
                    <TableCell>
                      <button>
                        <Link to={`/admin?tab=edit-book&id=${book._id}`}>
                          <Edit className="text-blue-500 hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-600 size-6" />
                        </Link>
                      </button>
                    </TableCell>
                    <TableCell>
                      <button onClick={() => handleDelete(book)}>
                        <Trash2 className="text-red-500 hover:text-red-600 dark:text-red-700 dark:hover:text-red-600 size-6" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <ScrollBar className="dark:bg-gray-700" orientation="horizontal" />
      </ScrollArea>

      {/* Alert Dialog */}
      {isAlertOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md`}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Confirm Deletion
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Are you sure you want to delete the book "
              <span className="font-semibold">{selectedBook?.title}</span>"?
            </p>
            <div className="mt-4 flex justify-end space-x-3">
              <Button
                className="bg-red-500 dark:bg-red-400 dark:hover:bg-red-500 dark:text-white hover:bg-red-600"
                onClick={confirmDelete}
              >
                Yes, Delete
              </Button>
              <Button
                className="bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={cancelDelete}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListBook;
