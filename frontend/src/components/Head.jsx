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

  if (!location) {
    return toast.error("Please select a pickup location");
  }

  if (!pickupDate) {
    return toast.error("Please select a pickup date");
  }

  if (!returnDate) {
    return toast.error("Please select a return date");
  }

  if (new Date(returnDate) < new Date(pickupDate)) {
    return toast.error("Return date cannot be earlier than pickup date.");
  }

  navigate(
    `/bikes?location=${encodeURIComponent(
      location
    )}&pickupDate=${pickupDate}&returnDate=${returnDate}`
  );
};

  return (
    <section className="min-h-screen bg-light flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

      {/* Heading */}
      <div className="text-center mb-8 lg:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Bikes on Rent
        </h1>

        <p className="mt-3 text-sm sm:text-base text-black">
          Book Your Perfect Ride
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 lg:p-8"
      >
        <div className="space-y-5">

          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>

            <select
              required
              value={location}
              onChange={(e) => Setlocation(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-400"
            >
              <option value="">Select Location</option>

              {cityName.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              {location || "Choose your pickup location"}
            </p>
          </div>

          {/* Pickup Date */}
          <div>
            <label
              htmlFor="pickup-date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pickup Date
            </label>

            <input
              id="pickup-date"
              type="date"
              required
              value={pickupDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-400"
            />
          </div>

          {/* Return Date */}
          <div>
            <label
              htmlFor="return-date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Return Date
            </label>

            <input
              id="return-date"
              type="date"
              required
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-400"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 transition duration-300 text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <img
              src={assets.search}
              alt="Search"
              className="w-5 h-5"
            />
            Search Bikes
          </button>
        </div>
      </form>

      {/* Bike Image */}
      <div className="w-full flex justify-center mt-10 sm:mt-12 lg:mt-16">
        <img
          src={assets.karizma}
          alt="Karizma Bike"
          className=" max-w-[160px] sm:max-w-xl rounded-full  object-contain"
        />
      </div>

    </section>
  );
};

export default Head;