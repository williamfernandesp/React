import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/Paisagem-1.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default App;
