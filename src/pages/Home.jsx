import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl text-blue-300 font-extrabold">
          NextLevel. <span className="text-blue-400">weather</span>
        </h1>
        <p className="py-4 text-md text-gray-400">
          Check your weather today in next level
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={() => setClick(true)}
          type="button"
          className="text-lg font-medium bg-blue-500 hover:scale-105 transform-all delay-100 py-2 px-5 text-gray-100 rounded-2xl"
        >
          Check weather
        </button>
      </div>
      {click && <LocationModal onclose={() => setClick(false)} />}
    </div>
  );
};

export default Home;
