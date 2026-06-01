import React, { useState } from "react";
import { assets, cityName } from "../assets/assets";
import { useAppContext } from "../Context/Appcontext";

const Head = () => {
  const [location, Setlocation] = useState("");
  const{pickupDate,setPickupDate,returnDate,setReturnDate,navigate} = useAppContext()


  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/bikes?location ='+location+'&pickupDate='+pickupDate+'&returnDate='+ returnDate)

  }
  return (
    <div className="h-screen flex flex-col items-center-safe justify-between  gap-10 bg-light text-center border-2 ">
      <h1 className="md:text-5xl text-4xl font-bold ">Bikes on Rent</h1>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-baseline justify-around md:items-center p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white">
        <div className="flex flex-col  md:flex-row items-center  md:items-center gap-11 ">
          <div className="flex flex-col items-baseline gap-1 ">
            <select
              required
              value={location}
              onChange={(e) => Setlocation(e.target.value)}
            >
              <option value="">pickup location </option>

              {cityName.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="px1 text-sm text-gray-300">
              {location ? location : "choose location"}
            </p>
          </div>

          <div className="flex flex-col items-baseline gap-1">
            <label htmlFor="pickup-date">pick-up date</label>
            <input
            value={pickupDate}
            onChange={e=>setPickupDate(e.target.value)}
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          <div className="flex flex-col items-baseline gap-1">
            <label htmlFor="return-date">return date</label>
            <input
             value={returnDate}
            onChange={e=>setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              
              className="text-sm text-gray-500"
              required
            />
          </div>

        </div>

        
          <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-orange-200 hover:bg-orange-500 text-black rounded-full cursor-pointer">
            <img  className='h-6 rounded-full' src={assets.search} alt="search" />
            search
            </button>
      </form>

      

      <img src={assets.karizma} className="h-100 rounded-full " alt="" />
    </div>
  );
};

export default Head;
