import React, { useEffect, useState } from "react";
import { assets} from "../../assets/assets";
import Title from "../../components/Admin/Title";
import {useAppContext} from '../../Context/Appcontext.jsx'
import toast from "react-hot-toast";
const Managebike = () => {

  const {isAdmin,axios} = useAppContext()
  const [bikes, setBikes] = useState([]);

  const fetchAdminBikes = async () => {
    try {
      const {data} = await axios.get('/api/admin/bikes')
      if(data.success){
        setBikes(data.bikes)
      }else{

        toast.error(data.message)
      }
       
    } catch (error) {
      toast.error(error.message)
      
    }
  };




  const toggleAvaliability = async (bikeId) => {
    try {
      const {data} = await axios.post('/api/admin/toggle-bike',{bikeId})
      if(data.success){
       toast.success(data.message)
       fetchAdminBikes()
      }else{

        toast.error(data.message)
      }
       
    } catch (error) {
      toast.error(error.message)
      
    }
  };


  const deleteBike = async (bikeId) => {


    try {
      const confirm = window.confirm("Are you sure you want to delete the bike?")
      if(!confirm)return null 
      const {data} = await axios.post('/api/admin/delete-bike',{bikeId})
      if(data.success){
        toast.success(data.message)
        fetchAdminBikes()
      }else{

        toast.error(data.message)
      }
       
    } catch (error) {
      toast.error(error.message)
      
    }
  };

  useEffect(() => {
  isAdmin &&  fetchAdminBikes();
  }, [isAdmin]);

  return(
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title title="Manage Bikes" subTitle="view all listed bikes" />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-white">
          <thead className="text-white">
            <tr>
              <th className="p-3 font-medium">Bike</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium  max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bikes.map((bike,index) => (
              <tr key={index} className="border-t border-borderColor">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={bike.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />

                  <div className="max:md:hidden">
                    <p className="font-medium">
                      {bike.brand}{bike.model}
                    </p>
                  </div>
                </td>
                <td className="p-3 max-md:hidden">₹ {bike.pricePerDay}/day </td>

                <td className="p-3 max-md:hidden">
                  <span
                     onClick={()=>toggleAvaliability(bike._id)} className={` cursor-pointer px-3 py-1 rounded-full text-xs ${bike.isAvaliable ? "bg-green-300 text-black" : "bg-red-300 text-black"}`}
                  >
                    {bike.isAvaliable ? "Avaliable" : "Unavaliable"}
                  </span>
                </td>

                <td className="flex items-center p-3">
                    <img onClick={()=>deleteBike(bike._id)} src={assets.delete_icon} alt=""  className="cursor-pointer h-8 w-8 aspect-square rounded-md object-cove"/>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managebike;
