import React, { useState } from "react";
import { Button, Input } from "antd";
import ListTitle from "./common/ListTitle";

const EditSection = ({ handleSave }) => {
  return (
    <>
      <InputList />
      <Button
        style={{ marginTop: "16px" }}
        type="primary"
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </Button>
    </>
  );
};

const InputList = ({ handleSave }) => {
  return (
    <>
      <div className="ant-table">
        <div className="ant-table-container">
          <div className="ant-table-content">
            <table>
              <ListTitle />
              <tbody className="ant-table-tbody">
                <td className="ant-table-cell">
                  <Input placeholder="Basic usage" size="small" />
                </td>
                <td className="ant-table-cell">
                  <Input placeholder="Basic usage" size="small" />
                </td>
                <td className="ant-table-cell">
                  <Input placeholder="Basic usage" size="small" />
                </td>
                <td className="ant-table-cell">
                  <Input placeholder="Basic usage" size="small" />
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSection;
