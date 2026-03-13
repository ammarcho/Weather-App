import { MainFound } from "../components/main/main-result-found/mainFound";
import { MainNotFound } from "../components/main/main-result-notfound/mainNotFound";

export function ResultSearch({ weather, loading, city, error,forecast }) {
  return (
    <div className="ResultSearch-class">

      {loading && <p>Loading...</p>}

      {!loading && error && <MainNotFound />}

      {!loading && weather && (
        <MainFound weather={weather} city={city} forecast={forecast} />
      )}

      {!loading && !weather && !error && (
        <p>Data belum tersedia</p>
      )}

    </div>
  );
}
