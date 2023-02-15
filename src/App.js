import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 2;
  } else if (action.type === "DEC") {
    return state - 2;
  } else if (action.type === "MUL") {
    return state * 2;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <Header />
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>multipy</button>
    </div>
  );
}

export default App;
