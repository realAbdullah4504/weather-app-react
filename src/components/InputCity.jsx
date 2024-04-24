import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { toast } from "react-toastify";

const InputCity = () => {
  const [city, setCity] = useState("");
  const { fetchWeather, weatherData } = useWeather();
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async() => {
    if (!city) {
      toast.error("Please enter a city name");
      return;
    }
    const duplicateCity = weatherData.find(
      (data) => data.name.toLowerCase() === city.toLowerCase()
    );
    if (duplicateCity) {
      toast.error("City already added");
      return;
    }
    await fetchWeather(city);
    setCity("");
  };
  return (
    <div className="py-4 flex flex-wrap justify-center">

      <input
        type="text"
        placeholder="Enter city name..."
        className="border bg-cyan-50 border-cyan-600 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-cyan-600 rounded-lg w-full sm:w-[300px] "
        value={city}
        onChange={handleCityChange}
      />
      <button
        className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/4 md:w-[150px]  rounded-lg mt-2 sm:mt-0 sm:ml-2"
        onClick={handleSubmit}
      >
        Get Weather
      </button>
    </div>
  );
};

export default InputCity;
