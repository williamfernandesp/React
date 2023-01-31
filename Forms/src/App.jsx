import { useState } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "William",
          email: "william@gmail.com",
          bio: "Sou um desenvolvedor",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
