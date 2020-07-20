const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    user(id: ID!, name: String!, age: Int!, point: [String!]): User
  }
`;
const users = [
  {
    id: "1",
    name: "Elizabeth Bennet",
  },
  {
    id: "2",
    name: "Fitzwilliam Darcy",
  },
];
const resolvers = {
  Query: {
    user(parent, args, context, info) {
      console.log(args);
      return users.find((user) => user.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
