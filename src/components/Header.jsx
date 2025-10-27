import React, { use, useState } from "react";
import { NavLink } from "react-router-dom"
import './Header.css'

export default function Header () {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">Turistička agencija</div>
                <button type="button" 
                className="travel-logo"
                onClick={() => setOpen (!open)}>
                     ✈︎
                </button>
                <nav className={`nav ${open ? "open" : ""}`}>
                    <NavLink to="/" className={({isActive})=> {isActive ? "active" : ""}}>Naslovnica</NavLink>
                    <NavLink to="/about"className={({isActive})=> {isActive ? "active" : ""}}>O nama</NavLink>
                    <NavLink to="/contacts"className={({isActive})=> {isActive ? "active" : ""}}>Kontakt</NavLink>
                    <NavLink to="/categories"className={({isActive})=> {isActive ? "active" : ""}}>Kategorije</NavLink>
                    <NavLink to="/tours"className={({isActive})=> {isActive ? "active" : ""}}>Izleti</NavLink>
                    <NavLink to="/faq"className={({isActive})=> {isActive ? "active" : ""}}>FAQ</NavLink>
                </nav>
            </div>
        </header>
    )
}
