import React, { useState } from "react";
import Title from "../../components/Admin/Title";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/Appcontext";
import toast from "react-hot-toast";

const Addbike = () => {

  const { axios } = useAppContext();

  const [img, setImg] = useState(null);

  const [bike, setBike] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onsubmitHandler = async (e) => {

    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {

      const formdata = new FormData();

      formdata.append("image", img);
      formdata.append("bikeData", JSON.stringify(bike));

      const { data } = await axios.post(
        "/api/admin/add-bike",
        formdata
      );

      if (data.success) {

        toast.success(data.message);

        setImg(null);

        setBike({
          brand: "",
          model: "",
          year: 0,
          pricePerDay: 0,
          location: "",
        });

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      toast.error(error.message);

    } finally {

      setIsLoading(false);

    }
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">

      <Title
        title="Add New Bike"
        subTitle="fill in details to list a new bike"
      />

      <form
        onSubmit={onsubmitHandler}
        className="flex flex-col gap-5 text-white text-sm mt-6 max-w-xl"
      >

        <div className="flex items-center gap-2 w-full">

          <label htmlFor="bike-image">

            <img
              src={
                img
                  ? URL.createObjectURL(img)
                  : assets.user_profile
              }
              alt=""
              className="h-14 rounded cursor-pointer"
            />

            <input
              type="file"
              id="bike-image"
              accept="image/*"
              hidden
              onChange={(e) => setImg(e.target.files[0])}
            />

          </label>

          <p className="text-sm text-white">
            Upload picture of bike
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex flex-col w-full">

            <label>Brand</label>

            <input
              type="text"
              placeholder="ex. Honda, Bajaj, TVS ..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={bike.brand}
              onChange={(e) =>
                setBike({
                  ...bike,
                  brand: e.target.value,
                })
              }
            />

          </div>

          <div className="flex flex-col w-full">

            <label>Model</label>

            <input
              type="text"
              placeholder="ex. Unicorn, Platina, Rider ..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={bike.model}
              onChange={(e) =>
                setBike({
                  ...bike,
                  model: e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="flex flex-col w-full">

            <label>Year</label>

            <input
              type="number"
              placeholder="2026"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={bike.year}
              onChange={(e) =>
                setBike({
                  ...bike,
                  year: e.target.value,
                })
              }
            />

          </div>

          <div className="flex flex-col w-full">

            <label>Daily Price</label>

            <input
              type="number"
              placeholder="200"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={bike.pricePerDay}
              onChange={(e) =>
                setBike({
                  ...bike,
                  pricePerDay: e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="flex flex-col w-full">

          <label>Location</label>

          <select
            value={bike.location}
            onChange={(e) =>
              setBike({
                ...bike,
                location: e.target.value,
              })
            }
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
          >

            <option value="">Select a location</option>

            <option className="text-black" value="Latur">
              Latur
            </option>

            <option className="text-black" value="Pune">
              Pune
            </option>

            <option className="text-black" value="Dharashiv">
              Dharashiv
            </option>

            <option className="text-black" value="Solapur">
              Solapur
            </option>

          </select>

        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-orange-200 text-black rounded-md font-medium w-max cursor-pointer"
        >
          {isLoading ? "Adding..." : "Add Your Bike"}
        </button>

      </form>

    </div>
  );
};

export default Addbike;