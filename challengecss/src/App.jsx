import { useState } from "react";
import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Car Details</h2>
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      <CarDetails brand="FIAT" km={100000} color="Vermelho" newCar={false} />
      <CarDetails brand="AUDI" km={0} color="Preto" newCar={true} />
      <CarDetails brand="BMW" km={100000} color="Verde" newCar={false} />
    </div>
  );
}

export default App;
