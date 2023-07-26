import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uname, uage) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList} />
    </div>
  );
}

export default App;
