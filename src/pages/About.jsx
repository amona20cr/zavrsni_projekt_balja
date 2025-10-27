import React from "react";
import Banner from "../components/Banner";

export default function About (){
    return (
        <>
           <Banner
           title="O nama"
          />
        <section className="about container">
            <h1>O nama</h1>
            <p>
                Travel Agency od 2005. organizira izlete diljem svijeta. Naša misija je pružiti sigurna i nezaborvna putovanja prilagođena svakom putniku.
            </p>
            <h2>Naše vrijednosti</h2>
            <p>
                <ul>
                    <li>Sigurnost i pouzdanost</li>
                    <li>Pristupačne cijene</li>
                    <li>Manje grupe i autentična iskustva</li>
                </ul>
            </p>
        </section></>
    );
}