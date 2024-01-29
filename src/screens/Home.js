import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MuciLogo from "../assets/muciLogo.svg";
import "../App.css";

const Home = ({ data }) => {
  // Estado para controlar la carga de las imágenes
  const [imageLoaded, setImageLoaded] = useState(false);

  // Manejador de eventos cuando la imagen se carga
  const handleImageLoad = () => {
    // Agregar un setTimeout de 3 segundos
    setTimeout(() => {
      setImageLoaded(true);
    }, 3000);
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  return (
    <div className="container">
      <header style={{ marginTop: "3%", marginBottom: "3%" }}>
        <img src={MuciLogo} alt="MUCI Logo" loading="lazy" />
      </header>
      <main className="body" style={{ display: imageLoaded ? "flex" : "none" }}>
        {data?.map((d, index) => (
          <Link to={`/detalle/${index}`} key={d.title} className="imgContainer">
            <img
              src={d.imgHome}
              alt="insecto"
              className="img"
              loading="lazy"
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            <p className="title">{d.title}</p>
            <p className="subtitle">{d.subtitle}</p>
          </Link>
        ))}
      </main>
      {/* Condición para mostrar el loader mientras la imagen carga */}
      {imageLoaded ? null : (
        <div className="loadingContainer">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
