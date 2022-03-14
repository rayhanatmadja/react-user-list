import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";

const DUMMY_USERDATA = [
  {
    id: 1,
    username: "Kokushibo",
    age: 20,
  },
  {
    id: 2,
    username: "Yoriichi",
    age: 18,
  },
];

const App = () => {
  const [userData, setUserData] = useState(DUMMY_USERDATA);

  const saveNewUserHandler = addedData => {
    setUserData(prevVal => {
      return [addedData, ...prevVal];
    });
  };

  return (
    <div>
      <AddUsers onSaveUser={saveNewUserHandler} />
    </div>
  );
};

export default App;
