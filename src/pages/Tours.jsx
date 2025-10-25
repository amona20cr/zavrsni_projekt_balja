import React, { useMemo, useState, useEffect } from "react";
import { tours } from "..data/tours";

export default function Tours () {
    <section className="tours container">
        <h1>Putovanja</h1>
        <div className="filters">
            <input 
             type="text"
             className="search"
             placeholder="Pretraži..."
             value={query}
             onChange={(e) => setQuery(e.target.value)}/>
        </div>
    </section>
}