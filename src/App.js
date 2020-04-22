import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_TODOS, ADD_TODO } from "./queries/query";
// import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const { loading, error, data } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);

  if (loading) return <h2> Loading... </h2>;
  if (error) return <h2> ERROR...: {error} </h2>;
  return (
    <div className="App">
      <h1>TODOS:</h1>
      {data.todos.map((todo) => (
        <li key={todo.id}> {todo.name} </li>
      ))}
      <input
        placeholder="add a Todo"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        onClick={() => {
          setTask("");
          addTodo({
            variables: {
              name: task,
            },
          });
        }}
      >
        Add
      </button>
    </div>
  );
}
