import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);

  const n = 9;
  const [name] = useState("William");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Componente */}
      <MyComponent />
      {/* CSS Inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma Inline
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name == "William"
            ? { color: "white", backgroundColor: "black" }
            : { color: "yellow", backgroundColor: "gray" }
        }
      >
        {name}
      </h2>
      {/* Classe CSS Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
