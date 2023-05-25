import React from "react";
import Card from "./Card";

const ContactList = ({results}) => {
    
    return (
        <>
            {results.map((result, index) => {
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
        </>
    )
}

export default ContactList;