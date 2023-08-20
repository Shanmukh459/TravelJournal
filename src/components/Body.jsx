import React from "react"

export default function Body(props) {
    return (
        <div className="main-item">
            <div>
                <img className="main-image" src={props.item.imageUrl} />
            </div>
            <div>
                <div className="title-location">
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>view on Google Maps</a>
                </div>
                <div>
                    <h2>{props.item.title}</h2>
                    <h4>{props.item.startDate}-{props.item.endDate}</h4>
                    <p>{props.item.description}</p>
                </div>
                
            </div> 
        </div>
    )
}