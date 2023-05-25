import React from "react";
import ShowAge from "./ShowAge";
import './Card.css'

const Card = ({Id,Image, Name, Email, Phone, Age}) => {

    const [showAge, setShowAge] = React.useState(false)

    const handleShowAge = () => ShowAge(showAge, setShowAge)

    return(
        <div className="card">
            <div className="profile-photo">
                <img src={Image} alt="profile" className="profile-photo"/>
            </div>
            <div className="profile-details">
                <div className="name-container">
                    <div><b>Name: </b></div>
                    <div className="name">{Name}</div>
                </div>
                <div className="email-container">
                    <div><b>Email: </b></div>
                    <div className="email">{Email}</div>
                </div>
                <div className="phone-container">
                    <div><b>Phone: </b></div>
                    <div className="phone">{Phone}</div>
                </div>
                <div className={showAge ?"age-container" : "hideAge age-container"}>
                    <div><b>Age: </b></div>
                    <div className="age">{Age}</div>
                </div>
                <button className="age-button" onClick = {handleShowAge}><b>{showAge ? 'Hide Age' : 'Show Age'} </b></button>
            </div>
        </div>
    )
}

export default Card;