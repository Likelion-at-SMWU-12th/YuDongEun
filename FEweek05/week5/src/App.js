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
      setUsers((users) => users.concat(user)); //함수형 업데이트

      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
    },
    [username, email] //여기에 뭐가 들어가야 할까?
  );

  const onRemove = useCallback((id) => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    //즉, user.id가 id인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    //id 값을 비교해서 id가 다르면 그대로 두고, 같으면 active 값을 바꾼다
    setUsers(
      //함수형 업데이트
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

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
