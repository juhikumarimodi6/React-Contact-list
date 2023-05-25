import React from "react";
import './SearchFilter.css'

const SearchFilter = ({setNameSearch}) => {

    const EnteredName = (event) => {
        setNameSearch(event.target.value)
    }

    return (
        <input
            type = "text"
            placeholder="Search Here..."
            className="search-box"
            onChange={EnteredName}
        >
        </input>
    )
}

export default SearchFilter;