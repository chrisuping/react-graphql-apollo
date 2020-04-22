import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from "./App";
import { resolvers } from "./resolver";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers,
});

cache.writeData({
  data: {
    todos: [],
  },
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<ApolloApp />, rootElement);
