import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import userStyle from "./AddUser.module.css";

const AddUsers = ({ onAddUser }) => {
  const [inputUser, setInputUser] = useState({
    enteredUsername: "",
    enteredAge: "",
  });

  const [isValid, setIsValid] = useState(true);

  const inputUsernameHandler = event => {
    const newValue = event.target.value;
    setInputUser(prevInput => {
      return { ...prevInput, enteredUsername: newValue };
    });
  };

  const inputAgeHandler = event => {
    const newValue = event.target.value;
    setInputUser(prevInput => {
      return { ...prevInput, enteredAge: newValue };
    });
  };

  const addUserHandler = event => {
    event.preventDefault();
    setInputUser({
      enteredUsername: "",
      enteredAge: "",
    });
    if (
      inputUser.enteredUsername.trim().length < 1 ||
      inputUser.enteredAge.trim().length < 1
    ) {
      setIsValid(false);
      return;
    }
    if (+inputUser.enteredAge < 1) {
      setIsValid(false);
      return;
    }
    const usersListData = {
      username: inputUser.enteredUsername,
      age: inputUser.enteredAge,
    };
    onAddUser(usersListData);
  };

  return (
    <Card userStyle={userStyle.input}>
      <form onSubmit={addUserHandler} className={userStyle.input}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={inputUser.enteredUsername}
          onChange={inputUsernameHandler}
        />
        <label htmlFor="age">Age (Year)</label>
        <input
          id="age"
          type="number"
          value={inputUser.enteredAge}
          onChange={inputAgeHandler}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
