import User from "../Models/User.js";
import fs from "fs";
import imagekit from "../config/Imagekit.js";
import Bike from "../Models/Bike.js";
import Booking from "../Models/Bookings.js";


// change user role to admin

export const changeRoleToAdmin = async (req, res) => {
  try {

    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, {
      role: "admin",
    });

    res.json({
      success: true,
      message: "List your Bikes",
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// add bike

export const addbike = async (req, res) => {
  try {

    const { _id } = req.user;

    const bikeData = JSON.parse(req.body.bikeData);

    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/bikes",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    await Bike.create({
      ...bikeData,
      admin: _id,
      image: optimizedImageUrl,
    });

    res.json({
      success: true,
      message: "Bike added successfully",
    });

  } catch (error) {

    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// get admin bikes

export const getAdminBikes = async (req, res) => {
  try {

    const { _id } = req.user;

    const bikes = await Bike.find({
      admin: _id,
    });

    res.json({
      success: true,
      bikes,
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// toggle bike availability

export const BikeAvaliable = async (req, res) => {
  try {

    const { _id } = req.user;
    const { bikeId } = req.body;

    const bike = await Bike.findById(bikeId);

    if (!bike) {
      return res.json({
        success: false,
        message: "Bike not found",
      });
    }

    if (bike.admin.toString() !== _id.toString()) {
      return res.json({
        success: false,
        message: "unauthorized",
      });
    }

    bike.isAvaliable = !bike.isAvaliable;

    await bike.save();

    res.json({
      success: true,
      message: "Availability toggled",
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// delete bike

export const DeleteBike = async (req, res) => {
  try {

    const { _id } = req.user;
    const { bikeId } = req.body;

    const bike = await Bike.findById(bikeId);

    if (!bike) {
      return res.json({
        success: false,
        message: "Bike not found",
      });
    }

    if (bike.admin.toString() !== _id.toString()) {
      return res.json({
        success: false,
        message: "unauthorized",
      });
    }

    bike.admin = null;
    bike.isAvaliable = false;

    await bike.save();

    res.json({
      success: true,
      message: "Bike removed",
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// admin dashboard data

export const getAdminData = async (req, res) => {
  try {

    const { _id, role } = req.user;

    if (role !== "admin") {
      return res.json({
        success: false,
        message: "unauthorized",
      });
    }

    const bikes = await Bike.find({
      admin: _id,
    });

    const bookings = await Booking.find({
      admin: _id,
    })
      .populate("bike")
      .sort({ createdAt: -1 });

    const pendingBookings = await Booking.find({
      admin: _id,
      status: "Pending",
    });

    const completedBookings = await Booking.find({
      admin: _id,
      status: "Confirmed",
    });

    const admindata = {
      totalBikes: bikes.length,
      totalBookings: bookings.length,
      pendingBookings: pendingBookings.length,
      completedBookings: completedBookings.length,
      recentBookings: bookings.slice(0, 3),
    };

    res.json({
      success: true,
      admindata,
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// update user image

export const updateUserImg = async (req, res) => {
  try {

    const { _id } = req.user;

    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "400" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    await User.findByIdAndUpdate(_id, {
      image: optimizedImageUrl,
    });

    res.json({
      success: true,
      message: "Image uploaded",
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};