import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
        {title}
      </h1>

      <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-6">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;