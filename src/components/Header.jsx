import React from "react"
import logo from "../assets/trollface.png"
import "./Header.css"

export default function Header(){
    return (
        <header className="header">
            <img src={logo} className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--description">Make Memes!</h4>
        </header>
    )
}