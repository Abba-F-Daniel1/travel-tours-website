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
  const { id, title, description, image } = flight;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    const bookingData = {
      packageType: "Flight",
      packageId: flight.id,
      price: extractPrice(flight.description),
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: 1,
    };
    navigate("/booking", { state: bookingData });
  };

  // Helper functions (same as before)
  const extractPrice = (description) => {
    const priceMatch = description.match(
      /priced at (\d+(\.\d{2})?) ([A-Z]{3})/
    );
    return priceMatch ? priceMatch[1] : "N/A";
  };

  const extractCurrency = (description) => {
    const currencyMatch = description.match(/([A-Z]{3})/);
    return currencyMatch ? currencyMatch[1] : "USD";
  };

  const extractRoute = (title) => {
    return title.split(" to ");
  };

  const extractAirline = (description) => {
    const airlineMatch = description.match(/Flight by ([A-Z]{2})/);
    return airlineMatch ? airlineMatch[1] : "Unknown";
  };

  const extractSeats = (description) => {
    const seatsMatch = description.match(/Number of bookable seats: (\d+)/);
    return seatsMatch ? seatsMatch[1] : "N/A";
  };

  const [departureCode, arrivalCode] = extractRoute(title);
  const airline = extractAirline(description);
  const price = extractPrice(description);
  const currency = extractCurrency(description);
  const seats = extractSeats(description);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={handleGoBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
      </Button>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Flight Details</CardTitle>
          <CardDescription>{title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Flight Information</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{airline} Flight</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Departure</p>
                    <p className="font-semibold">{departureCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Arrival</p>
                    <p className="font-semibold">{arrivalCode}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  <Plane className="inline mr-2 h-4 w-4" />
                  Available Seats: {seats}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full h-64 relative">
            <img
              src={image}
              alt={`${departureCode} to ${arrivalCode} flight`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Price Details</h3>
            <p className="text-lg">
              Total Price:{" "}
              <span className="font-bold">
                {price} {currency}
              </span>
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <p>{description}</p>
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
