import React from 'react';
import "./Detail.css"


const detail = (props) => {
    return (
        <div className="card" >
            <img src={props.imageURL} alt="Avatar"/>
            <div className="container">
                <h4><b>{props.confName}</b></h4>
                <ul> 
                <li>Date: {props.confStartDate}</li> 
                <li>Entry Type: {props.entryType}</li>
                <li>City: {props.city}</li>
                <li>State: {props.state}</li>
                </ul>
                
            </div>
        </div>
    )
}

export default detail;