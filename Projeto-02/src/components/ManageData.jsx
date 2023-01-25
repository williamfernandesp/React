import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>Valor: {someData}</div>
      <button onClick={() => (someData = 15)}>Mudar variável</button>
      <p>valor: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar o State</button>
    </div>
  );
};

export default ManageData;
