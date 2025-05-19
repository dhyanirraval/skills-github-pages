import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "9ca35d779dfaa05ce16a26a4a3f0a26b";
  const CITY = "Rajkot"; // Change to your city

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => setWeather(response.data))
      .catch(error => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className="weather-container">
      {weather ? (
        <>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
