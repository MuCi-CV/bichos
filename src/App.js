import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import DetailItem from "./screens/DetailItem";
import BeeSquare from "./assets/images/Bee/square_10.jpg";
import ColeopteraSquare from "./assets/images/Coleoptera Curculionidae/square_10.jpg";
import Coleoptera from "./assets/images/Coleoptera Curculionidae/2x3_40.jpg";
import EscarabajoSquare from "./assets/images/Escarabajo Tigre/square_10.jpg";
import Escarabajo from "./assets/images/Escarabajo Tigre/2x3_40.jpg";
import EspinaSquare from "./assets/images/Espina/square_10.jpg";
import StinkSquare from "./assets/images/Stink Bug/square_10.jpg";
import SweatSquare from "./assets/images/Sweat Bee/square_10.jpg";
import TortoiseSquare from "./assets/images/Tortoise/square_10.jpg";
import UnknownSquare from "./assets/images/Unknown/square_10.jpg";
import { ImageProvider } from "./Context/ImageContext";

function App() {
  const data = [
    {
      imgHome: BeeSquare,
      img: BeeSquare,
      title: "Item 1",
      subtitle: "Subtítulo del Item 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
      qr: "codigo_qr_1.png",
    },
    {
      imgHome: ColeopteraSquare,
      img: Coleoptera,
      title: "Item 2",
      subtitle: "Subtítulo del Item 2",
      description: "Descripción detallada del Item 2.",
      qr: "codigo_qr_2.png",
    },
    {
      imgHome: EscarabajoSquare,
      img: Escarabajo,
      title: "Item 3",
      subtitle: "Subtítulo del Item 3",
      description: "Descripción detallada del Item 3.",
      qr: "codigo_qr_3.png",
    },
    {
      imgHome: EspinaSquare,
      img: EspinaSquare,
      title: "Item 4",
      subtitle: "Subtítulo del Item 4",
      description: "Descripción detallada del Item 4.",
      qr: "codigo_qr_4.png",
    },
    {
      imgHome: StinkSquare,
      img: StinkSquare,
      title: "Item 5",
      subtitle: "Subtítulo del Item 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
      qr: "codigo_qr_5.png",
    },
    {
      imgHome: SweatSquare,
      img: SweatSquare,
      title: "Item 6",
      subtitle: "Subtítulo del Item 6",
      description: "Descripción detallada del Item 6.",
      qr: "codigo_qr_6.png",
    },
    {
      imgHome: TortoiseSquare,
      img: TortoiseSquare,
      title: "Item 7",
      subtitle: "Subtítulo del Item 7",
      description: "Descripción detallada del Item 7.",
      qr: "codigo_qr_7.png",
    },
    {
      imgHome: UnknownSquare,
      img: UnknownSquare,
      title: "Item 8",
      subtitle: "Subtítulo del Item 8",
      description: "Descripción detallada del Item 8.",
      qr: "codigo_qr_8.png",
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
