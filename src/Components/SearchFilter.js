import React from "react";
import ContactList from "./ContactList";
import './SearchFilter.css'

const SearchFilter = ({results}) => {

    const [nameSearch, setNameSearch] = React.useState("")

    const EnteredName = (event) => {
        setNameSearch(event.target.value)
    }

    const search = (results) => {
        return (results.filter(
            user => user.name.first.toLowerCase().includes(nameSearch.toLowerCase()) 
                    || user.email.toLowerCase().includes(nameSearch.toLowerCase()) 
        ))
    }

    return (
        <>
        <input
            type = "text"
            placeholder="Search Here..."
            className="search-box"
            onChange={EnteredName}
        >
        </input>
        <ContactList 
            results = {search(results)}
        />
        </>
    )
}

export default SearchFilter;