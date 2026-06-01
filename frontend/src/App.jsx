import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import bikeDetails from "./pages/bikeDetails";
import Bikes from "./pages/Bikes";
import Bookings from "./pages/Bookings";
import Footer from "./components/Footer";
import Bikedetails from "./pages/bikeDetails";
import Layout from "./pages/Admin/Layout";
import Admin from "./pages/Admin/Admin";
import Addbike from "./pages/Admin/Addbike";
import Managebike from "./pages/Admin/Managebike";
import ManageBookings from "./pages/Admin/ManageBookings";
import Login from "./components/Login";
import { Toaster} from 'react-hot-toast'
import { useAppContext } from "./Context/Appcontext";
const App = () => {

  const {showLogin} = useAppContext()
  const isadminpath = useLocation().pathname.startsWith("/admin");


  return (

    <>
    <Toaster/>
    {showLogin && <Login  />}

    
      {!isadminpath && <Navbar/>}



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bike-details/:id" element={<Bikedetails />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/my-bookings" element={<Bookings />} />

        <Route path="/admin" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="add-bike" element={<Addbike />} />
          <Route path="manage-bike" element={<Managebike />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isadminpath && <Footer />}
    </>
  );
};

export default App;
