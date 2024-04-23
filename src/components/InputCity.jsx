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
    <div className="flex flex-col md:flex-row gap-5 py-4 px-4">
      <input
        type="text"
        placeholder="Enter city name..."
        className="w-full border bg-cyan-50 border-cyan-600 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-cyan-800"
        value={city}
        onChange={handleCityChange}
      />
      <button
        className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-r w-full md:w-1/4"
        onClick={handleSubmit}
      >
        Get Weather
      </button>
    </div>
  );
};

export default InputCity;
