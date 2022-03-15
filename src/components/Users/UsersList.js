import React from "react";
import listStyle from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ usersData }) => {
  return (
    <Card listStyle={listStyle.users}>
      <ul>
        {usersData.map(user => {
          return (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
