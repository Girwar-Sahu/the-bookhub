import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeContext";
import { BookProvider } from "./utils/BookContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BookProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookProvider>
    </ThemeProvider>
  </StrictMode>
);
