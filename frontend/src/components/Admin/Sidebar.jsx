import React, { useState } from "react";
import { adminMenuLinks, assets, userData } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../Context/Appcontext";
import toast from "react-hot-toast";

const Sidebar = () => {
  const {user,axios,fetchUser} = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
  try {
    const formdata = new FormData()
    formdata.append('image',image)

    const {data} = await axios.post('/api/admin/update-image',formdata)

    if(data.success){
      fetchUser()
      toast.success(data.message)
      setImage('')
    }else{

      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
    
  }
  };
  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://unsplash.com/photos/cracked-ice-pieces-on-dark-water-surface-FK0X8zKQP-8"
            }
            alt=""
           className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"/>
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"/>
          </div>
        </label>
      </div>

      {image && (
        
        <button className="absolute top-0 right-0 flex p-2 gap-1 bg-blue-300 text-black cursor-pointer onClick={updateImage} ">Save  <img
            src={assets.check_icon}
            width={13}
            alt=""
            onClick={updateImage}
          /></button>
      )}

      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>
 
      <div className="w-full">
        {adminMenuLinks.map((link,index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-5 w-full py-3 pl-4 first:mt-6 ${link.path === location.pathname ? " bg-orange-200 text-black-200" : 'text-white'}`}
          >
            <img
              src={link.path === location.pathname ?link.coloredIcon:link.icon}
              alt=" add bike"

             className="h-9 md:h-14 w-5 md:w-14  rounded-2xl "/>
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${link.path === location.pathname && "bg-blue-800"} w-1.5 h-8 rounded-1 right-0 absolute `}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
