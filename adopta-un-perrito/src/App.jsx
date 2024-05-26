import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="container">
        <MyCard
          image="https://media.istockphoto.com/id/1551607933/es/foto/perro-golden-retriever-haciendo-truco.jpg?s=1024x1024&w=is&k=20&c=NkPdiiWyjhulv3eGewqnyDwbWH1Y9P1qI2VBh1JPkaE="
          name="Bartolo"
          text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que merece!"
          bcolor="success"
          btext="Golden"
        />
        <MyCard
          image="https://media.istockphoto.com/id/534003538/es/foto/el-corgi-gal%C3%A9s-pembroke-sentado-sobre-un-fondo-gris.jpg?s=1024x1024&w=is&k=20&c=V8xM6_p6Q1iWNZ-OW9MW89uJRwzP_eLtL6oyDvOCEDw="
          name="Messi"
          text="Es juguetón, amable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          bcolor="primary"
          btext="Corgi"
        />
        <MyCard
          image="https://media.istockphoto.com/id/824848980/es/foto/shiba-rojo-inu-perro-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=gtroI6EAHRtLdneBuRJ7Yn45W_t99HlQ8FAMgREZKus="
          name="Gohan"
          text="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
          bcolor="danger"
          btext="Shiva"
        />
        <MyCard
          image="https://cdn.pixabay.com/photo/2017/06/26/12/39/husky-2443664_1280.jpg"
          name="Princesa"
          text="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          bcolor="warning"
          btext="Husky"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
