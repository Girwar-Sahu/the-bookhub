import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { set } from "mongoose";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMoreBooks, setHasMoreBooks] = useState(false);

  const fetchBooks = async (query = {}) => {
    setLoading(true);
    setError(null);
    try {
      const queryString = new URLSearchParams(query).toString();
      const endpoint = `${API_BASE_URL}/getbooks${
        queryString ? `?${queryString}` : ""
      }`;
      const response = await axios.get(endpoint);
      setBooks(response.data.books);
      setTotalBooks(response.data.totalBooks);
      setHasMoreBooks(response.data.books.length > 9);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  const fetchBooksByIndex = async (index) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/getbooks?startIndex=${index}`
      );
      setBooks((prev) => [...prev, ...response.data.books]);
      setHasMoreBooks(response.data.books.length > 9);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/getbook/${id}`);
      setCurrentBook(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch book");
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (newBook) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
      toast.success("Book Added Successfully.");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Failed to add book");
    } finally {
      setLoading(false);
    }
  };

  const updateBook = async (id, updatedBook) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(
        `${API_BASE_URL}/update/${id}`,
        updatedBook
      );
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === id ? response.data : book))
      );
      toast.success("Book details updated Successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update book");
    } finally {
      setLoading(false);
    }
  };

  const removeBook = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      toast.success("Book details deleted Successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete book");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    books,
    currentBook,
    loading,
    error,
    hasMoreBooks,
    totalBooks,
    fetchBooks,
    fetchBooksByIndex,
    fetchBookById,
    addBook,
    updateBook,
    removeBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
