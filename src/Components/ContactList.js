import React from "react";
import Card from "./Card";
import SearchFunction from "./SearchFunction";
import './ContactList.css'

const ContactList = ({results, nameSearch, loading}) => {

    const SearchResult = SearchFunction(results, nameSearch)
    const Length = SearchResult.length;

    return (
        <div className={Length === 0? "no-result" :"contact-list"}>
                {SearchResult.map((result, index) => {
                    return <Card 
                                key = {index}
                                id = {index}
                                Image = {result.picture.large}
                                Name = {result.name.first}
                                Email = {result.email}
                                Phone = {result.phone}
                                Age = {result.dob.age}
                        />
                })}
                {Length === 0 && !loading ? <h3>No Result Found!</h3> : ""}
                {loading && <h3>Loading Please Wait...</h3>}
        </div>
    )
}

export default ContactList;