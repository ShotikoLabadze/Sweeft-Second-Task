import React from "react";

export default function Users(props) {
  return (
    <div className="users-container">
      {props.userList.map((user, index) => {
        const query = `?q=${user.id}`;

        if (props.userList.length - 1 === index) {
          return (
            <div key={user.id} ref={props.setLastElement}>
              <p>{user.id}</p>
            </div>
          );
        }
        return <p>{user.id}</p>;
      })}
    </div>
  );
}
