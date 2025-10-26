import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ToursCard from "../components/ToursCard";
import { tours } from "../data/tours";
import "./Tours.css"
import Banner from "../components/Banner";

const sorts = [
  { value: "price-asc", label: "Cijena ↑" },
  { value: "price-desc", label: "Cijena ↓" },
  { value: "title-asc", label: "Naziv A–Z" },
];

export default function Tours() {
  // izdvajanje kategorija i cijena
  const categories = ["Svi", ...new Set(tours.map((c) => c.category))];
  const prices = ["Sve", ...new Set(tours.map((t) => t.price))];

  // state varijable
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Svi");
  const [price, setPrice] = useState("Sve");
  const [sort, setSort] = useState("price-asc");
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(()=> {
    const urlCat = decodeURIComponent(searchParams.get("category"));
    const urlQuery = decodeURIComponent(searchParams.get("query"));
    const urlPrice = decodeURIComponent(searchParams.get("price"));
    const urlSort = decodeURIComponent(searchParams.get("sort"));

    if (urlCat && urlCat !="null") setCategory(urlCat);
    if (urlQuery && urlQuery != "null") setQuery(urlQuery);
    if (urlPrice && urlPrice != "null") setPrice(urlPrice);
    if (urlSort && urlPrice != "null") setSort(urlSort);

  }, [])

  useEffect(()=> {
    let params = {};
    if (category) params.category = category;
    if(query) params.query = query;
    if(price) params.price= price;
    if(sort) params.sort = sort;

    setSearchParams(params, {replace:true});

  }, [query, category, price, sort])

  // filtriranje i sortiranje
  const filtered = useMemo(() => {
    let result = tours.filter(
      (c) =>
        (query ? c.title.toLowerCase().includes(query.toLowerCase()) : true) &&
        (category === "Svi" ? true : c.category === category) &&
        (price === "Sve" ? true : c.price === Number(price))
    );

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "title-asc") result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [query, category, price, sort]);

  return (
    <>
    <Banner title="Izleti" />
    <section className="tours container">
      <h1>Putovanja</h1>

      {/* Filteri */}
      <div className="filters">
        <input
          type="text"
          className="search"
          placeholder="Pretraži..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="subfilters">
          {/* Kategorije */}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Cijene */}
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {prices.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          {/* Sortiranje */}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Prikaz rezultata */}
      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((c) => (
            <ToursCard key={c.id} tours={c}/>
          ))}

        </div>
      ) : (
        <p className="muted">Nema rezultata za zadane filtere.</p>
      )}
    </section></>
  );
}
