import React from "react";

const Title = ({ title, subTitle, align }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" ? "md:items-start md:text-left" : ""
      }`}
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-6">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;