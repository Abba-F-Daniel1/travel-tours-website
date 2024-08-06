import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Star, Users, Clock } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HotelDetails = ({ hotel }) => {
  const { id, title, description, image, price, rating, duration, maxGuests } =
    hotel;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    const bookingData = {
      packageType: "Hotel",
      packageId: hotel.id,
      price: hotel.price,
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
          <CardTitle className="text-3xl font-bold">{hotel.title}</CardTitle>
          <CardDescription>{hotel.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              ${price} <span className="text-sm">per night</span>
            </Badge>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1 h-5 w-5" />
              <span className="font-semibold">{rating} / 5</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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

export default HotelDetails;
