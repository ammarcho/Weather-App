import "./searchbar.css";
import { useNavigate } from "react-router-dom";

export function SearchBar({ inputCity, setInputCity, onSearch}) {
  const navigate = useNavigate();

  function handleSearch() {
    if (!inputCity.trim()) return;
    onSearch(inputCity);
    navigate("/search");
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleHome() {
    navigate("/");
    setInputCity("")
  }

  return (
    <div className="SearchBar-class">
      <button className="home-btn" onClick={handleHome}>
        <span className="material-symbols-outlined Home">home</span>
      </button>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="search city..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="search-btn" onClick={handleSearch}>
          <span className="material-symbols-outlined Search">search</span>
        </button>
      </div>
    </div>
  );
}
