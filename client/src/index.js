import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import "antd/dist/antd.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache({
  dataIdFromObject: (object) => object.id,
});

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
});

const inititalCache = {
  testNum: "123",
};
client.writeData({ data: inititalCache });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
