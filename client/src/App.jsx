import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Books from "./pages/BookPage";
import React from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
};

export default App;
