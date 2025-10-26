import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Categories from "./pages/Categories";
import ToursDetails from "./pages/ToursDetails";
import { tours } from "./data/tours";


export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<ToursDetails />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
