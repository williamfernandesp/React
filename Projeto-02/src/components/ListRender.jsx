import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users] = useState([
    { id: 1, name: "William", age: 31 },
    { id: 89, name: "Rosangela", age: 60 },
    { id: 112, name: "Carlos", age: 55 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
