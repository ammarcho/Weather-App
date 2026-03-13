import "./mainFound.css"

export function MainFound({city,weather,forecast}){

    const dailyForecast = forecast?.list.filter((items)=>items.dt_txt.includes("12:00:00"));
    return(
        <div className="MainFound-class">
            <div className="Locdate-class">
                <div className="Kiri-locdate highlightfont">
                    <span className="material-symbols-outlined">location_on</span>
                    <h3>{city}</h3>
                </div>
                <h4>{new Date().toDateString()}</h4>
            </div>

            <div className="CurrentWeather-class">
                <img src={`/src/assets/weather/${weather.weather[0].main.toLowerCase()}.svg`} alt="" />
                <div className="TemperatureWeather-class">
                    <h3>{Math.round(weather.main.temp)}°C</h3>
                    <h4>{weather.weather[0].main}</h4>
                </div>
            </div>

            <div className="HumidityWind-class">
                <div className="Humidity-class">
                    <span className="material-symbols-outlined">water_drop</span>
                    <div className="DetailHumidity-class">
                        <h4>Humidity</h4>
                        <h4>{weather.main.humidity}</h4>
                    </div>
                </div>

                <div className="Wind-class">
                    <span className="material-symbols-outlined">air</span>
                    <div className="DetailWind-class">
                        <h4>Wind Speed</h4>
                        <h4>{weather.wind.speed} M/s</h4>
                    </div>
                </div>
            </div>

            <div className="WeatherForecast-class">
                {dailyForecast?.slice(0,5).map((item,index)=>(
                    <div className="ContentForecast-class" key={index}>
                        <h4 className="DateForecast">{item.dt_txt.slice(5,10)}</h4>
                        <img src={`/src/assets/weather/${item.weather[0].main.toLowerCase()}.svg`} alt="" className="ImageForecast"/>
                        <h4 className="TemperatureForecast">{Math.round(item.main.temp)}°C</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}