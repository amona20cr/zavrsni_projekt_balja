import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ToursCard from "../components/ToursCard";
import { tours } from "../data/tours";


export default function Home() {
    const featured = [...tours].slice (0,3);

    return (
        <>
            <Banner title="Dobrodošli u Travel Agency"/>
            <section className="home">
                <div className="container" style={{display: "flex", gap: 15, marginTop: 15}} >
                    <Link to="/tours" className="btn">Pregledaj ture</Link>
                    <Link to="/contacts" className="btn" style={{background: "var(--primary-900)"}}>Kontakt</Link>
                </div>
                <div className="container">
                    <h2>Izdvojeni izleti</h2>
                    <div className="grid">
                        {featured.map(c => (
                            <ToursCard key={c.id} tours={c}/>
                        ))}
                    </div>
                </div>
        </section>
        </>
    );
}