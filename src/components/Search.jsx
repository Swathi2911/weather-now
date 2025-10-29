import React, { useState, useEffect } from "react";

function Search({ onSelectCity }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch city suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
        const data = await res.json();
        if (data.results) {
          setSuggestions(data.results.slice(0, 5));
        } else {
          setSuggestions([]);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 400);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p className="loading">Loading...</p>}

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city) => (
            <li
              key={city.id}
              onClick={() => {
                setQuery(city.name);
                setSuggestions([]);
                onSelectCity(city.name);
              }}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
