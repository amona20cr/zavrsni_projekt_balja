import React, { useMemo, useState, useEffect } from "react";
import { tours } from "../data/tours";


export default function Tours () {
    const categories = [...new Set(tours.map(c => c.category))];    
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Svi");
return (
    <section className="tours container">
        <h1>Putovanja</h1>
        <div className="filters">
            <input 
             type="text"
             className="search"
             placeholder="Pretraži..."
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             />
             <div className="subfilters">
                <select value={category} onChange={(e)=> setCategory(e.target.value) }>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
             </div>
        </div>
    </section>
    )
}

