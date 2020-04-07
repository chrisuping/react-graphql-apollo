import React from "react";
import gql from "graphql-tag";
import { Query, useQuery } from "react-apollo";
import Loading from "../Loading";
import RepositoryList from "../Repository";

const GET_CURRENT_USER = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;
const GET_DATA = gql`
  {
    viewer {
      login
      name
    }
  }
`;
const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(first: 5, orderBy: { direction: DESC, field: STARGAZERS }) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;
const Profile = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES_OF_CURRENT_USER);
  if (loading) {
    return <Loading />;
  }
  console.log(">>>>", data);
  const { viewer } = data;
  return (
    <div>
      <h1>TEST</h1>
      <RepositoryList repositories={viewer.repositories} />
    </div>
  );
};
export default Profile;
