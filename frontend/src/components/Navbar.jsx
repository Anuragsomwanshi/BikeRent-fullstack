
import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/Appcontext.jsx";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {
    setShowLogin,
    user,
    logout,
    isAdmin,
    axios,
    setIsAdmin,
  } = useAppContext();

  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/admin/change-role");

      if (data.success) {
        setIsAdmin(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav
      className={`relative w-[95%] mx-auto mt-5 rounded-full px-4 py-3 flex items-center justify-between ${
        location.pathname === "/" ? "bg-white " : "bg-blue-200"
      } shadow-md`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.icon} alt="logo" className="h-8 sm:h-10" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 ">
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`font-medium hover:text-orange-500 transition ${
              location.pathname === "/"
                ? "text-black"
                : "text-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Search */}
        <div className="flex items-center border rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Search Bike"
            className="bg-transparent outline-none placeholder-gray-400 w-40"
          />
          <img src={assets.search} alt="search" className="h-5 w-5" />
        </div>

        {/* Buttons */}
        <button
          onClick={() =>
            isAdmin ? navigate("/admin") : changeRole()
          }
          className="px-6 py-2 border rounded-full hover:bg-gray-100 transition"
        >
          {isAdmin ? "Admin" : "List Bikes"}
        </button>

        <button
          onClick={() => {
            user ? logout() : setShowLogin(true);
          }}
          className="px-6 py-2 bg-orange-300 hover:bg-orange-500 rounded-full transition"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        <img
          src={open ? assets.close : assets.menu}
          alt="menu"
          className="h-7 w-7"
        />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-5 lg:hidden z-50">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search Bike"
              className="w-full bg-transparent outline-none"
            />
            <img
              src={assets.search}
              alt="search"
              className="h-5 w-5"
            />
          </div>

          {/* Buttons */}
          <button
            onClick={() => {
              setOpen(false);
              isAdmin ? navigate("/admin") : changeRole();
            }}
            className="w-full py-3 border rounded-full"
          >
            {isAdmin ? "Admin" : "List Bikes"}
          </button>

          <button
            onClick={() => {
              setOpen(false);
              user ? logout() : setShowLogin(true);
            }}
            className="w-full py-3 bg-orange-300 hover:bg-orange-500 rounded-full"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

