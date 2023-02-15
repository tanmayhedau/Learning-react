import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const inputField = useRef();

  const clickHandler = () => {
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red";
    console.log(inputField.current);
  };

  return (
    <div className="App">
      <Header />
      <input ref={inputField} />

      <button onClick={clickHandler}>submit</button>
    </div>
  );
}

export default App;
