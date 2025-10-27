import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({ question, answer, isOpen, onToggle }) {
  const [open, setOpen] = useState(false);

  // koristi parent kontrolu ako postoji, inače lokalni state
  const opened = typeof isOpen === "boolean" ? isOpen : open;

  const handleClick = () => {
    if (typeof onToggle === "function") {
      onToggle(); // kontrolira parent (FAQ)
    } else {
      setOpen(!open); // radi kao do sada ako parent ništa ne pošalje
    }
  };

  return (
    <div className="accordion-item">
      <button
        type="button"
        className="accordion-title"
        onClick={handleClick}
      >
        <span>{question}</span>
        <span>{opened ? "-" : "+"}</span>
      </button>
      {opened && <div className="accordion-content">{answer}</div>}
    </div>
  );
}
