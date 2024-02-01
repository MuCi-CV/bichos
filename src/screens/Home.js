import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MuciLogo from "../assets/muciLogo.svg";
import "../App.css";
import { useImage } from "../Context/ImageContext";

const Home = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { setGlobalImageLoaded, globalImageLoaded } = useImage();

  useEffect(() => {
    const preloadImages = async () => {
      if (!globalImageLoaded) {
        // Cargar todas las imágenes antes de mostrarlas en la pantalla
        const imagePromises = data.flatMap((d) => {
          return [
            new Promise((resolve, reject) => {
              const imgHome = new Image();
              imgHome.src = d.imgHome;
              imgHome.onload = resolve;
              imgHome.onerror = reject;
            }),
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = d.img;
              img.onload = resolve;
              img.onerror = reject;
            }),
          ];
        });

        try {
          // Esperar hasta que todas las imágenes se hayan cargado
          await Promise.all(imagePromises);
          // Todas las imágenes se han cargado, mostrarlas
          setImageLoaded(true);
          // Establecer el estado de carga de imágenes en el contexto global
          setGlobalImageLoaded(true);
        } catch (error) {
          console.error("Error al cargar las imágenes", error);
        }
      } else {
        // Si las imágenes ya se cargaron previamente, establecer el estado local
        setImageLoaded(true);
      }
    };

    preloadImages();
  }, [data, setGlobalImageLoaded, globalImageLoaded]);

  return (
    <div className="container">
      <header style={{ marginTop: "3%", marginBottom: "3%" }}>
        <img src={MuciLogo} alt="MUCI Logo" loading="lazy" />
      </header>
      <main
        className="body"
        style={{ display: imageLoaded ? "flex" : "none", rowGap: 37.5 }}
      >
        {data?.map((d, index) => (
          <Link to={`/detalle/${index}`} key={d.title} className="imgContainer">
            <img
              src={d.imgHome}
              alt="insecto"
              className="img"
              loading="lazy"
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            <p className="title">{d.title}</p>
            <p className="subtitle">{d.subtitle}</p>
          </Link>
        ))}
      </main>
      {!imageLoaded && (
        <div className="loadingContainer">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
