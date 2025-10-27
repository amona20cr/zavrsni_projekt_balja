
import React from "react";
import Banner from "../components/Banner";
import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";
import "./ToursDetail.css"; // 

export default function ToursDetails() {
  const { id } = useParams();

  const tour = Array.isArray(tours)
    ? tours.find((c) => c.id === Number(id))
    : null;

  if (!tour) {
    return (
      <div className="container">
        <p>Izlet nije pronađen</p>
        <Link to="/tours">Natrag na izlete</Link>
      </div>
    );
  }

  return (
    <section className="tours-details container">
      <Link
        to="/tours"
        className="btn"
        style={{ marginTop: 20, display: "inline-block" }}
      >
        {"<-- BACK"}
      </Link>

      <h1>{tour.title}</h1>

      {/* ✅ DODANO: samo klasa, bez inline stila */}
      <img src={tour.image} alt={tour.title} className="tour-image" />

      <p className="muted">
        <span className="pill">{tour.category}</span>
        <span className="pill">{tour.destination}</span>
        <span className="pill">{tour.duration}</span>
      </p>

      <p><strong>Cijena {tour.price}€</strong></p>
      <p>{tour.longDescription}</p>

      <h2>
        Otkrijte skrivene uvale i uživajte u kristalno čistom moru uz profesionalnu posadu.
      </h2>

      <h2>Termini</h2>
      <table>
        <thead>
          <tr>
            <th>Datumi kretanja</th>
            <th>Cijena</th>
          </tr>
        </thead>
        <tbody>
          {(tour.dates ?? []).map((d) => (
            <tr key={d}>
              <td>{d}</td>
              <td>{tour.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 14 }}>
        <button
          type="button"
          className="btn"
          onClick={() => alert("Hvala! Kontaktirat ćemo Vas.")}
        >
          Prijavi se!
        </button>
      </div>
    </section>
  );
}
