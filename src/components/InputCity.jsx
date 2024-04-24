import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { toast } from "react-toastify";

const InputCity = () => {
  const [city, setCity] = useState("");
  const { fetchWeather, weatherData } = useWeather();
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = () => {
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
    fetchWeather(city);
    setCity("");
  };
  return (
    <div className="py-4 flex flex-wrap gap-4 justify-center">
      <input
        type="text"
        placeholder="Enter city name..."
        className="border bg-cyan-50 border-cyan-600 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-cyan-600 w-full md:w-1/4"
        value={city}
        onChange={handleCityChange}
      />
      <button
        className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-md w-full md:w-1/6 rounded-lg"
        onClick={handleSubmit}
      >
        Get Weather
      </button>
    </div>
  );
};

export default InputCity;
