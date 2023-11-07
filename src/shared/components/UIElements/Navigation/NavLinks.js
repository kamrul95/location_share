import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";
import Button from "../../FormElements/Button";
import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      {auth.isLogin && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {auth.isLogin && (
        <li>
          <NavLink to="/places/add">Add Place</NavLink>
        </li>
      )}
      {!auth.isLogin && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {auth.isLogin && (
        <li>
          <Button onClick={auth.logout}>Logout</Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
