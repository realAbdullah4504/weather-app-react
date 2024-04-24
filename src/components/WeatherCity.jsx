import { getBackgroundColor } from "../utils/helpers";
const WeatherCity = ({ weatherData }) => {
  const { name, main, weather, wind, sys } = weatherData || {};
  const backGroundColor = getBackgroundColor(sys, weather[0].main);

  return (
    <div
      className={`${backGroundColor.background} ${backGroundColor.text} shadow-md rounded-lg p-6`}
    >
      <h2 className="text-xl mb-4">{name}</h2>
      <div>
        <div className="flex justify-between gap-4">
          <span className="w-20">{weather[0].description}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weather[0].description}
          />
        </div>
        <div>
          <p className="text-4xl font-semibold">{Math.round(main.temp)}°C</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Feels like: {Math.round(main.feels_like)}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {Math.round(wind.speed)} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCity;
