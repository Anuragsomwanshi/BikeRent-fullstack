import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/Appcontext";
import { toast } from "react-hot-toast";

const Bikedetails = () => {
  const { id } = useParams();

  const {
    bikes,
    axios,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    navigate
  } = useAppContext();

  const [bike, setBike] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("HANDLE SUBMIT RUNNING");

  try {
    const { data } = await axios.post("/api/bookings/create", {
      bike: id,
      pickupDate,
      returnDate,
    });

    console.log("API RESPONSE:", data);

    if (data.success) {
      toast.success(data.message);
      navigate("/my-bookings");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("ERROR:", error);
    toast.error(error.message);
  }
};
   

useEffect(() => {
  

  if (bikes && bikes.length > 0) {
    const selectedBike = bikes.find(
      (item) => item._id === id || item.id === id
    );

   

    if (selectedBike) {
      setBike(selectedBike);
    }
  }
}, [bikes, id]);

if (!bike) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p>Bike not found</p>
        <p className="text-sm text-gray-500">
          Check console for Route ID and Bikes data.
        </p>
      </div>
    </div>
  );
}

  return (

    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <img
            src={bike.image}
            alt="bike"
            className="w-full max-w-xl h-auto object-cover rounded-xl mb-6 shadow-md"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {bike.brand}{bike.model}
              </h1>

              <p className="text-lg text-gray-500">
                {bike.year}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={assets.location_icon}
                  alt=""
                  className="w-5"
                />
                <p>{bike.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          
  onSubmit={(e) => {
    console.log("FORM SUBMITTED");
    handleSubmit(e);
  }}
          className="shadow-lg bg-orange-100 h-max sticky top-18 rounded-lg p-6 space-y-8"
        >
          <p className="flex items-center justify-between text-2xl font-semibold">
            ₹{bike.pricePerDay}
            <span className="font-light text-base">
              per day
            </span>
          </p>

          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">
              Pickup Date
            </label>

            <input
              id="pickup-date"
              type="date"
              required
              value={pickupDate}
              onChange={(e) =>
                setPickupDate(e.target.value)
              }
              min={new Date()
                .toISOString()
                .split("T")[0]}
              className="border px-3 py-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">
              Return Date
            </label>

            <input
              id="return-date"
              type="date"
              required
              value={returnDate}
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
              min={
                pickupDate ||
                new Date().toISOString().split("T")[0]
              }
              className="border px-3 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
               className="w-full bg-orange-300 hover:bg-orange-500 transition-all py-3 font-medium text-black rounded-xl cursor-pointer"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bikedetails;