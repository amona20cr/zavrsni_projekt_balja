
import React from "react";
import { Link } from 'react-router-dom'
import "./ToursCard.css"

export default function ToursCard({tours}) {
    const {
        id,
        title,
        category,
        destination,
        duration,
        description,
        price,
        image,
            }  = tours;

            return (
                <div className="card">
                    <img src={image} alt={title}/>
                    <div className="card-body">
                        <h3>{title}</h3>
                        <p className="muted">
                            <span className="pill">{category}</span>
                            <span className="pill">{destination}</span>
                            <span className="pill">{duration}</span>
                        </p>
                        <p>{description}</p>
                        <div className="card-bottom">
                            <span className="price">{price} €</span>
                            <Link to={`/tours/${id}`} className="btn">
                            Detalji
                            </Link> 
                        </div>
                    </div>
                </div>
            )
}


