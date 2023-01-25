import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/Paisagem-1.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3535 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 50000 },
    { id: 4, brand: "FIAT", color: "Vermelha", newCar: true, km: 0 },
  ];

  return (
    <div className="App">
      {/* Imagem em Public */}
      <img src="/o-que-e-paisagem.jpg" alt="Paisagem" />

      {/* Imagem em Assets */}
      <div>
        <img src={Paisagem} alt="Paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="FORD" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="FIAT" km={2000} color="Branco" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Teste" />
      {/* Children */}
      <Container myValue="Teste">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Teste2">
        <p>Testando container</p>
      </Container>
    </div>
  );
}

export default App;
