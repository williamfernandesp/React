import { useState } from "react";

const UserDetails = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "William", age: 19 },
    { id: 2, name: "Rosangela", age: 60 },
    { id: 3, name: "Carlos", age: 55 },
    { id: 4, name: "Lucas", age: 25 },
  ]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) =>
          user.age >= 18 ? (
            <li key={user.id}>
              <p>{user.name} pode tirar a carteira</p>
            </li>
          ) : (
            <li key={user.id}>
              <p>{user.name} é menor de idade</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default UserDetails;
