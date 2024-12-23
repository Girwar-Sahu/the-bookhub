import React from "react";
import Hero from "../components/Hero";
import Header from "@/components/Header";
import RecommendedBooks from "@/components/RecommendedBooks";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RecommendedBooks title={"Latest Books"} />
      <Footer />
    </div>
  );
};

export default HomePage;
