import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "./hooks/useWeather.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <ToastContainer />
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
