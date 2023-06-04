import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Yousuf",
      image:
        "https://images.unsplash.com/photo-1640117870130-a35c8203a9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      places: 1,
    },{
      id: "u2",
      name: "Abdullah",
      image:
        "https://images.unsplash.com/photo-1665307390883-b7335ed2c085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      places: 5,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
