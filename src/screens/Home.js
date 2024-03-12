import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useImage } from "../Context/ImageContext";
import chake from "../assets/identidad/Logo Exhibiion Chake Bicho.png";
import logo from "../assets/identidad/Logo Tatakualab-Un Espacio MuCi.png";

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

  useEffect(() => {
    // Bloquear el zoom al cargar el componente
    document.body.classList.add("zoom-blocker");

    // Bloquear el gesto de pellizcar para evitar el zoom en dispositivos táctiles
    document.addEventListener("gesturestart", function (e) {
      e.preventDefault();
    });

    // Eliminar el bloqueo de zoom y el evento al desmontar el componente
    /*return () => {
      document.body.classList.remove("zoom-blocker");
      document.removeEventListener("gesturestart", function (e) {
        e.preventDefault();
      });
    };*/
  }, []);

  return (
    <div className="container">
      <header style={{ marginBottom: "1%" }}>
        <img
          style={{ width: 400, objectFit: "cover" }}
          src={chake}
          alt="Chake Bicho!"
          loading="lazy"
        />
      </header>
      <main
        className="body"
        style={{
          display: imageLoaded ? "flex" : "none",
          rowGap: 37.5,
          marginBottom: "5%",
        }}
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
            {/*<p className="subtitle">{d.subtitle}</p>*/}
          </Link>
        ))}
      </main>
      <img
        style={{
          width: 400,
          objectFit: "cover",
          marginTop: "auto",
          marginBottom: "7%",
        }}
        src={logo}
        alt="Logo Tatakualab-Un Espacio MuCi"
        loading="lazy"
      />
      {!imageLoaded && (
        <div className="loadingContainer">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
