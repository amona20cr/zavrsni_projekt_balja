import React from "react";
import {NavLink} from "react-router-dom";
import './Footer.css'

export default function Footer () {
    return (
        <footer className="footer">
            <div className ="container footer-inner">
                <p>{new Date (). getFullYear()} Putnička agencija. Sva prava pridržana.</p>
                <nav className="footer-nav">
                    <NavLink to="/" className={({isActive})=> {isActive ? "active" : ""}}>Naslovnica</NavLink>
                    <NavLink to="/about" className={({isActive})=> {isActive ? "active" : ""}}>O nama</NavLink>
                     <NavLink to="/faq" className={({isActive})=> {isActive ? "active" : ""}}>FAQ</NavLink>
                </nav>
            </div>
        </footer>
    )
}