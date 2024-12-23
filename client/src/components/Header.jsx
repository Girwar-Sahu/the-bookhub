import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../utils/ThemeContext";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const location = useLocation();

  // Links array for dynamic rendering
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 dark:bg-gray-800  bg-white bg-opacity-50 backdrop-blur-md z-20 shadow-lg border-b dark:border-gray-700 border-gray-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
       
        <div className="w-52">
          <img
            className="w-full"
            src={isDark ? "/logo2.png" : "/logo1.png"}
            alt="theBookhub"
          />
        </div>

        {/* Navigation and Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Navigation Links */}
          <ul className="flex space-x-4 items-center text-lg">
            {navLinks.map((link) => (
              <li key={link.path} className="px-4 py-2">
                <NavLink
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "font-bold text-sky-600"
                      : "dark:text-gray-50 text-gray-700 hover:text-sky-500 dark:hover:text-sky-500"
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
