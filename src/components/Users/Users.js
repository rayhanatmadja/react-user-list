import React from "react";
import AddUsers from "./AddUsers";

const Users = ({ onSaveUser }) => {
  const addNewUserHandler = entredUserData => {
    const saveNewUser = {
      ...entredUserData,
      id: Math.random().toString(),
    };
    onSaveUser(saveNewUser);
  };

  return (
    <div>
      <AddUsers onAddUser={addNewUserHandler} />
    </div>
  );
};

export default Users;
