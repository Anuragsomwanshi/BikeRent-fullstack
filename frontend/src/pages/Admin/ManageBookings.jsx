import React, { useEffect, useState } from "react";

import Title from "../../components/Admin/Title";
import { useAppContext } from "../../Context/Appcontext";
import toast from "react-hot-toast";

const ManageBookings = () => {

  const {axios} = useAppContext()
  const [bookings, setBookings] = useState([]);

  const fetchAdminBookings = async () => {
    try {
      
      const {data} = await axios.get('/api/bookings/admin')
      data.success ? setBookings(data.bookings):toast.error(data.message)
    } catch (error) {

      toast.error(error.message)
      
    
    }
    
  };

  const changeBookingStatus = async (bookingId,status) => {
    try {
      
      const {data} = await axios.post('/api/bookings/change-status',{bookingId,status})
      if(data.success){
        toast.success(data.message)
        fetchAdminBookings()
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {

      toast.error(error.message)

      
      
    }
    
  };  

  useEffect(() => {
    fetchAdminBookings();
  }, []);
  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title title="Manage Bookings" subTitle="view all listed Booking data" />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-white">
          <thead className="text-white">
            <tr>
            
              <th className="p-3 font-medium">Bike</th>
              <th className="p-3 font-medium">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium  max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>

              
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking,index) => (

              <tr
                key={index}
                className="border-t border-borderColor text-white"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={booking.bike.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <p className="font-medium max-md:hidden">
                    {booking.bike.brand}{booking.bike.model}
                  </p>
                </td>

                <td className="p-3 max-md:hidden">
                  {booking.pickupDate.split("T")[0]}
                  to {booking.returnDate.split("T")[0]}
                </td>
                <td className="p-3">₹{booking.price}</td>

                <td className="p-3 max-md:hidden">
                  <span className="bg-gray-300 text-black px-3 py-1 rounded-full text-xs">
                    {" "}
                    offline
                  </span>
                </td>
                <td className="p-3">
                  {booking.status === "Pending" ? (
                    <select onChange={e=> changeBookingStatus(booking._id,e.target.value)}
                       defaultValue={booking.status}
                      
                      className="px-2 py-1.5 mt-1 text-white border border-borderColor rounded-md outline-none"
                    >
                      <option className="text-black" value="pending">Pending</option>
                      <option className="text-black" value="Cancelled">Cancelled</option>
                      <option className="text-black" value="Confirmed">Confirmed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "Confirmed" ? "bg-green-400 text-black" : "bg-red-400 text-black"}`}
                    >
                      {booking.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
