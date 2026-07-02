import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/bike-details/${bike._id}`)}
      className="group w-full max-w-sm mx-auto bg-orange-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      {/* Bike Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={bike.image}
          alt={`${bike.brand} ${bike.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Bike Details */}
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              {bike.brand} {bike.model}
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              {bike.year}
            </p>

            <p className="mt-2 text-lg font-bold text-orange-600">
              ₹{bike.pricePerDay}
              <span className="text-sm font-medium text-gray-700"> /day</span>
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-sm sm:text-base text-gray-700">
          <img
            src={assets.location_icon}
            alt="Location"
            className="h-4 w-4 flex-shrink-0"
          />
          <span className="truncate">{bike.location}</span>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;