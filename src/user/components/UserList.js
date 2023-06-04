import React from "react";
import Card from "../../shared/components/UIElements/card/Card";
import UserItem from "./UserItem";
import './UsersList.css';

const UserList = (props) => {
  if (!props.items.length) {
    return <h1 className="center">
      <Card><h2>No User Found</h2></Card>
    </h1>;
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
