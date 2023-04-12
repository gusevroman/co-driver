import React, { useState } from 'react';
import { IWeatherData } from '../../types';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {weatherData &&
          <div>
            <h2>{weatherData.name}</h2>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            <p>{weatherData.main.temp}°C</p>
            <p>{weatherData.weather[0].description}</p>
          </div>
      }
    </div>
  );
};

