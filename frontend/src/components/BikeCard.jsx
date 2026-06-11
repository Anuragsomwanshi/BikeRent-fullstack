import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/bike-details/${bike._id}`)}
      className="group bg-orange-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full"
    >
      {/* Bike Image */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img
          src={bike.image}
          alt="Bike"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Bike Details */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              {bike.brand} {bike.model}
            </h3>

            <p className="text-sm text-gray-600 mt-1">{bike.year}</p>

            <p className="text-base sm:text-lg font-bold text-orange-600 mt-2">
              ₹{bike.pricePerDay}/day
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-4">
          <div className="flex items-center text-sm sm:text-base text-gray-700">
            <img
              src={assets.location_icon}
              alt="Location"
              className="h-4 w-4 mr-2"
            />
            <span className="truncate">{bike.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;