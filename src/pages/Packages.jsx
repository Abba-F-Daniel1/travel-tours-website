import SearchBar from "../components/home/SearchBar";
import LoadingSpinner from "../components/loader/LoadingSpinner";
import PackageCard from "../components/packages/PackageCard";
import mockFlightData from "../mockdata/FlightMockData.json";
import mockHotelData from "../mockdata/HotelMockData.json";
import mockTourData from "../mockdata/TourMockData.json";
import ErrorMessage from "../pages/ErrorMessage";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo, useCallback } from "react";

const CATEGORIES = {
  HOTELS: "hotels",
  TOURS: "tours",
  FLIGHTS: "flights",
};

const Packages = () => {
  const [travelOffers, setTravelOffers] = useState({
    [CATEGORIES.FLIGHTS]: mockFlightData,
    [CATEGORIES.HOTELS]: mockHotelData,
    [CATEGORIES.TOURS]: mockTourData,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(CATEGORIES.HOTELS);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering offers based on search term
  const filteredOffers = useMemo(() => {
    if (!travelOffers[category]) return [];

    return travelOffers[category].filter(
      (offer) =>
        offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [category, searchTerm, travelOffers]);

  // Handling search term change
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Handling category change
  const handleCategoryChange = useCallback((e) => {
    setCategory(e.target.value);
    setSearchTerm("");
  }, []);

  // Fetching offers based on category
  const fetchOffers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulating API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // const response = await fetch(`/api/offers/${category}`);
      // const data = await response.json();
      // setTravelOffers(prevOffers => ({ ...prevOffers, [category]: data }));
    } catch (err) {
      console.error("Error fetching offers:", err);
      setError("Failed to fetch offers. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [category]);

  // for fetching real data
  // useEffect(() => {
  //   fetchOffers();
  // }, [fetchOffers]);

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchOffers} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-display font-bold text-center mb-8 text-primary-dark">
        Our Excellent Packages
      </h2>

      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex mb-6 justify-center">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-4 py-2 border rounded-md text-primary-dark bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          {Object.values(CATEGORIES).map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : filteredOffers.length === 0 ? (
        <p className="text-center text-gray-600">
          No packages found matching your search.
        </p>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredOffers.map((offer) => (
              <motion.div
                key={offer.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PackageCard offer={offer} type={category.slice(0, -1)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Packages;
