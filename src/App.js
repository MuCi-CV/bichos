import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import DetailItem from "./screens/DetailItem";
import EscarabajoTigre from "./assets/images/escarabajoTigre.jpg";
import BichosEspina from "./assets/images/bichosEspina.jpg";
import ChincheMalholiente from "./assets/images/chincheMalholiente.jpg";
import EscarabajoTortuga from "./assets/images/escarabajoTortuga.jpg";
import ChinchePlano from "./assets/images/chinchePlano.jpg";
import EscarabajoEscamado from "./assets/images/escarabajoEscamado.jpg";
import AbejaNativa from "./assets/images/abejanativa.jpg";
import AbejaSolitaria from "./assets/images/abejaSolitaria.jpg";
import BichoCazador from "./assets/images/bichoCazador.jpg";
import { ImageProvider } from "./Context/ImageContext";
import info1 from "./assets/Tablas_Informativas_Actualizadas/Escarabajo Tortuga.jpg";
import info2 from "./assets/Tablas_Informativas_Actualizadas/Chinche Plano.jpg";
import info3 from "./assets/Tablas_Informativas_Actualizadas/Escarabajo Tigre.jpg";
import info4 from "./assets/Tablas_Informativas_Actualizadas/Bichos Espina.jpg";
import info5 from "./assets/Tablas_Informativas_Actualizadas/Chinche Malholiente.jpg";
import info6 from "./assets/Tablas_Informativas_Actualizadas/Escarabajo Escamado.jpg";
import info7 from "./assets/Tablas_Informativas_Actualizadas/Abeja Nativa sin Aguijón.jpg";
import info8 from "./assets/Tablas_Informativas_Actualizadas/Abeja Solitaria.jpg";
import info9 from "./assets/Tablas_Informativas_Actualizadas/Bicho Cazador.jpg";

function App() {
  const data = [
    {
      imgHome: EscarabajoTortuga,
      img: EscarabajoTortuga,
      title: "Escarabajo Tortuga",
      subtitle: "Subtítulo del Item 1",
      description:
        "Sus caparazones se desarrollan de tal forma que dificultan el agarre de los depredadores.",
      info: info1,
    },
    {
      imgHome: ChinchePlano,
      img: ChinchePlano,
      title: "Chinche Plano “Flag Bug”",
      subtitle: "Subtítulo del Item 2",
      description:
        "Probablemente sea de la especie más grande de su familia en Sudamérica.",
      info: info2,
    },
    {
      imgHome: EscarabajoTigre,
      img: EscarabajoTigre,
      title: "Escarabajo Tigre",
      subtitle: "Subtítulo del Item 3",
      description:
        "es el insecto más rápido de todo el mundo, son cazadores innatos con una excelente visión.",
      info: info3,
    },
    {
      imgHome: BichosEspina,
      img: BichosEspina,
      title: "Bichos Espina",
      subtitle: "Subtítulo del Item 4",
      description:
        "Son como cigarritas pero el sonido que producen es de una frecuencia tan baja, que no es audible por nosotros.",
      info: info4,
    },
    {
      imgHome: ChincheMalholiente,
      img: ChincheMalholiente,
      title: "Chinche Malholiente",
      subtitle: "Subtítulo del Item 5",
      description:
        "Esta especie muda de exoesqueleto constantemente hasta llegar a la adultez",
      info: info5,
    },
    {
      imgHome: EscarabajoEscamado,
      img: EscarabajoEscamado,
      title: "Escarabajo Escamado",
      subtitle: "Subtítulo del Item 6",
      description:
        "Es un escarabajo que sus larvas se crían dentro de tejido vegetal vivo.",
      info: info6,
    },
    {
      imgHome: AbejaNativa,
      img: AbejaNativa,
      title: "Abeja Nativa sin Aguijón",
      subtitle: "Subtítulo del Item 7",
      description:
        "Son animales sociales, construyen colmenas en los huecos dentro de los árboles con un gran follaje y sombras. ",
      info: info7,
    },
    {
      imgHome: AbejaSolitaria,
      img: AbejaSolitaria,
      title: "Abeja Solitaria",
      subtitle: "Subtítulo del Item 8",
      description:
        "Son tantas especies diferentes que habitan desde Ontario Canadá en hasta la pampa en Argentina.",
      info: info8,
    },
    {
      imgHome: BichoCazador,
      img: BichoCazador,
      title: "Bicho Cazador",
      subtitle: "Subtítulo del Item 9",
      description:
        "De la misma familia que las vinchucas. Las formas y colores les sirven de camuflaje para parecer hojas secas.",
      info: info9,
    },
    /*{
      imgHome: "",
      img: "",
      title: "Mosca Dorada",
      subtitle: "Subtítulo del Item 10",
      description:
        "son comunes en las casas, sus larvas son descomponedoras de materia orgánica",
      info: "codigo_qr_8.png",
    },*/
  ];
  return (
    <Router>
      <ImageProvider>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/detalle/:id" element={<DetailItem data={data} />} />
        </Routes>
      </ImageProvider>
    </Router>
  );
}

export default App;
