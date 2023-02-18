import React from "react";
import classes from "../Css/UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}-{user.age}살
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
