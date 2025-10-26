import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/tours";
import "../components/ToursCard.css";
import image1 from "../assets/image1.jpg";
import Banner from "../components/Banner";

export default function Categories() {
  const categories = [...new Set(tours.map((t) => t.category))];

  return (
    <>
  
      <Banner
        title="Kategorije putovanja"/>
        <div className="kategorije container">
            <h1>Kategorije izleta</h1>
            </div>
      <section className="categories container">
        
        <div className="grid">
          {categories.map((c) => (
            <div key={c} className="card">
              <img src={image1} alt={c} />
              <div className="card-body">
                <h3>{c}</h3>
                <p className="muted">Pregledaj ponudu</p>
                <Link
                  to={`/tours?category=${encodeURIComponent(c)}`}
                  className="btn"
                  style={{ background: "var(--primary-900)" }}
                >
                  Detalji
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
