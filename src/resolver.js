//import gql from "graphql-tag";
import RandomID from "random-id";
import { GET_TODOS } from "./queries/query";

/*export const typeDefs = gql`
    type Todo {
      id: Int!
      name: String!
      completed: Boolean!
    }
  
    type Query {
      getTodos: [Todo]!
    }
  
    type Mutation {
      addTodo(todo_name: String!): Todo!
    }
  `;
  */
export const resolvers = {
  Mutation: {
    addTodo: (_, todo, { cache }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      let new_todo = {
        id: RandomID(10),
        name: todo.name,
        completed: false,
        text: RandomID(2),
        __typename: "todo",
      };
      cache.writeData({
        data: {
          todos: [...todos, new_todo],
        },
      });
      console.log("TODOS: ", cache.readQuery({ query: GET_TODOS }));
      return new_todo;
    },
  },
};
