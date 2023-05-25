import React from "react";
import Card from "./Card";
import SearchFunction from "./SearchFunction";
import './ContactList.css'

const ContactList = ({results, nameSearch}) => {

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
                {Length === 0 && <h3>No Result Found!</h3>}
        </div>
    )
}

export default ContactList;