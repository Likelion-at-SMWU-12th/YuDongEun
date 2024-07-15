import React, { useCallback, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sookmyung",
      email: "sookmyung@example.com",
      active: true,
    },
    {
      id: 2,
      username: "mutsa",
      email: "likelion@example.com",
      active: false,
    },
    {
      id: 3,
      username: "dongeun",
      email: "dongeun@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4); //nextID의 기본값이 4
  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email,
      };
      setUsers(users.concat(user));

      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
    },
    [username, email, users] //여기에 뭐가 들어가야 할까?
  );

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <br />
      <hr />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />;
    </>
  );
}

export default App;
