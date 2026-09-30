// import React from "react";

import { X } from "lucide-react";

const LocationModal = ({ onclose }) => {
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
          <form className="space-y-2">
            <input
              placeholder="Enter City Name"
              type="text"
              className="w-full border border-gray-400 rounded-2xl p-2"
            />
            <button
              type="submit"
              className="text-lg font-medium bg-blue-500 hover:scale-105 transform-all delay-100 py-2 px-5 text-gray-100 rounded-2xl"
            >
              Get weather
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
