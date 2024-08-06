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
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plane, Clock, Users } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const FlightDetails = ({ flight }) => {
  const { id, itineraries, price, validatingAirlineCodes, travelerPricings } =
    flight;

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const calculateDuration = (departure, arrival) => {
    const diff = new Date(arrival) - new Date(departure);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    const bookingData = {
      packageType: "Flight",
      packageId: flight.id,
      price: flight.price.total,
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
          <CardTitle className="text-3xl font-bold">Flight Details</CardTitle>
          <CardDescription>
            {flight.itineraries[0].segments[0].departure.iataCode} to{" "}
            {
              flight.itineraries[0].segments[
                flight.itineraries[0].segments.length - 1
              ].arrival.iataCode
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {itineraries.map((itinerary, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">Itinerary {index + 1}</h3>
              {itinerary.segments.map((segment, segIndex) => (
                <Card key={segIndex}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary">
                        {segment.carrierCode} {segment.number}
                      </Badge>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {calculateDuration(
                          segment.departure.at,
                          segment.arrival.at
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Departure
                        </p>
                        <p className="font-semibold">
                          {formatDateTime(segment.departure.at)}
                        </p>
                        <p>{segment.departure.iataCode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Arrival</p>
                        <p className="font-semibold">
                          {formatDateTime(segment.arrival.at)}
                        </p>
                        <p>{segment.arrival.iataCode}</p>
                      </div>
                    </div>
                    {segment.aircraft && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        <Plane className="inline mr-2 h-4 w-4" />
                        Aircraft: {segment.aircraft.code}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
          <Separator />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Price Details</h3>
            <p className="text-lg">
              Total Price:{" "}
              <span className="font-bold">
                {price.total} {price.currency}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              Base Price: {price.base} {price.currency}
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Passenger Information</h3>
            {travelerPricings.map((traveler, index) => (
              <div key={index} className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span>
                  Passenger {index + 1}: {traveler.travelerType} -{" "}
                  {traveler.price.total} {traveler.price.currency}
                </span>
              </div>
            ))}
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

export default FlightDetails;
