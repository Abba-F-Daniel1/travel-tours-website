import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, User, Mail, Package, CreditCard } from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!bookingDetails) return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">No booking details found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={() => navigate('/packages')}>View Packages</Button>
        </CardContent>
      </Card>
    </div>
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section 
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <motion.div {...fadeInUp} className="flex items-center justify-center mb-4">
              <CheckCircle className="text-green-500 w-16 h-16" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-center mb-2">Booking Confirmed!</CardTitle>
            <CardDescription className="text-center text-lg">
              Thank you for choosing our service. Your adventure awaits!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <Package className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Package</p>
                <p className="font-semibold">{bookingDetails.packageType}</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <Calendar className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold">{new Date(bookingDetails.date).toLocaleDateString()}</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <User className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold">{bookingDetails.name}</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{bookingDetails.email}</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <CreditCard className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Payment</p>
                <p className="font-semibold">
                  **** **** **** {bookingDetails.paymentDetails.lastFourDigits}
                </p>
                <p className="text-sm text-gray-500">
                  {bookingDetails.paymentDetails.cardHolder}
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center space-x-4">
              <div className="text-blue-500 w-6 h-6 flex items-center justify-center font-bold">$</div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-semibold">${bookingDetails.price}</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="mt-8 flex justify-center">
              <Button onClick={() => navigate('/')} className="mr-4">Return Home</Button>
              <Button onClick={() => navigate('/packages')} variant="outline">View More Packages</Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default BookingConfirmation;