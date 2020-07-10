import React from "react";
import { Button } from "antd";
import { useApolloClient } from "@apollo/react-hooks";
import { GET_USERS } from "../actions/query";
import ListTitle from "./common/ListTitle";

const List = ({ handleDelete }) => {
  const client = useApolloClient();
  const data = client.readQuery({
    query: GET_USERS,
  });
  const dataSource = [...data.users];
  dataSource.map((item) => {
    return {
      ...item,
      key: item.id,
    };
  });
  return (
    <>
      <div className="ant-table">
        <div className="ant-table-container">
          <div className="ant-table-content">
            <table>
              <ListTitle />
              <tbody className="ant-table-tbody">
                {data.users.map((user) => (
                  <tr key={user.id}>
                    <td className="ant-table-cell">{user.name}</td>
                    <td className="ant-table-cell">{user.phone}</td>
                    <td className="ant-table-cell">{user.email}</td>
                    <td className="ant-table-cell">{user.address}</td>
                    <td className="ant-table-cell">
                      <Button
                        onClick={(e) => {
                          handleDelete(e, user.id);
                        }}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
