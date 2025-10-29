import React from "react";

function Weather({ weatherData }) {
  if (!weatherData) return <p className="info">Type a city name to view weather ☀️</p>;
  if (weatherData.error) return <p className="error">{weatherData.error}</p>;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}, {weatherData.country}</h2>
      <p>🌡 Temperature: {weatherData.temperature}°C</p>
      <p>💨 Wind Speed: {weatherData.windspeed} km/h</p>
      <p>🧭 Wind Direction: {weatherData.winddirection}°</p>
      <p>⏱ Last Updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Weather;
