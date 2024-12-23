import React,{useContext} from "react";
import ThemeContext from "../utils/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <footer className="py-12 w-full bg-gray-300 dark:bg-gray-950">
      <h2 className="text-center text-lg dark:text-gray-500 tracking-wider font-semibold">
        Made with ❤️ by theBookhub
      </h2>

      <div className="w-36 mx-auto">
        <img
          className="w-full"
          src={isDark ? "/logo2.png" : "/logo1.png"}
          alt="theBookhub"
        />
      </div>
      <p className="text-center text-sm dark:text-gray-600">
        copyright &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
