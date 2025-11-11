import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const fetchWeather = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      localStorage.setItem("city", city);
    } catch (error) {
      if (error.response?.status === 404) {
        setError("City not found. Please try another location.");
      } else {
        setError("Failed to fetch weather data. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("city") || "Delhi";
    setCity(savedCity);
    fetchWeather();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    fetchWeather();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
          Weather Forecast
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading || !city.trim()}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                loading || !city.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? 'Searching...' : 'Get Weather'}
            </button>
          </div>
        </form>

        {error && (
          <div className="max-w-md mx-auto p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
            <p>{error}</p>
          </div>
        )}

        <div className="flex justify-center">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading weather data...</p>
            </div>
          ) : weather ? (
            <WeatherCard data={weather} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>Search for a city to see the weather forecast</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App