import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  {
    rates(currency: "USD") {
      currency
      name @client
    }
  }
`;

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        # namef @client
        id
        name
        image
      }
    }
  }
`;
