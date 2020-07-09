import React from "react";
import "./App.css";

const List = ({ data, handleDelete }) => {
  return (
    <>
      <table>
        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>
                <span>{user.id}</span>&nbsp;
                <span>{user.login}</span>&nbsp;
                <span>{user.avatar_url}</span>&nbsp;
                <button
                  onClick={(e) => {
                    handleDelete(e, user.id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
