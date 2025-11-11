function WeatherCard({ data }) {
    const { name, main, weather } = data;
    
    return (
        <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
                        alt={weather[0].description}
                        className="w-16 h-16"
                    />
                </div>
                
                <div className="text-center mb-6">
                    <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
                    <p className="text-lg capitalize">{weather[0].description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm bg-black/20 rounded-lg p-4">
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Feels Like</span>
                        <span>{Math.round(main.feels_like)}°C</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Humidity</span>
                        <span>{main.humidity}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Pressure</span>
                        <span>{main.pressure} hPa</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Min/Max</span>
                        <span>{Math.round(main.temp_min)}°/{Math.round(main.temp_max)}°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard