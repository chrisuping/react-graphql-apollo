import React, { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { GET_USERS } from "../actions/query";
import { UPDATE_USERS } from "../actions/mutation";
import EditSection from "./EditSection";
import AddSection from "./AddSection";

function Section() {
  const client = useApolloClient();
  const datalist = client.readQuery({
    query: GET_USERS,
  });
  // const [datalist, setDataList] = useState(data);
  console.log(datalist);
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [updateUser, updateUserResult] = useMutation(UPDATE_USERS);
  const handleAdd = () => {
    setIsEdit(true);
  };
  useEffect(() => {
    if (updateUserResult.error) {
      setIsError(true);
    }
  }, [updateUserResult]);

  const handleDelete = (e, id) => {
    const temp = {
      users: [...datalist.users.filter((item) => item.id !== id)],
    };
    client.writeQuery({
      query: GET_USERS,
      data: { ...temp },
    });
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
      <EditSection datalist={datalist} setIsEdit={setIsEdit} />
    </>
  );
}

export default Section;
