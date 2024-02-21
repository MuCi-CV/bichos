import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import homeIcon from "../assets/homeIcon.svg";
import chevronLeft from "../assets/chevron-left.svg";
import chevronRight from "../assets/chevron-right.svg";
import arrowUpRight from "../assets/arrow-up-right.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import Modal from "../components/Modal";
import xIcon from "../assets/xIcon.svg";
import inverseTable from "../assets/inverseTable.svg";
import "../App.css";

const DetailItem = ({ data }) => {
  const navigate = useNavigate();
  const params = useParams();
  const index = parseInt(params.id, 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentScale, setCurrentScale] = useState(1);

  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    let activityTimeout;
    let buttonsTimeout;

    const handleActivity = () => {
      // Reiniciar el temporizador de inactividad
      clearTimeout(activityTimeout);
      //console.log("atras");

      // Configurar el temporizador nuevamente
      activityTimeout = setTimeout(() => {
        // Redirigir después de 3 minutos de inactividad
        navigate("/");
      }, 180000);

      // Mostrar los botones nuevamente al detectar actividad
      setShowButtons(true);
    };

    const handleButtonsActivity = () => {
      // Reiniciar el temporizador de inactividad de los botones
      clearTimeout(buttonsTimeout);
      //console.log("botones");

      // Configurar el temporizador nuevamente
      buttonsTimeout = setTimeout(() => {
        setShowButtons(false);
      }, 10000);
    };

    // Agregar los listeners de actividad
    window.addEventListener("mousemove", () => {
      handleActivity();
      handleButtonsActivity();
    });

    window.addEventListener("touchmove", () => {
      handleActivity();
      handleButtonsActivity();
    });

    // Limpiar los temporizadores y los listeners al desmontar el componente
    return () => {
      clearTimeout(activityTimeout);
      clearTimeout(buttonsTimeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("touchmove", handleActivity);
    };
  }, [navigate, isZoomed, setShowButtons, isModalOpen]);

  /*if (!data || index === undefined || index < 0 || index >= data.length) {
    // Manejar el caso en el que no hay datos válidos para el índice dado
    // Puedes redirigir o mostrar un mensaje de error, según tus necesidades
    navigate("/");
    return null;
  }*/

  const item = data[index];

  const currentImageMeasurement = item.medidas;

  const handleVolverAtras = () => {
    navigate("/");
  };

  const handleZoomChange = (newScale) => {
    setIsZoomed(true);
    setCurrentScale(newScale.state.scale);
  };

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex < data.length) {
      navigate(`/detalle/${nextIndex}`);
    }
  };

  const handleBack = () => {
    const backIndex = index - 1;
    if (backIndex >= 0) {
      navigate(`/detalle/${backIndex}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FFF",
        width: "100%",
      }}
    >
      <div
        style={{
          display: isZoomed ? "none" : "flex",
          width: "70%",
          justifyContent: "space-between",
          marginTop: "3%",
        }}
      >
        <img
          src={homeIcon}
          alt="Home Logo"
          onClick={handleVolverAtras}
          style={{ height: "5%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //width: "20%",
          }}
        >
          <img src={inverseTable} alt="scale" style={{ height: 20 }} />
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            {(currentScale * currentImageMeasurement) % 1 !== 0
              ? (currentScale * currentImageMeasurement).toFixed(2)
              : (currentScale * currentImageMeasurement).toFixed(0)}
            mm
          </p>
        </div>
      </div>
      <TransformWrapper
        initialScale={currentScale}
        onZoom={(newScale) => {
          handleZoomChange(newScale);
        }}
        onTransformed={(newScale) => {
          handleZoomChange(newScale);
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div
              style={{
                position: "fixed",
                top: "30%",
                left: "80%",
                display: isZoomed && !showButtons ? "none" : "flex",
                flexDirection: "column",
                gap: 37,
                zIndex: 999,
              }}
            >
              <button
                style={{
                  width: 76,
                  height: 76,
                  backgroundColor: "#212121",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9,
                  border: "none",
                }}
                onClick={() => {
                  setIsZoomed(true);
                  zoomIn();
                }}
              >
                <img src={plus} alt="plus icon" />
              </button>
              <button
                style={{
                  width: 76,
                  height: 76,
                  backgroundColor: "#212121",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9,
                  border: "none",
                }}
                onClick={() => {
                  setIsZoomed(true);
                  zoomOut();
                }}
              >
                <img src={minus} alt="minus" />
              </button>
            </div>
            <TransformComponent
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: isZoomed ? 0 : 25,
                  height: isZoomed ? "100vh" : "auto",
                  width: "100%",
                }}
              >
                <img
                  src={item.img}
                  alt="insecto"
                  className={isZoomed ? "zoomed-image" : ""}
                  style={{
                    height: isZoomed ? "100%" : "500px",
                    width: isZoomed ? "auto" : "auto",
                  }}
                  loading="lazy"
                />
              </div>
            </TransformComponent>
            <button
              style={{
                display: isZoomed ? "block" : "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
              onClick={() => {
                if (currentScale === 1) {
                  setIsZoomed(false);
                } else {
                  setCurrentScale(1);
                  resetTransform();
                }
              }}
            >
              <img
                src={xIcon}
                alt="close"
                style={{ position: "fixed", top: "5%", right: "5%" }}
              />
            </button>
            <div
              style={{
                display: isZoomed ? "flex" : "none",
                flexDirection: "column",
                position: "fixed",
                top: "5%",
                right: "16%",
              }}
            >
              <img src={inverseTable} alt="escala" style={{ height: 20 }} />
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {(currentScale * currentImageMeasurement) % 1 !== 0
                  ? (currentScale * currentImageMeasurement).toFixed(2)
                  : (currentScale * currentImageMeasurement).toFixed(0)}
                mm
              </p>
            </div>
          </>
        )}
      </TransformWrapper>
      <div
        style={{
          display: isZoomed ? "none" : "block",
          width: "70%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: 40,
            fontWeight: "300",
            lineHeight: "60px",
          }}
        >
          {item.title}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            //height: 70,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 47,
              height: 47,
              backgroundColor: "#212121",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={chevronLeft} onClick={handleBack} alt="chevronLeft" />
          </div>
          <p
            style={{
              width: "65%",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: 18,
              fontWeight: "400",
              lineHeight: "35px",
              margin: 0,
            }}
          >
            {item.description}
          </p>

          <div
            style={{
              width: 47,
              height: 47,
              backgroundColor: "#212121",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={chevronRight} onClick={handleNext} alt="chevronRight" />
          </div>
        </div>
      </div>
      <div
        style={{ display: isZoomed ? "none" : "flex", alignItems: "center" }}
        onClick={() => {
          // Lógica para abrir el modal
          setIsModalOpen(true);
        }}
      >
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 15,
            fontWeight: "500",
            lineHeight: "35px",
            color: "#919191",
          }}
        >
          Más información
        </p>
        <img src={arrowUpRight} alt="arrowUpRight" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        info={item.info}
      />
    </div>
  );
};

export default DetailItem;
