import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { Query, useQuery, useMutation } from "react-apollo";
import Loading from "./common/Loading";
import { Input, Button, Row, Col } from "antd";
import { ADD_TODOS } from "../actions/mutation";
import { GET_TODOS } from "../actions/query";

const container = {
  padding: 24,
};
const App = () => {
  const [isClick, setIsClick] = useState(false);
  const [toggleTodo, toggleTodoResult] = useMutation(ADD_TODOS);
  const { data } = useQuery(GET_TODOS);
  // const { data, loading } = useQuery(GET_CHARACTERS);
  // if (loading) {
  //   return <Loading />;
  // }
  console.log(">>>>", data);
  // const {
  //   characters: { results },
  // } = data;
  useEffect(() => {
    if (!isClick) return;
    toggleTodo({ variables: { id: "12" } });
    setIsClick(false);
  }, [isClick]);

  useEffect(() => {
    if (!toggleTodoResult.called) return;
    console.log(toggleTodoResult);
  }, [toggleTodoResult]);

  return (
    <div style={container}>
      <Row>
        <Col span={24}>
          <Input placeholder="Please type" style={{ width: "70%" }} />
          <Button
            type="primary"
            onClick={() => {
              setIsClick(true);
            }}
          >
            ADD
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default App;
