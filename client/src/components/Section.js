import React, { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import List from "./List";
import { GET_USERS } from "../actions/query";
import { UPDATE_USERS } from "../actions/mutation";

function Section({ data }) {
  const client = useApolloClient();
  const [datalist, setDataList] = useState(data);
  const [isError, setIsError] = useState(false);
  const [updateUser, updateUserResult] = useMutation(UPDATE_USERS);
  const handleAdd = () => {
    const temp = {
      users: [
        ...datalist.users,
        {
          id: String(Math.random() * 100).slice(0, 2),
          name: "Tom",
          phone: "15625896301",
          email: "tom@email.com",
          address: "Beijing",
          __typename: "User",
        },
      ],
    };
    client.writeQuery({
      query: GET_USERS,
      data: { ...temp },
    });
    setDataList({ ...temp });
  };
  useEffect(() => {
    if (updateUserResult.error) {
      setIsError(true);
    }
  }, [updateUserResult]);

  const handleDelete = (e, id) => {
    setDataList({ users: datalist.users.filter((item) => item.id !== id) });
  };
  const handleMutation = () => {
    updateUser({
      variables: {
        ...datalist,
      },
    });
  };
  if (!isError) {
    return (
      <div>
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
        &nbsp;
        <button
          onClick={() => {
            handleMutation();
          }}
        >
          Update
        </button>
        <List data={datalist} handleDelete={handleDelete} />
      </div>
    );
  }
  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}

export default Section;
