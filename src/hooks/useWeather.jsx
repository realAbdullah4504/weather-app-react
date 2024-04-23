import { createContext, useContext, useState } from "react";
import serverApi from "../services/request";
import { toast } from "react-toastify";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const res = await serverApi.get(
        `weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      );
      setWeatherData((prevData) => [...prevData, res.data]);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };
  const deleteCity = (id) => {
    setWeatherData((prevData) => prevData.filter((data) => data.id !== id));
  };
  const contextValue = {
    weatherData,
    fetchWeather,
    deleteCity,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
