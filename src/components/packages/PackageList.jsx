import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockHotelData from "../../mockdata/HotelMockData.json";
import mockTourData from "../../mockdata/TourMockData.json";
import PackageCard from "./PackageCard";

const PackageList = () => {
  const [featuredOffers, setFeaturedOffers] = useState([]);

  useEffect(() => {
    const shuffleFeaturedOffers = () => {
      const hotelOffers = mockHotelData.map((hotel) => ({
        ...hotel,
        type: "hotel",
      }));
      const tourOffers = mockTourData.map((tour) => ({
        ...tour,
        type: "tour",
      }));
      const allOffers = [...hotelOffers, ...tourOffers];
      const shuffledOffers = allOffers
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setFeaturedOffers(shuffledOffers);
    };

    shuffleFeaturedOffers();
    const interval = setInterval(shuffleFeaturedOffers, 10000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-display font-bold text-center mb-8 text-primary-dark">
        Featured Packages
      </h2>
      <Slider {...settings}>
        {featuredOffers.map((offer) => (
          <motion.div
            key={offer.id}
            className="p-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <PackageCard offer={offer} type={offer.type} />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageList;
