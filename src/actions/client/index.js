import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

// const GITHUB_BASE_URL = "https://48p1r2roz4.sse.codesandbox.io";
const GITHUB_BASE_URL = "https://rickandmortyapi.com/graphql/";

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();
//{ id: 0, completed: false, text: "Initial data" }
cache.writeData({
  data: {
    todos: [],
    visibilityFilter: "SHOW_ALL",
    networkStatus: {
      __typename: "NetworkStatus",
      isConnected: false,
    },
  },
});
const client = new ApolloClient({
  link,
  cache,
  resolvers: {
    Mutation: {
      toggleTodo: (_root, variables, { cache, getCacheKey }) => {
        console.log(cache);
        const id = getCacheKey({ __typename: "TodoItem", id: variables.id });
        const fragment = gql`
          fragment completeTodo on TodoItem {
            completed
          }
        `;
        const todo = cache.readFragment({ fragment, id });
        const data = { ...todo, completed: !todo.completed };
        cache.writeData({ id, data });
        return null;
      },
    },
    // Query: {
    //   getCharacters: (_root, variables, { cache, getCacheKey }) => {
    //     console.log(_root);
    //   },
    // },
    // rates: {
    //   name() {
    //     console.log(111);
    //     return "hhh";
    //   },
    // },
  },
});

export default client;
