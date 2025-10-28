import React from "react";
import defaultImage from "../assets/image1.jpg";

export default function Banner({ title, subtitle, image }) {

  const background = image || defaultImage;

  return (
    <section
      style={{
        width: "100vw",
        height: "350px",
        marginLeft: "calc(50% - 50vw)",
        backgroundImage: `url(${background})`,
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
     
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {/* Glavni naslov */}
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
            background: "rgba(0, 0, 0, 0.45)",
            padding: "0.4em 1.2em",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
