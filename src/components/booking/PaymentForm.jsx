import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { CreditCard, Lock } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationData = {
      ...bookingData,
      paymentDetails: {
        ...paymentData,
        lastFourDigits: paymentData.cardNumber.slice(-4),
      },
    };
    
    // Store the combined data in localStorage
    localStorage.setItem("bookingDetails", JSON.stringify(confirmationData));
    navigate("/booking-confirmation", {
      state: { ...bookingData, ...paymentData },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Payment Details</CardTitle>
          <CardDescription>
            Enter your card information to complete the booking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardHolder">Card Holder</Label>
              <Input
                id="cardHolder"
                name="cardHolder"
                value={paymentData.cardHolder}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentData.expirationDate}
                  onChange={handleChange}
                  required
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="cvv"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Total Amount</Label>
              <p className="text-2xl font-semibold">${bookingData.price}</p>
            </div>
            <Button type="submit" className="w-full">
              Pay Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PaymentForm;
