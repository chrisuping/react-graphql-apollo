import React, { useState } from "react";
import { Button, Input } from "antd";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { GET_USERS } from "../actions/query";

const InputGroup = ({ datalist, setIsEdit }) => {
  const [data, setData] = useState(datalist);
  const client = useApolloClient();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const handleSave = () => {
    if (!userName || !userPhone || !userEmail || !userAddress) return;
    const temp = {
      users: [
        ...data.users,
        {
          id: String(Math.random() * 100).slice(0, 2),
          name: userName,
          phone: userPhone,
          email: userEmail,
          address: userAddress,
          __typename: "User",
        },
      ],
    };
    client.writeQuery({
      query: GET_USERS,
      data: { ...temp },
    });
  };
  return (
    <>
      <div>
        <div className="ant-spin-container">
          <ul className="ant-list-items">
            <li className="ant-list-item ant-list-item-no-flex">
              Name:
              <Input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                size="medium"
              />
            </li>
            <li className="ant-list-item ant-list-item-no-flex">
              Phone:
              <Input
                onChange={(e) => {
                  setUserPhone(e.target.value);
                }}
                size="medium"
              />
            </li>
            <li className="ant-list-item ant-list-item-no-flex">
              Email:
              <Input
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                size="medium"
              />
            </li>
            <li className="ant-list-item ant-list-item-no-flex">
              Address:
              <Input
                onChange={(e) => {
                  setUserAddress(e.target.value);
                }}
                size="medium"
              />
            </li>
          </ul>
        </div>
      </div>
      <Button
        style={{ marginTop: "16px" }}
        type="primary"
        onClick={() => {
          handleSave();
          setIsEdit(false);
        }}
      >
        Save
      </Button>
    </>
  );
};

export default InputGroup;
