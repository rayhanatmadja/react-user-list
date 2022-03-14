import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const saveNewUserHandler = addedDataUsers => {
    setUsersList(prevVal => {
      return [addedDataUsers, ...prevVal];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={saveNewUserHandler} />
      <UsersList usersData={usersList} />
    </div>
  );
};

export default App;
