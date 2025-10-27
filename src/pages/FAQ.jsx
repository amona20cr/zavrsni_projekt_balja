import React, { useState } from "react";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import Image2 from "../assets/image2.jpg"

const faqs = [
    {question: "Kako rezervirati izlet?", answer: "Izlet mozete rezervirati pozivom ili kontakt formom preko naše stranice."},
    {question: "Koje su opcije plaćanja?", answer: "Platiti možete putem virmana, gotovinski na blagajni ili putem kartice online."},
    {question: "Jesu li izleti sigurni?",answer: "Izleti su apsolutno sigurni, a mi jako Vaša agencija osiguravamo Vas u slučaju ikakve štete ili ozljede u okviru ponuđene cijene"},
    {question: "Mogu li dobiti račun?", answer: "Račun dobijete na Vaš e-mail prilikom uplate nakon online plaćanja ili direktno od nas plaćanje na blagajni"},
    {question: "Što ako se izlet otkaže?", answer: "Vodimo brigu da se to dogodi ukoliko j eapsolutno nužni i neizbježno no ukoliko se ne može izbjeci u mogućnosti ste ili izabrati dtugi termin ili zatražiti uplaćenih sredstava."},
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
      <>
        <Banner title="F.A.Q" image={Image2}/>

        <section className="faq container">
          <h1>Često postavljena pitanja</h1>
          <div style={{ marginTop: 15 }}>
            {faqs.map((f, i) => (
              <Accordion
                key={i}
                question={f.question}
                answer={f.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </section>
      </>
    );
}
