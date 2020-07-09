import React from "react";
import { useQuery } from "@apollo/react-hooks";

import "./index.css";
import Section from "./components/Section";
import { GET_USERS } from "./actions/query";

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return <Section data={data} />;
};

export default App;
