import gql from "graphql-tag";

export const GET_TODOS = gql`
  {
    todos @client {
      id
      name
      completed
      text
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($name: String!) {
    addTodo(name: $name) @client {
      name
    }
  }
`;
