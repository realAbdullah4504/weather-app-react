import FeatherIcon from "feather-icons-react";
import { useWeather } from "../hooks/useWeather";
import WeatherCity from "./WeatherCity";

const Weather = () => {
  const { weatherData, deleteCity } = useWeather();

  return (
    <div className="flex flex-wrap">
      {weatherData.length > 0 &&
        weatherData.map((data) => (
          <div key={data.id} className="relative w-full sm:w-1/2 md:w-1/3 lg-w-1/4 xl:w-1/5 2xl:w-1/6 px-2 py-2">
            <FeatherIcon 
            icon="x"
            size={25}
            className="absolute top-[-5px] right-[-5px] cursor-pointer bg-red-700 text-white p-1 rounded-full"
            onClick={() => deleteCity(data.id)}
            />
            <WeatherCity
              key={data.id}
              weatherData={data}
              deleteCity={deleteCity}
            />
          </div>
        ))}
    </div>
  );
};

export default Weather;
