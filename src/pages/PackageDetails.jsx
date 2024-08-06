import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import hotelData from "../mockdata/HotelMockData.json";
import tourData from "../mockdata/TourMockData.json";
import FlightDetails from "./FlightDetails";
import HotelDetails from "./HotelDetails";
import TourDetails from "./TourDetails";

const PackageDetails = () => {
  const { type, id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        setLoading(true);
        let data;
        if (type === "flight") {
          const response = await axios.get(
            `/api/v2/shopping/flight-offers/${id}`
          );
          data = response.data;
        } else {
          const mockData = type === "hotel" ? hotelData : tourData;
          data = mockData.find((pkg) => pkg.id.toString() === id);
        }

        if (data) {
          setPackageDetails(data);
        } else {
          setError("Package not found");
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
        setError("Error fetching package details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [type, id]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error)
    return <div className="text-center py-16 text-red-500">{error}</div>;
  if (!packageDetails)
    return <div className="text-center py-16">Package not found</div>;

  const renderPackageDetails = () => {
    switch (type) {
      case "hotel":
        return <HotelDetails hotel={packageDetails} />;
      case "tour":
        return <TourDetails tour={packageDetails} />;
      case "flight":
        return <FlightDetails flight={packageDetails} />;
      default:
        return <div>Invalid package type</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">{renderPackageDetails()}</div>
  );
};

export default PackageDetails;