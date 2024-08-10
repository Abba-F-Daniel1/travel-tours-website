import SearchBar from "../components/home/SearchBar";
import LoadingSpinner from "../components/loader/LoadingSpinner";
import PackageCard from "../components/packages/PackageCard";
import mockHotelData from "../mockdata/HotelMockData.json";
import mockTourData from "../mockdata/TourMockData.json";
import React, { useState, useEffect, useMemo } from "react";

const Packages = () => {
  const [travelOffers, setTravelOffers] = useState({
    flights: [],
    hotels: mockHotelData,
    tours: mockTourData,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("hotels");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAccessToken = async () => {
    const response = await fetch("/api/v1/security/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "OuwhblbUL6lALVLubKwyujJJy4d4iJEE",
        client_secret: "M9kVRmwPaPxDP3J4",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  };

  const fetchTravelOffers = async () => {
    try {
      const token = await fetchAccessToken();

      const response = await fetch(
        "/api/v2/shopping/flight-offers?originLocationCode=NYC&destinationLocationCode=LON&departureDate=2024-12-01&adults=1",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const flightOffers = data.data.map((offer) => {
        const itinerary = offer.itineraries[0];
        const segment = itinerary.segments[0];
        const price = offer.price;

        return {
          id: offer.id,
          title: `${segment.departure.iataCode} to ${segment.arrival.iataCode}`,
          description: `Flight by ${segment.carrierCode}, priced at ${price.total} ${price.currency}. Number of bookable seats: ${offer.numberOfBookableSeats}`,
          image: `https://source.unsplash.com/1600x900/?airplane,flight`,
        };
      });

      setTravelOffers((prev) => ({ ...prev, flights: flightOffers }));
    } catch (error) {
      setError("Error fetching travel offers");
      console.error("Error fetching travel offers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTravelOffers();
  }, []);

  const filteredOffers = useMemo(() => {
    return travelOffers[category].filter(
      (offer) =>
        offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [category, searchTerm, travelOffers]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearchTerm(""); // Reset search term when changing category
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="text-center py-16 text-red-500">{error}</div>;

  return (
    <div>
      <h2 className="text-4xl font-display font-bold text-center mb-5 text-primary-dark mt-8">
        Our Excellent Packages
      </h2>

      <div className="mb-3">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex mb-6 justify-center p-4">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-10 p-2 border rounded text-primary-dark"
        >
          <option value="hotels">Hotels</option>
          <option value="tours">Tours</option>
          <option value="flights">Flights</option>
        </select>
      </div>
      {filteredOffers.length === 0 ? (
        <p className="text-center text-gray-600">
          No packages found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
          {filteredOffers.map((offer) => (
            <PackageCard
              key={offer.id}
              offer={offer}
              type={category.slice(0, -1)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;
