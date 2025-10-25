import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
        </Routes>
      </main>
    </div>
  );
}
