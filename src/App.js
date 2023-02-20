import "./App.css";
import Header from "./components/Header";
import { useState, useCallback } from "react";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  },[todos]);

  return (
    <div className="App">
      <Header />
      <div>
        Count:{count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
