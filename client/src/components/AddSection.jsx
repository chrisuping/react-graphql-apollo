import React from "react";
import List from "./List";
import { Button } from "antd";

const AddSection = ({ datalist, handleAdd, handleDelete }) => {
  return (
    <>
      <List data={datalist} handleDelete={handleDelete} />
      <Button
        style={{ marginTop: "16px" }}
        type="primary"
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </Button>
    </>
  );
};

export default AddSection;
