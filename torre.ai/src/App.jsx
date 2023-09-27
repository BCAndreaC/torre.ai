import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { Title } from "./components/SearchHeader";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="App">
        <div className="flex-container">
          <Title />
          <div className="search-bar_container">
            <SearchBar setResults={setResults} setLoading={setLoading} />
            {loading && <SearchResultsList results={results} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
