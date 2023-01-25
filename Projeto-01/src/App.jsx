import { useState } from "react";
import "./App.css";
import Challenge from "./components/Challenge";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpressions from "./components/TemplateExpression";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
