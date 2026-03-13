import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import { ResultSearch } from "./pages/resultsearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/searchbar";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [queryCity, setQueryCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [forecast,setForecast] = useState(null)

  const APIKEY = "6e732e251a109e0f4c2540bee38259f2";

  useEffect(() => {
    if (!queryCity) return;

    async function fetchWeather() {
      try {

        setLoading(true);
        setError(false);
        setWeather(null);

        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${queryCity}&limit=1&appid=${APIKEY}`
        );
        const geoData = await geoRes.json();

        if (!geoData.length) {
          setError(true);
          return;
        }

        const { lat, lon } = geoData[0];

        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=id&appid=${APIKEY}`
        );


        const weatherData = await weatherRes.json();

        setWeather(weatherData);

        const weatherForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=id&appid=${APIKEY}`
        )

        const forecastData = await weatherForecast.json()

        setForecast(forecastData)

      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [queryCity]);

  return (
    <BrowserRouter>
      <div className="App-class">
        <div className="ContainerApp-class">

          <SearchBar
            inputCity={inputCity}
            setInputCity={setInputCity}
            onSearch={(city) => setQueryCity(city)}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <ResultSearch
                  weather={weather}
                  forecast={forecast}
                  loading={loading}
                  error={error}
                  city={queryCity}
                />
              }
            />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
