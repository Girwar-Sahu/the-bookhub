import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Loader } from "lucide-react"; // Import the Loader component

// Dynamically import the components
const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const Books = lazy(() => import("./pages/BooksPage"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Loader className="animate-spin text-blue-500" size={48} />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
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
