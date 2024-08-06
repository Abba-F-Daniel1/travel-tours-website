import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Star, Users, Clock } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TourDetails = ({ tour }) => {
  const {
    id,
    title,
    description,
    image,
    location,
    price,
    rating,
    duration,
    maxGuests,
  } = tour;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    const bookingData = {
      packageType: "Tour",
      packageId: tour.id,
      price: tour.price,
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: 1,
    };
    navigate("/booking", { state: bookingData });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={handleGoBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
      </Button>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{tour.title}</CardTitle>
          <CardDescription>{tour.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              ${price}
            </Badge>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1 h-5 w-5" />
              <span className="font-semibold">{rating} / 5</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>Max Guests: {maxGuests}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBookNow} className="w-full">
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TourDetails;
