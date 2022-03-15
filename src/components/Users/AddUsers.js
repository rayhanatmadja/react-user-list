import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import userStyle from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ onAddUser }) => {
  const [inputUser, setInputUser] = useState({
    enteredUsername: "",
    enteredAge: "",
  });

  const [isValid, setIsValid] = useState(true);
  const [errorModal, setErrorModal] = useState();

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
    if (inputUser.enteredUsername.trim().length < 1) {
      setIsValid(false);
      setErrorModal({
        title: "Something went wrong",
        message: "Username cannot be empty, please fill the username",
      });
    }
    if (+inputUser.enteredAge < 1) {
      setIsValid(false);
      setErrorModal({
        title: "Something went wrong",
        message: "The input age cannot empty or (< 0)",
      });
    }
    const usersListData = {
      id: Math.random().toString(),
      username: inputUser.enteredUsername,
      age: inputUser.enteredAge,
    };
    onAddUser(usersListData);
  };

  const btnCloseModalHandler = () => {
    setErrorModal(null);
  };

  return (
    <div>
      {errorModal ? (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          onClose={btnCloseModalHandler}
        />
      ) : null}
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
    </div>
  );
};

export default AddUsers;
