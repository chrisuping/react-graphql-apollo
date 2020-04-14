import React from "react";
import gql from "graphql-tag";
import { Query, useQuery } from "react-apollo";
import Loading from "../components/common/Loading";
import { GET_CURRENT_USER } from "../actions/query";

const App = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER);
  if (loading) {
    return <Loading />;
  }
  const { rates } = data;
  console.log(">>>>", rates);
  return (
    <div>
      <h1>TEST</h1>
      <div>
        {rates.map((item) => (
          <h3>{item.currency}</h3>
        ))}
      </div>
    </div>
  );
};
export default App;
