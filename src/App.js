import "./App.css";
import Header from "./components/Header";
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveCalculation = (num) => {
    console.log("cal");
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  const calculation = useMemo(() => {
    expensiveCalculation(count);
  }, []);
  return (
    <div className="App">
      <Header />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </div>
  );
}

export default App;
