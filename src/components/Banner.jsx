import React from "react";
import hero from "../assets/image1.jpg"; 

export default function Banner() {
  return (
    <section
      style={{
        width: "100vw", 
        height: "340px", 
        marginLeft: "calc(50% - 50vw)",
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Tamni sloj preko slike */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
      ></div>
      <h1
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#fff",
          textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
          background: "rgba(0, 0, 0, 0.45)", 
          padding: "0.4em 1.2em",             
          borderRadius: "5px",              
        }}
      >
        Naslovnica
      </h1>
    </section>
  );
}
