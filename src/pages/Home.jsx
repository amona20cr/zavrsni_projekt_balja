import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/tours";
import Banner from "../components/Banner";

export default function Home() {
    const featured = [...tours].slice (0,3);

    return (
        <section className="home">
            <Banner />
            <div className="hero container">
                <h1>Dobrodosli u našu Putničku agenciju!</h1>
                <p>Najbolja ponuda izleta i avantura</p>
            </div> 
                <div className="container" style={{display: "flex", gap: 15, marginTop: 15}} >
                    <Link to="/tours" className="btn">Pregledaj ture</Link>
                    <Link to="/contact" className="btn" style={{background: "var(--primary-900)"}}>Kontakt</Link>
                </div>
                <div className="container">
                    <h2>Izdvojeni izleti</h2>
                    <div className="grid">
                        {featured.map(c => (
                            <p>{c.title} {c.category}</p>
                        ))}
                    </div>
                </div>
        </section>
    );
}