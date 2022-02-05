import React, { useState } from "react";

import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUsersList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: userName, age: userAge, id: Math.random }];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler} />
      {userList.length > 0 && <UsersList list={userList} />}
    </div>
  );
}
export default App;
