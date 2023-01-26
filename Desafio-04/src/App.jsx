import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UserDetails />
    </div>
  );
}

export default App;
