import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/Appcontext";

const Navbar = () => {
  const { user } = useAppContext();

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-3 gap-3 sm:gap-0">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.icon}
            alt="Logo"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Welcome Message */}
        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
            Welcome,{" "}
            <span className="text-orange-500 font-semibold">
              {user?.name || "Admin"}
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;