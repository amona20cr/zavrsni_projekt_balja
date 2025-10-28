import React from "react";
import ContactForm from "../components/ContactForm";
import Banner from "../components/Banner";
import image3 from "../assets/image3.jpg";

export default function Contact() {
    return (
        <>
        <Banner title="Kontakt" image={image3} />

        <section className="contact container">
            <h1>Kontakt</h1>
            <p className="muted"> Imate pitanja? Javite se.</p>
        <ContactForm/></section></>
    )
}


