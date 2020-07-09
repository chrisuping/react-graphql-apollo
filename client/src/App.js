import React, { useState, useEffect } from "react";
import "./App.css";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import List from "./List";

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`;

export const UPDATE = gql`
  mutation update($Input: Input) {
    Update(nput: $Input) {
      id
      login
      avatar_url
    }
  }
`;

function App({ data }) {
  const client = useApolloClient();
  const [datalist, setDataList] = useState(data);
  const [isError, setIsError] = useState(false);
  const [updateUser, updateUserResult] = useMutation(UPDATE);
  const handleAdd = () => {
    const temp = {
      users: [
        ...datalist.users,
        {
          id: String(Math.random() * 100).slice(0, 2),
          login: "fff",
          avatar_url: "sss",
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
          Add info
        </button>
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

export default App;
