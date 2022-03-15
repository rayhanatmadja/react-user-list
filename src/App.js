import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const DUMMY_DATA_USERS = [
  {
    id: 1,
    username: "Kokushibo",
    age: 24,
  },
  {
    id: 2,
    username: "Yoriichi",
    age: 22,
  },
];

const App = () => {
  const [usersList, setUsersList] = useState(DUMMY_DATA_USERS);

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
