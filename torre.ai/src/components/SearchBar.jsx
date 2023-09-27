import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [search, setSearch] = React.useState("");

  const fetchData = () => {
    const requestBody = {
      query: search,
    };

    return fetch("https://torre.ai/api/entities/_searchStream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        const jsonResponseArray = text
          .split("\n")
          .filter(Boolean)
          .map((jsonStr) => {
            try {
              return JSON.parse(jsonStr); // Parse each JSON object
            } catch (error) {
              console.error("JSON Parsing Error:", error);
              return null;
            }
          });
        console.log("Response JSON Array:", jsonResponseArray);
        setResults(jsonResponseArray); // Store the results in state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSearch = (value) => {
    setSearch(value);
    fetchData();
  };

  console.log(search);

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Search for people"
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
