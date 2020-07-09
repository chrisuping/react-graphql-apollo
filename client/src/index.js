import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import gql from "graphql-tag";

const cache = new InMemoryCache({
  dataIdFromObject: (object) => object.id,
});

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
});

const inititalCache = {
  testNum: "333",
};
client.writeData({ data: inititalCache });

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`;
const Container = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return <App data={data} />;
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
