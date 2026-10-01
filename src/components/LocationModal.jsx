// import React from "react";

import { X } from "lucide-react";
import { useState } from "react";

const LocationModal = ({ onclose }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    console.log(value);
    setCity("");
    // Handle form submission logic here
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      },
      {
        timeout: 10000,
      },
    );
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/50">
      <div className="h-75 w-md p-5 rounded-2xl bg-gray-100 shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where Are you now?</h2>
          <button
            onClick={onclose}
            className="cursor-pointer w-8 h-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 transform-border text-white "
          >
            <X />
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City Name"
              type="text"
              className="w-full border border-gray-400 rounded-2xl p-2"
            />
            <div className="text-center mt-4">
              <button
                type="submit"
                className="w-full text-lg font-medium bg-blue-500 hover:scale-105 transform-all delay-100 py-2 px-5 text-gray-100 rounded-2xl"
              >
                Check weather
              </button>
            </div>
          </form>
          <div className="my-2 text-center text-gray-400">or</div>
          <div className="text-center">
            <button
              onClick={handleGeoLocation}
              className="w-full text-lg font-medium bg-blue-500 hover:scale-105 transform-all delay-100 py-2 px-5 text-gray-100 rounded-2xl"
            >
              Use current location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
