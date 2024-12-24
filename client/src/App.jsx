import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Books from "./pages/BooksPage";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: "sonner",
          closeButton: true,
        }}
        richColors={true}
      />
    </>
  );
};

export default App;
