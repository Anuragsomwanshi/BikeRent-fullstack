import React from "react";
import Title from "./Title";
import BikeCard from "./BikeCard";
import { useAppContext } from "../Context/Appcontext";

const FeatireBike = () => {
  const { bikes } = useAppContext();

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <Title
            title="Featured Bikes"
            subTitle="Explore Premium Bikes"
          />
        </div>

        {/* Bike Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatireBike;