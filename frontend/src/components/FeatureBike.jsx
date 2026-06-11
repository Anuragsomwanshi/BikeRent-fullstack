import React from "react";
import Title from "./Title";
import BikeCard from "./BikeCard";
import { useAppContext } from "../Context/Appcontext";

const FeatireBike = () => {
  const { bikes } = useAppContext();

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Section Title */}
      <div className="text-center">
        <Title
          title="Featured Bikes"
          subTitle="Explore Premium Bikes"
        />
      </div>

      {/* Bike Cards */}
      <div className="w-full mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {bikes.map((bike) => (
          <BikeCard key={bike._id} bike={bike} />
        ))}
      </div>
    </section>
  );
};

export default FeatireBike;