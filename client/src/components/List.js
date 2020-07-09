import React from "react";

const List = ({ data, handleDelete }) => {
  return (
    <>
      <table>
        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>
                <span>{user.name}</span>&nbsp;
                <span>{user.phone}</span>&nbsp;
                <span>{user.email}</span>&nbsp;
                <span>{user.address}</span>&nbsp;
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
