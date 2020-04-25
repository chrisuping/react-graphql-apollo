import gql from "graphql-tag";

export const ADD_TODOS = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;
