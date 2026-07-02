import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import BikeCard from "../components/BikeCard";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../Context/Appcontext";
import toast from "react-hot-toast";

const Bikes = () => {
  const [input, setInput] = useState("");
  const [filterBikes, setFilterBikes] = useState([]);

  const [searchParams] = useSearchParams();

  const location = searchParams.get("location");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { bikes, axios } = useAppContext();

  const isSearchData = location && pickupDate && returnDate;

  const applyFilter = () => {
    if (!input.trim()) {
      setFilterBikes(bikes);
      return;
    }

    const filtered = bikes.filter((bike) => {
      return (
        bike.brand?.toLowerCase().includes(input.toLowerCase()) ||
        bike.model?.toLowerCase().includes(input.toLowerCase()) ||
        bike.year?.toString().includes(input) ||
        bike.location?.toLowerCase().includes(input.toLowerCase())
      );
    });

    setFilterBikes(filtered);
  };

 const searchBikeAvailability = async () => {
  try {
    const { data } = await axios.post(
      "/api/bookings/check-availability",
      {
        location,
        pickupDate,
        returnDate,
      }
    );

    console.log("API Response:", data);

    if (data.success) {
      console.log("Available Bikes:", data.availablebikes);
      setFilterBikes(data.availablebikes);

      if (data.availablebikes.length === 0) {
        toast("No bikes available");
      }
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch bikes");
  }
};
  useEffect(() => {
  if (isSearchData) {
    searchBikeAvailability();
  }
}, [location, pickupDate, returnDate]);
  useEffect(() => {
    if (bikes.length > 0 && !isSearchData) {
      applyFilter();
    }
  }, [input, bikes]);

  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title={"Available Bikes"}
          subTitle={"Book your favourite bike"}
        />
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="mb-4">Showing {filterBikes.length} bikes</p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by brand, model, year or location"
          className="w-full p-4 border rounded-lg outline-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 xl:px-20 max-w-7xl mx-auto">
          {filterBikes.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bikes;