import React from "react"
import globe from "../assets/images/globe.png"

export default function Header() {
    return (
        <header>
            <img className="globe-header" src={globe} />
            <p>my travel journal.</p>
        </header>
    )
}