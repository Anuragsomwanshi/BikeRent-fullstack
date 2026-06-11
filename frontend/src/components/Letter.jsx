import React from "react";
import Title from "./Title";

const Letter = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 mb-20 md:mb-32">
      {/* Section Title */}
      <Title
        title="Never Miss This Deal"
        subTitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
      />

      {/* Newsletter Form */}
      <form className="w-full max-w-3xl mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full h-12 sm:h-14 px-4 border border-gray-300 rounded-lg sm:rounded-r-none outline-none focus:border-orange-400 text-gray-700 placeholder:text-gray-400"
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 md:px-10 bg-orange-300 hover:bg-orange-500 text-black font-medium rounded-lg sm:rounded-l-none transition-all duration-300 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Letter;