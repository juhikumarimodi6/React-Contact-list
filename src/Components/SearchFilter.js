import React from "react";
import './SearchFilter.css'

const SearchFilter = () => {

    const [name, setName] = React.useState("")

    const EnteredName = (event) => {
        setName(event.target.value)
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