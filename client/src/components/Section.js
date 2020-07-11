import React, { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { GET_USERS } from "../actions/query";
import { UPDATE_USERS } from "../actions/mutation";
import AddSection from "./AddSection";

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

  return (
    <>
      <AddSection
        datalist={datalist}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Section;
