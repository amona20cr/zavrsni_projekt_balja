import React, { useMemo, useState, useEffect } from "react";
import { tours } from "../data/tours";


export default function Tours () {
    const categories = [...new Set(tours.map(c => c.category))]; 
    const levels = [...new Set(tours.map(c => c.level))];   

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Svi");
    const [level, setLevel] = useState("Svi");
    
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
                   <option value="Svi">Svi</option>
                   {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

               <select value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="Svi">Svi</option>
            {levels.map((lvl) => (
                 <option key={lvl} value={lvl}>
                 {lvl}
             </option>
                 ))}
                </select>
             </div>
        </div>
    </section>
    );
}

