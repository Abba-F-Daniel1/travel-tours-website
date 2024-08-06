import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ offer, type }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 sm:h-64">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
          {offer.title}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
        <Link to={`/package/${type}/${offer.id}`}>
          <motion.button
            className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;
