
import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...data, [name]: type === "checkbox" ? checked : value };
    setData(next);
    validate(next);
  };

  const validate = (values = data) => {
    const e = {};

    if (!values.name || values.name.trim().length < 5) {
      e.name = "Unesite ime i prezime (min 5 znakova)";
    }

    if (!values.email) {
      e.email = "Unesite email.";
    } else if (!values.email.includes("@") || !values.email.includes(".")) {
      e.email = "Email ne valja.";
    }

    if (!values.topic) {
      e.topic = "Unesite temu.";
    }

    if (!values.message || values.message.trim().length < 20) {
      e.message = "Poruka mora imati najmanje 20 znakova";
    }

    if (!values.consent) {
      e.consent = "Morate se složiti.";
    }

    setErrors(e);
    return Object.keys(e).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:", data);
    if (validate()) {
      alert("Poruka je poslana.");
      setData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Ime i prezime</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. Mate Jurić"
          id="name"
          className={errors.name ? "field-error" : ""}
          autoComplete="name"
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. mate@gmail.com"
          id="email"
          className={errors.email ? "field-error" : ""}
          autoComplete="email"
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>

      <div className="field">
        <label htmlFor="phone">Telefon</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. 095...98"
          id="phone"
          className={errors.phone ? "field-error" : ""}
          autoComplete="tel"
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>

      <div className="field">
        <label htmlFor="topic">Tema</label>
        <select
          name="topic"
          value={data.topic}
          onChange={handleChange}
          onBlur={handleChange}
          id="topic"
          className={errors.topic ? "field-error" : ""}
          autoComplete="off"
        >
          <option value="">-- Odaberi --</option>
          <option value="izbor">Izlet</option>
          <option value="pricing">Cijene</option>
          <option value="duration">Trajanje</option>
          <option value="other">Ostalo</option>
        </select>
        {errors.topic && <small className="error">{errors.topic}</small>}
      </div>

      <div className="field">
        <label htmlFor="message">Poruka</label>
        <textarea
          name="message"
          id="message"
          value={data.message}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Upišite poruku..."
          className={errors.message ? "field-error" : ""}
          autoComplete="off"
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}
      </div>

      <div className="field">
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={data.consent}
            onChange={handleChange}
            onBlur={handleChange}
            className={errors.consent ? "field-error" : ""}
          />
          <span>Slažem se sa uvjetima.</span>
        </label>
        {errors.consent && <small className="error">{errors.consent}</small>}
      </div>

      <button type="submit" className="btn">Pošalji</button>
    </form>
  );
}
