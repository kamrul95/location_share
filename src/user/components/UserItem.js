import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/avatar/Avatar";
import Card from '../../shared/components/UIElements/card/Card';
import "./UsersItem.css";

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar alt={name} image={image} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
