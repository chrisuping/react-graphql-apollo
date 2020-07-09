const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
    name: String
  }

  type Query {
    users: [User]
  }
`;

const mockData = {
  data: [
    {
      id: "001",
      login: "test_login",
      avatar_url: "test_url",
      name: "test_name",
    },
  ],
};

const resolvers = {
  Query: {
    users: async () => {
      try {
        // const users = await axios.get("https://api.github.com/users");
        const users = { ...mockData };
        console.log(users);
        return users.data.map(({ id, login, avatar_url, name }) => ({
          id,
          login,
          avatar_url,
          name,
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//  typeDefs: typeDefs,
//  resolvers: resolvers
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
