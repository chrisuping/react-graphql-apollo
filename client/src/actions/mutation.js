import gql from "graphql-tag";

export const UPDATE_USERS = gql`
  mutation updateUsers($Input: Input) {
    Update(Input: $Input) {
      id
    }
  }
`;
