import flightData from "../mockdata/FlightMockData.json";
import hotelData from "../mockdata/HotelMockData.json";
import tourData from "../mockdata/TourMockData.json";
import FlightDetails from "./FlightDetails";
import HotelDetails from "./HotelDetails";
import TourDetails from "./TourDetails";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const { type, id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = () => {
      setLoading(true);
      let data;
      switch (type) {
        case "flight":
          data = flightData.find((pkg) => pkg.id === id);
          break;
        case "hotel":
          data = hotelData.find((pkg) => pkg.id === id);
          break;
        case "tour":
          data = tourData.find((pkg) => pkg.id === id);
          break;
        default:
          setError("Invalid package type");
          return;
      }

      if (data) {
        setPackageDetails(data);
      } else {
        setError("Package not found");
      }
      setLoading(false);
    };

    fetchPackageDetails();
  }, [type, id]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!packageDetails) {
    return <ErrorMessage message="Package not found" />;
  }

  const renderPackageDetails = () => {
    switch (type) {
      case "hotel":
        return <HotelDetails hotel={packageDetails} />;
      case "tour":
        return <TourDetails tour={packageDetails} />;
      case "flight":
        return <FlightDetails flight={packageDetails} />;
      default:
        return <ErrorMessage message="Invalid package type" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">{renderPackageDetails()}</div>
  );
};

const LoadingSkeleton = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-6">
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </CardContent>
  </Card>
);

const ErrorMessage = ({ message }) => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-6">
      <p className="text-center text-red-500">{message}</p>
    </CardContent>
  </Card>
);

export default PackageDetails;
