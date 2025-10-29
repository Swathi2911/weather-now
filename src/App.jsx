import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  // Get coordinates first
  const getCoordinates = async (cityName) => {
    try {
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
      const geoData = await geoRes.json();
      if (geoData.results && geoData.results.length > 0) {
        const { latitude, longitude, name, country } = geoData.results[0];
        getWeather(latitude, longitude, name, country);
      } else {
        setWeatherData({ error: "City not found" });
      }
    } catch {
      setWeatherData({ error: "Unable to fetch data" });
    }
  };

  // Get weather
  const getWeather = async (lat, lon, name, country) => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await res.json();
      setWeatherData({
        ...data.current_weather,
        name,
        country,
      });
    } catch {
      setWeatherData({ error: "Weather fetch failed" });
    }
  };

  return (
    <div className="app">
      <h1>🌦 Weather Now</h1>
      <Search onSelectCity={getCoordinates} />
      <Weather weatherData={weatherData} />
    </div>
  );
}

export default App;
