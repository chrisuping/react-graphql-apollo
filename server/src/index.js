const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    phone: String
    email: String
    address: String
  }

  type Query {
    users: [User]
  }
`;

const mockData = {
  data: [
    {
      id: "001",
      name: "Alan",
      phone: "15656231896",
      email: "alan@email.com",
      address: "Shanghai",
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
        return users.data.map(({ id, name, phone, email, address }) => ({
          id,
          name,
          phone,
          email,
          address,
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
