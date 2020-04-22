import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
