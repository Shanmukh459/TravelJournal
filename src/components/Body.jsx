import React from "react"
import location from "../assets/images/location.svg"

export default function Body(props) {
    return (
        <div className="main-item">
            <div>
                <img className="main-image" src={props.item.imageUrl} />
            </div>
            <div>
                <div className="title-location">
                    <div className="loactionpin-title">
                        <img className="location-pin" src={location} />
                        <p>{props.item.location.toUpperCase()}</p>
                    </div>
                    <div>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>   
                </div>
                <div>
                    <h2>{props.item.title}</h2>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p className="main-desc">{props.item.description}</p>
                </div>
                
            </div> 
        </div>
    )
}