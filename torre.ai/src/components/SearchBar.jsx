import React from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";


export const SearchBar = () => {
    const [search, setSearch] = React.useState("");

    const fetchData = async () => {
        const response = await fetch(`https://torre.bio/api/bios/${search}`);
        const data = await response.json();
        console.log(data);
    }

    const handleSearch = (value) => {
        setSearch(value);
        fetchData(search);
    }
    
    console.log(search);
    return(
        <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input type="text" placeholder="Search for a name" value={search} onChange={(e) => handleSearch(e.target.value)} />
        </div>
    )
}