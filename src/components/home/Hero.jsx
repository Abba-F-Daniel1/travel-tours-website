import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    // Redirect to Packages page with search term
    navigate(`/packages?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://res.cloudinary.com/doetven6z/image/upload/v1724140497/hero-flight_yna7qp.png)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto flex items-center justify-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Explore the World with Us
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover amazing travel, hotel, and tour packages and book your next adventure.
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6">
            <SearchBar onSearch={handleSearch} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
