import React, { useEffect, useRef, useState } from "react";
import xIcon from "../assets/xIcon.svg";

const Modal = ({ isOpen, onClose, info }) => {
  const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsModalVisible(true);
      const animationDuration = 100; // Duración de la animación en milisegundos
      setTimeout(() => {
        modalRef.current.style.top = "50%";
      }, animationDuration);
    } else {
      // Ajustar el estado después de que se complete la animación de cierre
      const animationDuration = 300; // Duración de la animación en milisegundos
      setTimeout(() => {
        setIsModalVisible(false);
      }, animationDuration);
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: isModalVisible ? "block" : "none",
        zIndex: 999,
        transition: "opacity 0.3s",
        opacity: isOpen ? 1 : 0,
      }}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        style={{
          position: "absolute",
          top: isOpen ? "100%" : "-100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#000",
          padding: 10,
          borderRadius: "16px",
          transition: "top 0.3s",
        }}
      >
        {/*<p
          style={{
            textAlign: "center",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: 18,
            fontWeight: "600",
            lineHeight: "35px",
            whiteSpace: "pre-line",
          }}
        >
          Escanea este QR para obtener más{"\n"}información de esta especie
        </p>*/}
        <img
          src={info}
          alt="info"
          style={{ height: "80vh", objectFit: "cover" }}
        />
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            position: "absolute",
            //top: "15%",
            right: 10,
          }}
          onClick={onClose}
        >
          <img src={xIcon} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
