import React from "react";
import gql from "graphql-tag";
import { Query, useQuery } from "react-apollo";
import Loading from "../components/common/Loading";
import { GET_CURRENT_USER, GET_CHARACTERS } from "../actions/query";
import { Input, Button, Row, Col } from "antd";
const container = {
  padding: 24,
};
const App = () => {
  // const { data, loading } = useQuery(GET_CHARACTERS);
  // if (loading) {
  //   return <Loading />;
  // }
  // console.log(">>>>", data);
  // const {
  //   characters: { results },
  // } = data;
  return (
    <div style={container}>
      <Row>
        <Col span={24}>
          <Input placeholder="Please type" style={{ width: "70%" }} />
          <Button type="primary">ADD</Button>
        </Col>
      </Row>
    </div>
  );
};
export default App;
