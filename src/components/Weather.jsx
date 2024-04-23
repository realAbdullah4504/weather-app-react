import FeatherIcon from "feather-icons-react";
import { useWeather } from "../hooks/useWeather";
import WeatherCity from "./WeatherCity";

const Weather = () => {
  const { weatherData, deleteCity } = useWeather();

  return (
    <div className="flex flex-col md:flex-row gap-5 py-4 px-6 flex-wrap">
      {weatherData.length > 0 &&
        weatherData.map((data) => (
          <div key={data.id} className="relative">
            <FeatherIcon
              icon="x"
              size="25"
              className="absolute top-[-10px] right-[-10px] bg-red-800 text-white rounded-[50%] shadow-md cursor-pointer"
              onClick={() => deleteCity(data.id)}
            />
            <WeatherCity weatherData={data} />
          </div>
        ))}
    </div>
  );
};

export default Weather;
