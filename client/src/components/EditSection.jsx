import React from "react";
import InputGroup from "./InputGroup";

const EditSection = ({ datalist, setIsEdit }) => {
  return (
    <>
      <InputGroup datalist={datalist} setIsEdit={setIsEdit} />
    </>
  );
};

export default EditSection;
