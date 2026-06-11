
import React, { useState } from "react";
import { assets, cityName } from "../assets/assets";
import { useAppContext } from "../Context/Appcontext";

const Head = () => {
  const [location, Setlocation] = useState("");

  const {
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    navigate,
  } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light px-4 py-10 gap-8">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Bikes on Rent
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
       className="w-full max-w-md md:max-w-6xl mx-auto bg-white rounded-2xl md:rounded-full shadow-lg p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Form Fields */}
        <div className="flex flex-col  md:flex-row items-center gap-6 md:gap-10 w-full">

          {/* Pickup Location */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <select
              required
              value={location}
              onChange={(e) => Setlocation(e.target.value)}
              className="w-full md:w-48 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
            >
              <option value="">Pickup Location</option>

              {cityName.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="text-sm text-gray-400 mt-1">
              {location ? location : "Choose location"}
            </p>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <label
              htmlFor="pickup-date"
              className="text-sm font-medium mb-1"
            >
              Pick-up Date
            </label>

            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              required
              className="w-full md:w-44 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <label
              htmlFor="return-date"
              className="text-sm font-medium mb-1"
            >
              Return Date
            </label>

            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              required
              className="w-full md:w-44 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-300 hover:bg-orange-500 transition-all duration-300 text-black px-8 py-3 rounded-full cursor-pointer"
        >
          <img
            src={assets.search}
            alt="search"
            className="h-5 w-5"
          />
          Search
        </button>
      </form>

      {/* Bike Image */}
     <div className="flex justify-center w-full">
  <img
    src={assets.karizma}
    alt="Karizma Bike"
    className="w-full max-w-xs rounded-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto object-contain"
  />
</div>
    </div>
  );
};

export default Head
