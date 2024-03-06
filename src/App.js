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
import MoscaDorada from "./assets/images/mosca_30.jpg";
import { ImageProvider } from "./Context/ImageContext";
import info1 from "./assets/Tablas_Informativas_Actualizadas/Escarabajo-tortuga.png";
import info2 from "./assets/Tablas_Informativas_Actualizadas/Chinche-Plana.png";
import info3 from "./assets/Tablas_Informativas_Actualizadas/Escarabajo-tigre.png";
import info4 from "./assets/Tablas_Informativas_Actualizadas/Cigarrita-Espina.png";
import info5 from "./assets/Tablas_Informativas_Actualizadas/Chinche-Maloliente.png";
import info6 from "./assets/Tablas_Informativas_Actualizadas/Gorgojo-Escamoso.png";
import info7 from "./assets/Tablas_Informativas_Actualizadas/Abeja-sin-Aguijon.png";
import info8 from "./assets/Tablas_Informativas_Actualizadas/Abeja-del-Sudor.png";
import info9 from "./assets/Tablas_Informativas_Actualizadas/Chinche-acechadora.png";
import info10 from "./assets/Tablas_Informativas_Actualizadas/Mosca-dorada.png";
import EscarabajoTortugaSmall from "./assets/images/escarabajoTortugaSmall.jpg";
import ChinchePlanoSmall from "./assets/images/chinchePlanoSmall.jpg";
import EscarabajoTigreSmall from "./assets/images/escarabajoTigreSmall.jpg";
import BichosEspinaSmall from "./assets/images/bichoEspinaSmall.jpg";
import ChincheMalholienteSmall from "./assets/images/chincheMalholienteSmall.jpg";
import EscarabajoEscamadoSmall from "./assets/images/escarabajoEscamadoSmall.jpg";
import AbejaNativaSmall from "./assets/images/abejaNativaSmall.jpg";
import AbejaSolitariaSmall from "./assets/images/abejaSolitariaSmall.jpg";
import BichoCazadorSmall from "./assets/images/bichoCazadorSmall.jpg";
import MoscaDoradaSmall from "./assets/images/mosca_5.jpg";

function App() {
  const data = [
    {
      imgHome: EscarabajoTortugaSmall,
      img: EscarabajoTortuga,
      title: "Escarabajo Tortuga",
      subtitle: "Subtítulo del Item 1",
      description:
        "La forma de su caparazón dificulta el agarre de los depredadores.",
      info: info1,
      medidas: 18.6,
    },
    {
      imgHome: ChinchePlanoSmall,
      img: ChinchePlano,
      title: "Chinche Plana",
      subtitle: "Subtítulo del Item 2",
      description:
        "Su superficie es capaz de absorber y perder agua rápidamente imitando así la tonalidad del tronco en donde descansa.",
      info: info2,
      medidas: 21.5,
    },
    {
      imgHome: EscarabajoTigreSmall,
      img: EscarabajoTigre,
      title: "Escarabajo Tigre",
      subtitle: "Subtítulo del Item 3",
      description:
        "Es un cazador innato con excelente visión que utiliza termiteros como refugio y plataforma de cacería.",
      info: info3,
      medidas: 28.4,
    },
    {
      imgHome: BichosEspinaSmall,
      img: BichosEspina,
      title: "Cigarrita Espina",
      subtitle: "Subtítulo del Item 4",
      description:
        "Viven en grupos y se comunican con sus compañeros a través de vibraciones y sonidos no audibles por el ser humano.",
      info: info4,
      medidas: 18.7,
    },
    {
      imgHome: ChincheMalholienteSmall,
      img: ChincheMalholiente,
      title: "Chinche Maloliente",
      subtitle: "Subtítulo del Item 5",
      description:
        "Su principal sistema de defensa es liberar un líquido de olor penetrante que incomoda a los depredadores.",
      info: info5,
      medidas: 27.6,
    },
    {
      imgHome: EscarabajoEscamadoSmall,
      img: EscarabajoEscamado,
      title: "Gorgojo Escamoso",
      subtitle: "Subtítulo del Item 6",
      description:
        "Presentan el cuerpo cubierto de escamas que refractan la luz y producen hermosas tonalidades.",
      info: info6,
      medidas: 15.5,
    },
    {
      imgHome: AbejaNativaSmall,
      img: AbejaNativa,
      title: "Abeja sin Aguijón",
      subtitle: "Subtítulo del Item 7",
      description:
        "Son animales sociales, construyen colmenas en huecos dentro de grandes árboles.",
      info: info7,
      medidas: 21.1,
    },
    {
      imgHome: AbejaSolitariaSmall,
      img: AbejaSolitaria,
      title: "Abeja del Sudor",
      subtitle: "Subtítulo del Item 8",
      description:
        "No son agresivas aunque poseen un aguijón y forman parte de una inmensa mayoría de especies de abejas de hábitos solitarios.",
      info: info8,
      medidas: 20.7,
    },
    {
      imgHome: BichoCazadorSmall,
      img: BichoCazador,
      title: "Chinche Acechadora",
      subtitle: "Subtítulo del Item 9",
      description:
        "Es un cazador que se esconde entre las flores aprovechando su parecido con partes secas de la planta.",
      info: info9,
      medidas: 15.6,
    },
    {
      imgHome: MoscaDoradaSmall,
      img: MoscaDorada,
      title: "Mosca Dorada",
      subtitle: "Subtítulo del Item 10",
      description:
        "Sus larvas se alimentan de materia orgánica en descomposición y contribuyen a degradar los restos vegetales e integrar sus componentes al suelo.",
      info: info10,
      medidas: 27.5,
    },
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
