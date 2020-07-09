import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    users {
      id
      name
      phone
      email
      address
    }
  }
`;
