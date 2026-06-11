import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Bikes", "My Bookings"],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-10 border-b border-gray-700">
          {/* Logo & Description */}
          <div className="w-full lg:w-2/5">
            <img
              src={assets.icon}
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 rounded-full"
            />

            <p className="mt-5 text-sm sm:text-base text-gray-300 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum unde quaerat eveniet cumque accusamus atque qui error
              quo enim fugiat.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 w-full lg:w-auto">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-white">
                  {section.title}
                </h3>

                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-5 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            © 2025 BikeRent. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;