import React, { useReducer } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
// import "./components/Todo.css";
import { initialState, reducer } from "./reducer/reducer";

function App() {
  // declare state and dispatch with reducer (form functions)
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  // actions, calling to the reducer functions through dispatch to manipulate the state
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" });
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <p></p>
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleComplete={handleComplete} />

      <button
        className="ClearButton"
        onClick={(event) => {
          event.preventDefault();
          clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;