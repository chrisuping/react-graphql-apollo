import React from "react";
import gql from "graphql-tag";
import { Query, useQuery } from "react-apollo";
import Loading from "../components/common/Loading";
import { GET_CURRENT_USER, GET_CHARACTERS } from "../actions/query";

const App = () => {
  const { data, loading } = useQuery(GET_CHARACTERS);
  if (loading) {
    return <Loading />;
  }
  const {
    characters: { results },
  } = data;
  console.log(">>>>", data);
  return (
    <div>
      <h1>TEST</h1>
      <div>
        {results.map((character) => {
          return (
            <div key={character.name} className="character">
              {/* <img src={character.image} alt={character.name} /> */}
              <p>{character.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
